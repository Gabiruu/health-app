import React from 'react'
import video from '../../videos/video1.mp4'
import btn1 from '../../images/btn1.png'
import btn2 from '../../images/btn2.png'
import btn3 from '../../images/btn3.png'
import {
    FirstSectionContainer,
    FirstSectionBg,
    VideoBg,
    FirstSectionContent,
    FirstSectionH1,
    FirstSectionP,
    FirstBtnWrapper,
    StoreBtn,
    Img
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
                <FirstBtnWrapper>
                    <StoreBtn >
                        <a href="/">
                            <Img src={btn1} />
                        </a>
                        <a href="/">
                            <Img src={btn2} />
                        </a>
                        <a href="/">
                            <Img src={btn3} />
                        </a>
                    </StoreBtn>
                </FirstBtnWrapper>
            </FirstSectionContainer>
        </>
    )
}

export default FirstSection
