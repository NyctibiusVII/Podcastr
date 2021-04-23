import { usePlayer } from '../../contexts/PlayerContext'

import { GetStaticPaths, GetStaticProps } from 'next'
import { api }                            from '../../services/api'
import { format, parseISO }               from 'date-fns'
import ptBR                               from 'date-fns/locale/pt-BR'
import { convertDurationToTimeString }    from '../../utils/convertDurationToTimeString'

import Head   from 'next/head'
import Link   from 'next/link'
import Image  from 'next/image'
import styles from '../../styles/pages/episode.module.scss'

type Episodes = {
    id:               string,
    title:            string,
    members:          string,
    publishedAt:      string,
    thumbnail:        string,
    description:      string,
    url:              string,
    type:             string,
    duration:         number,
    durationAsString: String
}
type EpisodesProps = {
    episode: Episodes
}

export default function Episodes({ episode }: EpisodesProps) {
    const { play } = usePlayer()

    const imgSize = 24
    const arrowBackLoader = () => `/icons/arrow-back.svg`
    const playLoader      = () => `/icons/play.svg`

    return (
        <div className={styles.container}>
            <Head>
                <title>{episode.title} | Podcastr</title>
            </Head>
            <div className={styles.thumbnailContainer}>
                <Link href={'/'}>
                    <button type="button" title='Voltar'>
                        <Image
                            loader={arrowBackLoader}
                            src={`
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40">
                                    <path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M23.3333 13.3333L16.6666 20L23.3333 26.6667"/>
                                </svg>
                            `}
                            alt='Voltar'
                            width={(imgSize - 4) * 2}
                            height={(imgSize - 4) * 2}
                        />
                    </button>
                </Link>
                <Image
                    src={episode.thumbnail}
                    objectFit='cover'
                    alt='Thumbnail'
                    width={700}
                    height={160}
                />
                <button type="button" title='Reproduzir podcast' onClick={() => play(episode)}>
                    <Image
                        loader={playLoader}
                        src={`
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32">
                                <path fill="#fff" d="M12.2034 7.6447C11.5377 7.22106 10.6665 7.69927 10.6665 8.48836V23.5117C10.6665 24.3008 11.5377 24.779 12.2034 24.3553L24.0074 16.8437C24.6249 16.4507 24.6249 15.5493 24.0074 15.1564L12.2034 7.6447Z"/>
                            </svg>
                        `}
                        alt='Reproduzir episódio'
                        width={imgSize}
                        height={imgSize}
                    />
                </button>
            </div>

            <header>
                <h1>{episode.title}</h1>
                <span>{episode.members}</span>
                <span>{episode.publishedAt}</span>
                <span>{episode.durationAsString}</span>
            </header>

            <div
                className={styles.description}
                dangerouslySetInnerHTML={{ __html: episode.description }}
            />
        </div>
    )
}
export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const { data } = await api.get('episodes', {
        params: {
            _limit: 2,
            _sort: 'published_at',
            _order: 'desc',
        }
    })

    const paths = data.map((episode: { id: string }) => {
        return {
            params: {
                id: episode.id
            }
        }
    })

    return {
        paths,
        fallback: 'blocking'
    }
}
export const getStaticProps: GetStaticProps = async (ctx) => {
    const { id } = ctx.params
    const { data } = await api.get(`/episodes/${id}`)

    const episode = {
        id: data.id,
        title: data.title,
        members: data.members,
        publishedAt: format(parseISO(data.published_at), 'd MMM yy', { locale: ptBR }),
        thumbnail: data.thumbnail,
        description: data.description,
        url: data.file.url,
        type: data.file.type,
        duration: data.file.duration,
        durationAsString: convertDurationToTimeString(Number(data.file.duration)),
    }

    return {
        props: {
            episode
        },
        revalidate: 60 * 60 * 24 // - 24h
    }
}