import Link from "./Link";
import Head from "next/head";
import styles from '../styles/navbar.module.css'

const MainContainer = ({children, keywords, title}) => {
  return (
    <>
      <Head>
          <meta keywords={"nextjs learn" + keywords}></meta>
          <title>{title}</title>
      </Head>
      <header className={ styles.navbar }>
          <Link href='/'>Главная</Link>
          <Link href='/users'>Пользователи</Link>
      </header>
      { children }
    </>
  );
};

export default MainContainer;