import React from 'react'
import btn1 from '../../images/btn1.png'
import btn2 from '../../images/btn2.png'
import btn3 from '../../images/btn3.png'
import {
    LastSectionContainer,
    LastSectionContent,
    LastSectionH1,
    LastSectionP,
    LastBtnWrapper,
    StoreBtn,
    Img
} from '../LastSection/LastSectionElements'

const LastSection = () => {
    return (
        <>
            <LastSectionContainer id='download'>
                <LastSectionContent>
                    <LastSectionH1>Faça já seu donwload</LastSectionH1>
                    <LastSectionP>
                        Disponivel em todas as lojas
                    </LastSectionP>
                </LastSectionContent>
                <LastBtnWrapper>
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
                </LastBtnWrapper>
            </LastSectionContainer>
        </>
    )
}

export default LastSection
