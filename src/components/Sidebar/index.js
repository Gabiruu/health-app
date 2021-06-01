//import React, { useState, useEffect } from 'react'

import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink
                            to='sobre'
                            onClick={toggle}
                            smooth={true}
                            duration={500}
                            spy={true}
                            osffset={-120}
                            exact='true'
                        >Sobre
                        </SidebarLink>
                        <SidebarLink to='Beneficios'
                            onClick={toggle}
                            smooth={true}
                            duration={500}
                            spy={true}
                            osffset={-120}
                            exact='true'>
                            Beneficios
                        </SidebarLink>
                        <SidebarLink to='Download'
                            onClick={toggle}
                            smooth={true}
                            duration={500}
                            spy={true}
                            osffset={320}
                            exact='true'>
                            Download
                        </SidebarLink>
                        <SidebarLink to='Parcceiros'
                            onClick={toggle}
                            smooth={true}
                            duration={500}
                            spy={true}
                            osffset={-120}
                            exact='true'>
                            Parcceiros
                        </SidebarLink>
                    </SidebarMenu>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default Sidebar
