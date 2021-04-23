import {
    createContext,
    useContext,
    useState,
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
    isShuffling:         boolean
    hasPrevious:         boolean
    isPlaying:           boolean
    hasNext:             boolean
    isLooping:           boolean
    toggleShuffle:       () => void
    playPrevious:        () => void
    play:                (episode: Episode) => void
    playList:            (episode: Episode[], index: number) => void
    togglePlay:          () => void
    setIsPlayingState:   (state: boolean)   => void
    clearPlayingState:   () => void
    playNext:            () => void
    toggleLoop:          () => void
}
type PlayerProviderProps = {
    children: ReactNode
}

export const PlayerContext = createContext({} as PlayerContextData)

export function PlayerProvider({ children }: PlayerProviderProps) {
    const [ episodeList,         setEpisodeList]          = useState([])
    const [ currentEpisodeIndex, setCurrentEpisodeIndex ] = useState(0)
    const [ isShuffling,         setIsShuffling ]         = useState(false)
    const [ isPlaying,           setIsPlaying ]           = useState(false)
    const [ isLooping,           setIsLooping ]           = useState(false)

    /**
     *   console.info(`
     *       Lista de ep. : ${episodeList}
     *       Ep. atual    : ${currentEpisodeIndex}
     *       Shuffe?      : ${isShuffling}
     *       Tocando?     : ${isPlaying}
     *       Looping?     : ${isLooping}
     *   `) // - Look info
     */

    /* Shuffle */
    function toggleShuffle() { setIsShuffling(!isShuffling) }


    /* Previous */
    const hasPrevious = currentEpisodeIndex > 0
    function playPrevious() { hasPrevious && setCurrentEpisodeIndex(currentEpisodeIndex - 1) }


    /* Play */
    function play(episode: Episode) {
        setEpisodeList([episode])
        setCurrentEpisodeIndex(0)
        setIsPlaying(true)
    }
    function playList(list: Episode[], index: number) {
        setEpisodeList(list)
        setCurrentEpisodeIndex(index)
        setIsPlaying(true)
    }
    function togglePlay() { setIsPlaying(!isPlaying) }
    function setIsPlayingState(state: boolean) { setIsPlaying(state) }
    function clearPlayingState() { setEpisodeList([]), setCurrentEpisodeIndex(0) }


    /* Next */
    const hasNext = isShuffling || (currentEpisodeIndex + 1) < episodeList.length
    function playNext() {
        if (isShuffling) {
            const nextRandomEpisodeIndex = Math.floor(Math.random() * episodeList.length)

            setCurrentEpisodeIndex(nextRandomEpisodeIndex)
        } else if(hasNext) { setCurrentEpisodeIndex(currentEpisodeIndex + 1) }
    }


    /* Looping */
    function toggleLoop() { setIsLooping(!isLooping) }

    return (
        <PlayerContext.Provider
            value={{
                episodeList,
                currentEpisodeIndex,
                isShuffling,
                hasPrevious,
                isPlaying,
                hasNext,
                isLooping,
                toggleShuffle,
                playPrevious,
                play,
                playList,
                togglePlay,
                setIsPlayingState,
                clearPlayingState,
                playNext,
                toggleLoop
            }}
        >
            { children }
        </PlayerContext.Provider>
    )
}

export const usePlayer = () => useContext(PlayerContext)