import React, { useState, useEffect } from 'react'
import { IconContext } from 'react-icons/lib'
import { FaBars } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks
} from './NavbarElements';

const Navbar = ({ toggle }) => {
    const [scrollNav, setscrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setscrollNav(true)
        } else {
            setscrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to='/' onClick={toggleHome}>Health App</NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks
                                    /*
                                    to='sobre'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    osffset={-80}
                                    */
                                    onClick={toggleHome}
                                >Sobre</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    to='beneficios'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    osffset={-80}
                                >Beneficios</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    to='services'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    osffset={-80}
                                >Download</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    to='signup'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    osffset={-80}
                                >Parceiros</NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
