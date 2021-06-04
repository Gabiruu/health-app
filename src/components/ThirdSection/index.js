import React from 'react'
import img from '../../images/cel-003.png'
import { ThirdSectionContainer } from './ThirdSectionElements'
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
} from '../ThirdSection/ThirdSectionElements'

const ThirdSection = () => {
    return (
        (
            <>
                <ThirdSectionContainer id='beneficios'>
                    <InfoWrapper>
                        <InfoRow  >
                            <Column1>
                                <TextWrapper>
                                    <TopLine> Com você a todo momento</TopLine>
                                    <Heading> Disponível para todos os aparelhos</Heading>
                                    <SubTitle>A partir do plano básico você companha no celular, tablet, Smartwatch em tempo real suas análises de saúde</SubTitle>
                                </TextWrapper>
                            </Column1>
                            <Column2>
                                <ImgWrap>
                                    <Img src={img} />
                                </ImgWrap>
                            </Column2>
                        </InfoRow>
                    </InfoWrapper>
                </ThirdSectionContainer>
            </>
        )
    )
}

export default ThirdSection
