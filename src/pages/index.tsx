import Head   from 'next/head'
import styles from '../styles/pages/home.module.scss'

export default function Home(props) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Início | Podcastr</title>
            </Head>
            <h1>Hello word</h1>
        </div>
    )
}

//export async function getStaticProps() {
//    const response = await fetch('http://localhost:3333/episodes')
//    const data = await response.json()
//
//    return {
//        props: {
//            episodes: data
//        },
//        revalidate: 60 * 60 * 8, // - 8h
//    }
//}