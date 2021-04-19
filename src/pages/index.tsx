import Head    from 'next/head'
import styles  from '../styles/pages/home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Início | Podcastr</title>
            </Head>
            <h1>Hello word</h1>
        </div>
    )
}