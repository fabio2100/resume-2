'use client'
import styles from "./page.module.css";
import MainCard from "./components/MainCard";
import CardDisplayer from "./components/CardDisplayer";

export default function Home() {

  return (
    <main className={styles.main}>
      <CardDisplayer className="cardDisplayer">
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
      </CardDisplayer>
      <div className="cardDisplayer">
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
      </div>
    </main>
   
  );
}
