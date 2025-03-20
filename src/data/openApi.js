import 'server-only';
import fs from "fs";
import OpenAI from "openai";

const client = new OpenAI();


console.log(`server-only ${process.env.OPENAI_API_KEY}`);

export const pushFile = async (file, force = false, ) => {
  if(!force) {
    const files = await openai.files.list();
    const file = files.find(uploaded => uploaded.filename === file);

    if (file) {
      return file;
    }
  }

  const file = await client.files.create({
    file: fs.createReadStream(file),
    purpose: "user_data",
  });

  return file;
};

export const performReading = async (spread, deck, cards, files) => {
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
        }),
        {
          type: 'text',
          text: `Using those documents as a basis, interpret the following:\n${reading}`,
        },
        {
          type: 'text',
          text: `Reword that as advice as it would be said to the Querent`,
        }
      ],
    }],
  });

  console.log(`OpenAI responded: ${JSON.stringify(completion)}`);

  return completion;
};
