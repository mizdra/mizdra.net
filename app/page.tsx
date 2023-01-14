import Image from 'next/image';
import wave from '../public/wave.png';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <Image src={wave} alt="mizdra のアイコン" className={styles.vercel_logo} width={100} height={100} priority />
        </div>
        <p>HNの読みは「みずどら」です</p>
      </div>

      <div className={styles.center}>工事中</div>
    </main>
  );
}
