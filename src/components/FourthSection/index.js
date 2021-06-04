import React from 'react'
import img from '../../images/cel-002.png'
import { FourthSectionContainer } from './FourthSectionElements'
import {
    InfoWrapper,
    InfoRow,
    Column1,
    TextWrapper,
    TopLine,
    Heading,
    SubTitle,
    Column2,
    ImgWrap,
    Img
} from '../FourthSection/FourthSectionElements'

const FourthSection = () => {
    return (
        (
            <>
                <FourthSectionContainer id='plano'>
                    <InfoWrapper>
                        <InfoRow  >
                            <Column1>
                                <TextWrapper>
                                    <TopLine> Monitore a súde de seus familiares</TopLine>
                                    <Heading> Você bem onde estiver</Heading>
                                    <SubTitle> O palno familia é o ideal para quem sempre está pensando no bem estar de seus Parentes queridos</SubTitle>
                                </TextWrapper>
                            </Column1>
                            <Column2>
                                <ImgWrap>
                                    <Img src={img} />
                                </ImgWrap>
                            </Column2>
                        </InfoRow>
                    </InfoWrapper>
                </FourthSectionContainer>
            </>
        )
    )
}

export default FourthSection
