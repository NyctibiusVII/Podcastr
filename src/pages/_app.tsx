import { Header } from '../components/Header'
import { Player } from '../components/Player'

import styles from '../styles/app.module.scss'
import '../styles/global.scss'

export default function MyApp({ Component, pageProps }) {
    return (
        <div className={styles.wrapper}>
            <main>
                <Header />
                <Component {...pageProps} />
            </main>
            <Player />
        </div>
    )
}