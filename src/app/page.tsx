
import SpaceButton from "@/components/spaceButton/spaceButton";
import styles from "./page.module.css";
import { en } from "@/content/en";
import { createPolyanetsCross, createFullMegaverse } from "@/services/megarverse.service";
import Avatar from "@/app/img/avatar.svg";
import Image from 'next/image';
export default function Home() {

  const handlerPolyanetsCross = async () => {
    "use server";
    createPolyanetsCross(2, 9, 11)
  };

  const handlerFullMegaverse = async () => {
    "use server";
    await createFullMegaverse()
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          alt="avatar"
          src={Avatar}
          height={400}
          width={400}></Image>
        <SpaceButton label={en.firstTest} onClick={handlerPolyanetsCross}></SpaceButton>
        <SpaceButton label={en.secondTest} onClick={handlerFullMegaverse}></SpaceButton>
      </main>

    </div>
  );
}
