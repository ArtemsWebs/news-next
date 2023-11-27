import styles from '@/app/page.module.css';
import NavBar from '@/app/component/NavBar/NavBar';
import ContentBlock from '@/app/component/Content/ContentBlock';

export default function Main() {
  return (
    <main className={styles.main}>
      <NavBar />
      <ContentBlock />
    </main>
  );
}
