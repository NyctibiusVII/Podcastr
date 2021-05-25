import { usePlayer } from '../contexts/PlayerContext'

import { GetStaticProps }              from 'next'
import { api }                         from '../services/api'
import { format, parseISO }            from 'date-fns'
import   ptBR                          from 'date-fns/locale/pt-BR'
import { convertDurationToTimeString } from '../utils/convertDurationToTimeString'

import Head   from 'next/head'
import Link   from 'next/link'
import Image  from 'next/image'
import styles from '../styles/pages/home.module.scss'

type Episodes = {
    id:               string,
    title:            string,
    members:          string,
    publishedAt:      string,
    thumbnail:        string,
    //description:      string,
    url:              string,
    type:             string,
    duration:         number,
    durationAsString: String
}
type HomeProps = {
    //episodes: Array<Episodes>
    //episodes: Episodes[]
    latestEpisodes: Episodes[]
    allEpisodes:    Episodes[]
}

export default function Home({ latestEpisodes, allEpisodes }: HomeProps) {
    const { playList } = usePlayer()

    const episodeList = [...latestEpisodes, ...allEpisodes]

    const imgSize = 20
    const playCardLoader = () => `/icons/play-card.svg`

    return (
        <div className={styles.container}>
            <Head>
                <title>Home | Podcastr</title>
            </Head>

            <section className={styles.latestEpisodes}>
                <h2>Últimos lançamentos</h2>

                <ul>
                    { latestEpisodes.map((episode, index) => {
                        return (
                            <li key={episode.id}>
                                <Image
                                    src={episode.thumbnail}
                                    objectFit='cover'
                                    alt={episode.title}
                                    width={192}
                                    height={192}
                                />

                                <div className={styles.episodeDetails}>
                                    <Link href={`/episodes/${episode.id}`}>
                                        <a>{episode.title}</a>
                                    </Link>
                                    <p>{episode.members}</p>
                                    <span>{episode.publishedAt}</span>
                                    <span>{episode.durationAsString}</span>
                                </div>

                                <button type="button" onClick={() => playList(episodeList, index)}>
                                    <Image
                                        loader={playCardLoader}
                                        src={`
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
                                                <path fill="#04D361" d="M6.66669 4.16669V15.8334L15.8334 10L6.66669 4.16669Z"/>
                                            </svg>
                                        `}
                                        alt="Reproduzir episódio"
                                        width={imgSize}
                                        height={imgSize}
                                    />
                                </button>
                            </li>
                        )
                    }) }
                </ul>
            </section>
            <section className={styles.allEpisodes}>
                <h2>Todos Episódios</h2>

                <table cellSpacing={0}>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Podcast</th>
                            <th>Integrantes</th>
                            <th>Data</th>
                            <th>Duração</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        { allEpisodes.map((episode, index) => {
                            return (
                                <tr key={episode.id}>
                                    <td style={{ width: 70 }}>
                                        <Image
                                            src={episode.thumbnail}
                                            objectFit='cover'
                                            alt={episode.title}
                                            width={120}
                                            height={120}
                                        />
                                    </td>
                                    <td>
                                        <Link href={`/episodes/${episode.id}`}>
                                            <a>{episode.title}</a>
                                        </Link>
                                    </td>
                                    <td>{episode.members}</td>
                                    <td style={{ width: 90 }}>{episode.publishedAt}</td>
                                    <td>{episode.durationAsString}</td>
                                    <td>
                                    <button type="button" onClick={() => playList(episodeList, (index + latestEpisodes.length))}>
                                            <Image
                                                loader={playCardLoader}
                                                src={`
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
                                                        <path fill="#04D361" d="M6.66669 4.16669V15.8334L15.8334 10L6.66669 4.16669Z"/>
                                                    </svg>
                                                `}
                                                alt="Reproduzir episódio"
                                                width={imgSize}
                                                height={imgSize}
                                            />
                                        </button>
                                    </td>
                                </tr>
                            )
                        }) }
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const { data } = await api.get('episodes', {
        params: {
            _limit: 12,
            _sort: 'published_at',
            _order: 'desc',
        }
    })

    type PureEpisodes = {
        id:           string,
        title:        string,
        members:      string,
        published_at: string,
        thumbnail:    string,
        description:  string,
        url:          string,
        type:         string,
        duration:     number
    }

    const episodes = data.map((episode: PureEpisodes) => {
        return {
            id:          episode.id,
            title:       episode.title,
            members:     episode.members,
            publishedAt: format(parseISO(episode.published_at), 'd MMM yy', { locale: ptBR }),
            thumbnail:   episode.thumbnail,
            //description: episode.description,
            url:         episode.url,
            type:        episode.type,
            duration:    Number(episode.duration),
            durationAsString: convertDurationToTimeString(Number(episode.duration)),
        }
    })

    const latestEpisodes = episodes.slice(0, 2)
    const allEpisodes = episodes.slice(2, episodes.lenght)

    return {
        props: {
            //episodes,
            latestEpisodes,
            allEpisodes
        },
        revalidate: 60 * 60 * 8, // - 8h
    }
}

/**
 *  get    = pegar     dados
 *  post   = salvar    dados
 *  put    = atualizar dados
 *  patch  = atualizar dados
 *  delete = deletar   dados
 */