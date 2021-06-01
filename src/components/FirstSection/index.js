import React from 'react'
import video from '../../videos/video3.mp4'
import {
    FirstSectionContainer,
    FirstSectionBg,
    VideoBg,
    FirstSectionContent,
    FirstSectionH1,
    FirstSectionP
} from '../FirstSection/FirstSectionElements'

const FirstSection = () => {
    return (
        <>
            <FirstSectionContainer id='first'>
                <FirstSectionBg>
                    <VideoBg autoPlay loop muted src={video} type='video/mp4' />
                </FirstSectionBg>
                <FirstSectionContent>
                    <FirstSectionH1>O App monitor de Saúde</FirstSectionH1>
                    <FirstSectionP>
                        Mais que uma ferramenta, é uma inovação em saúde na palma da sua mão
                    </FirstSectionP>
                </FirstSectionContent>
            </FirstSectionContainer>
        </>
    )
}

export default FirstSection
