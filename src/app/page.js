'use client'
import styles from "./page.module.css";
import MainCard from "./components/MainCard";
import CardDisplayer from "./components/CardDisplayer";
import { useTranslation } from "react-i18next";
import "../config/i18next.config"
import TechCard from "./components/TechCard";

export default function Home() {


  const {t, i18n} = useTranslation(["translation"])
  const changeLanguage = ( ) =>{
    i18n.changeLanguage("es")
  }

  return (
    <main className={styles.main}>
      <div>{t('title')}</div>
      <button onClick={changeLanguage}>Change language</button>
      <CardDisplayer className="cardDisplayer">
        <TechCard logo={''}/>
        <TechCard logo={''}/>
        <TechCard logo={''}/>
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
    </main>
   
  );
}
