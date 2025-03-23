import 'server-only';
import fs from 'fs';
import OpenAI from 'openai';
import memoize from 'memoizee';

const client = new OpenAI();

export const pushFile = async (fileName, force = false, ) => {
  if(!force) {
    const files = await client.files.list();

    console.log(`Search files`);

    const file = files.body.data.find(uploaded => uploaded.filename === fileName);

    if (file) {
      console.log(`Found ${fileName}`);
      return file;
    }
  }
  
  console.log(`Loading ${fileName}`);

  const file = await client.files.create({
    file: fs.createReadStream(fileName),
    purpose: "user_data",
  });

  return file;
};

export const performReading = memoize(async (spread, deck, cards, direction, files) => {
  const reading = spread.readTheSpread(cards);

  const completion = await client.chat.completions.create({
    model: "gpt-4o",
    messages: [{
      role: "user",
      content: [
        ...files.map(file => ({
          type: "file",
          file: {
            file_id: file.id,
          }
        })),
        {
          type: 'text',
          text: `${direction}:\n${reading}`,
        },
      ],
    }],
  });

  console.log(`OpenAI responded: ${JSON.stringify(completion)}`);

  return completion;
}, {
  normalizer: args => {
    return JSON.stringify(args)
  }
});
