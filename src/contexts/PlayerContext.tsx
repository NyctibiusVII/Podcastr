import {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode
} from 'react'

type Episode = {
    title:     string
    members:   string
    thumbnail: string
    duration:  number
    url:       string
}
type PlayerContextData = {
    episodeList:         Episode[]
    currentEpisodeIndex: number
    isPlaying:           boolean
    play:                (episode: Episode) => void
    togglePlay:          () => void
    setIsPlayingState:   (state: boolean)   => void
}
interface PlayerProviderProps {
    children: ReactNode
}

export const PlayerContext = createContext({} as PlayerContextData)

export function PlayerProvider({ children }: PlayerProviderProps) {
    const [ episodeList,         setEpisodeList]          = useState([])
    const [ currentEpisodeIndex, setCurrentEpisodeIndex ] = useState(0)
    const [ isPlaying,           setIsPlaying ]           = useState(false)

   // /*-*
   //  *-   console.info(`
   //  *-       Lista de ep. : ${episodeList}
   //  *-       Ep. atual    : ${currentEpisodeIndex}
   //  *-       Tocando?     : ${isPlaying}
   //  *-   `) // - Look info
   //  *-/

    function play(episode) {
        setEpisodeList([episode])
        setCurrentEpisodeIndex(0)
        setIsPlaying(true)
    }

    function togglePlay() { setIsPlaying(!isPlaying) }

    function setIsPlayingState(state: boolean) { setIsPlaying(state) }

    return (
        <PlayerContext.Provider
            value={{
                episodeList,
                currentEpisodeIndex,
                isPlaying,
                play,
                togglePlay,
                setIsPlayingState
            }}
        >
            { children }
        </PlayerContext.Provider>
    )
}