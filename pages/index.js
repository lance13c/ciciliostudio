import Head from 'next/head';
import styles from '../styles/Home.module.scss';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Groove Juice Swings</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<nav className={styles.nav}>
				<img className={styles['nav-logo']} src="/gjs_logo_web.svg" />
				<a className={styles['nav-item']}>News</a>
				<a className={styles['nav-item']}>Classes</a>
				<a className={styles['nav-item']}>Events</a>
				<a className={styles['nav-item']}>Staff</a>
			</nav>

			<main className={styles.main}>
				<section class={styles['banner']}>
					<h1 className={styles.title}>
						Spreading the job of Lindy Hop and <i>swing dancing</i> in Rochester.
					</h1>
				</section>

				<div className={styles.grid}>
					<a href="https://nextjs.org/docs" className={styles.card}>
						<h3>Documentation &rarr;</h3>
						<p>Find in-depth information about Next.js features and API.</p>
					</a>

					<a href="https://nextjs.org/learn" className={styles.card}>
						<h3>Learn &rarr;</h3>
						<p>Learn about Next.js in an interactive course with quizzes!</p>
					</a>

					<a href="https://github.com/vercel/next.js/tree/master/examples" className={styles.card}>
						<h3>Examples &rarr;</h3>
						<p>Discover and deploy boilerplate example Next.js projects.</p>
					</a>

					<a
						href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
						className={styles.card}
					>
						<h3>Deploy &rarr;</h3>
						<p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
					</a>
				</div>
			</main>

			<footer className={styles.footer} />
		</div>
	);
}