import Image from "next/image";
import styles from "./page.module.css";
import Board from './Board';

export default function Home() {
  return (
    <div className={styles.page}>
      <Board />
    </div>
  );
}
