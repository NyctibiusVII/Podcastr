import Image  from 'next/image'
import styles from '../styles/components/Player.module.scss'

export function Player() {
    const imgSize = 32
    const playingLoader      = () => `./icons/playing.svg`
    const shuffleLoader      = () => `./icons/shuffle.svg`
    const playPreviousLoader = () => `./icons/play-previous.svg`
    const playLoader         = () => `./icons/play.svg`
    const playNextLoader     = () => `./icons/play-next.svg`
    const repeatLoader       = () => `./icons/repeat.svg`

    return(
        <div className={styles.container}>
            <header>
                <Image
                    loader={playingLoader}
                    src={`
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.7081 19.0347H19.6241C19.3268 19.0347 19.0548 19.2027 18.9228 19.468L17.9214 21.4707C17.7774 21.76 17.3641 21.76 17.2201 21.4707L14.7708 16.5707C14.6281 16.2867 14.2254 16.28 14.0748 16.56L12.9601 18.6227C12.8228 18.876 12.5574 19.0347 12.2694 19.0347H11.2921" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.55874 16H5.33474C3.62541 16 2.35741 17.5867 2.73341 19.2533L3.63608 23.2533C3.91074 24.4693 4.99074 25.3333 6.23741 25.3333H7.83208C8.26008 25.3333 8.57608 24.9373 8.48274 24.52L6.76008 16.892C5.42274 10.968 9.92674 5.33333 16.0001 5.33333V5.33333V5.33333C22.0734 5.33333 26.5774 10.968 25.2401 16.892L23.5187 24.52C23.4241 24.9373 23.7414 25.3333 24.1681 25.3333H25.7627C27.0094 25.3333 28.0894 24.4693 28.3641 23.2533L29.2667 19.2533C29.6427 17.5867 28.3747 16 26.6654 16H25.4414" stroke="#04D361" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    `}
                    alt="Tocando agora"
                    width={imgSize}
                    height={imgSize}
                />
                <strong>Tocando agora</strong>
            </header>

            <div className={styles.emptyPlayer}>
                <strong>Selecione um podcast para ouvir</strong>
            </div>

            <footer className={styles.empty}>
                <div className={styles.progress}>
                    <span>00:00</span>
                    <div className={styles.slider}>
                        <div className={styles.emptySlider} />
                    </div>
                    <span>00:00</span>
                </div>

                <div className={styles.playControls}>
                    <button type="button" className={styles.shuffle} title='Embaralhar'>
                        <Image
                            loader={shuffleLoader}
                            src={`
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 17.9793L5.384 17.9913C6.393 17.9963 7.336 17.4943 7.896 16.6553L14.105 7.34126C14.663 6.50326 15.605 6.00226 16.612 6.00526L21 6.02126" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M19 19.9792L21 17.9792L19 15.9792" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8.893 8.62522L7.904 7.25322C7.337 6.46722 6.425 6.00322 5.455 6.00822L3 6.02122" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M12.9692 15.3752L14.0952 16.8312C14.6652 17.5682 15.5462 17.9982 16.4782 17.9952L21.0002 17.9792" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M19 8.02124L21 6.02124L19 4.02124" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            `}
                            alt="Embaralhar"
                            width={imgSize}
                            height={imgSize}
                        />
                    </button>
                    <button type="button" className={styles.playPrevious} title='Reproduzir anterior'>
                        <Image
                            loader={playPreviousLoader}
                            src={`
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.4759 19.0623C18.1422 19.4724 19 18.993 19 18.2107L19 5.78981C19 5.00749 18.1422 4.52814 17.4759 4.93815L6 12.0002L17.4759 19.0623Z" fill="white"/>
                                    <rect x="7" y="20.0002" width="2" height="16" rx="1" transform="rotate(180 7 20.0002)" fill="white"/>
                                </svg>
                            `}
                            alt="Reproduzir anterior"
                            width={imgSize}
                            height={imgSize}
                        />
                    </button>
                    <button type="button" className={styles.play} title='Reproduzir atual'>
                        <Image
                            loader={playLoader}
                            src={`
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.2034 7.6447C11.5377 7.22106 10.6665 7.69927 10.6665 8.48836V23.5117C10.6665 24.3008 11.5377 24.779 12.2034 24.3553L24.0074 16.8437C24.6249 16.4507 24.6249 15.5493 24.0074 15.1564L12.2034 7.6447Z" fill="white"/>
                                </svg>
                            `}
                            alt="Reproduzir atual"
                            width={imgSize}
                            height={imgSize}
                        />
                    </button>
                    <button type="button" className={styles.playNext} title='Ir para a próxima'>
                        <Image
                            loader={playNextLoader}
                            src={`
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.5241 4.93815C5.85783 4.52814 5 5.00749 5 5.78981V18.2107C5 18.993 5.85783 19.4724 6.5241 19.0623L16.6161 12.8519C17.2506 12.4614 17.2506 11.5391 16.6161 11.1486L6.5241 4.93815Z" fill="white"/>
                                    <rect x="17" y="4.00024" width="2" height="16" rx="1" fill="white"/>
                                </svg>
                            `}
                            alt="Ir para a próxima"
                            width={imgSize}
                            height={imgSize}
                        />
                    </button>
                    <button type="button" className={styles.repeat} title='Repetir'>
                        <Image
                            loader={repeatLoader}
                            src={`
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 4.00024L16 6.00524L8.849 5.98424C5.632 5.98424 3 8.62324 3 11.8482V11.8482C3 13.4612 3.658 14.9272 4.718 15.9892" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M10 20.0002L8 17.9952L15.151 18.0162C18.368 18.0162 21 15.3772 21 12.1522V12.1522C21 10.5392 20.342 9.07323 19.282 8.01123" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            `}
                            alt="Repetir"
                            width={imgSize}
                            height={imgSize}
                        />
                    </button>
                </div>
            </footer>
        </div>
    )
}