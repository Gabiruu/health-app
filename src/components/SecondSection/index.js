import React from 'react'
import img from '../../images/about-img2.jpg'

import {
    SecondSectionContainer,
    SecondSectionHeader,
    SecondSectionColumn,
    SecondSectionDoubleColumn,
    SecondSectionRow,
    Img,
    AboutText,
    AboutTitle,
    HeaderTitle
} from './SecondSectionElements'

const SecondSection = () => {
    return (
        (
            <>
                <SecondSectionContainer id='sobre'>
                    <SecondSectionHeader>
                        <HeaderTitle>Sobre</HeaderTitle>
                    </SecondSectionHeader>

                    <SecondSectionRow>
                        <SecondSectionColumn><Img src={img} /></SecondSectionColumn>
                        <SecondSectionDoubleColumn>
                            <AboutTitle>O futuro da nossa saúde</AboutTitle>
                            <AboutText>As tecnologias e os algoritmos que as nutrem estão cada vez mais inteligentes e versáteis.
                            Nós da app health trabalhamos para que todo esse poder seja usado a favor do monitoramento da saúde de
                            nossos clientes acumulando dados significativos, assim auxiliando em melhores tomadas de decisões
                            médicas mais precisas
                            </AboutText>
                        </SecondSectionDoubleColumn>
                    </SecondSectionRow>

                </SecondSectionContainer>
            </>
        )
    )
}

export default SecondSection
