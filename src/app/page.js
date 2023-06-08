import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Home</h1>
      <ul>
        <li>
          <Link href="/porfolio">Porfolio</Link>
        </li>
        <li>
          <Link href="/client">Client</Link>
        </li>
      </ul>
    </main>
  );
}
