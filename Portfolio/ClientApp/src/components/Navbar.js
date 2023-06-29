import React, { useState } from 'react';
import Style from './Navbar.module.scss';
import Toggler from "./home/Toggler";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import { info } from "../info/Info";

const links = [
    {
        name: 'Home',
        to: '#home',
        active: 'home'
    },
    {
        name: 'About Me',
        to: '#about',
        active: 'about'
    },
    {
        name: 'Portfolio',
        to: '#portfolio',
        active: 'portfolio'
    }
]

export default function Navbar({ darkMode, handleClick, handleScroll, section }) {
    return (
        <Box component={'nav'} width={'100%'}>
            <Box component={'ul'} display={'flex'} justifyContent={'center'} alignItems={'center'}
                gap={{ xs: '2rem', md: '8rem' }}
                textTransform={'lowercase'} fontSize={'2rem'}>
                {
                    links.map((link, index) => (
                        <Box
                            key={index}
                            component={'li'}
                            className={((link.active === section) && !link.type) && Style.active}
                            sx={{ borderImageSource: info.gradient }}>
                            <a
                                href={link.to}
                                className={Style.link}>
                                {!link.type && <p style={{ paddingTop: '1.5rem' }}>{link.name}</p>}
                                    {link.type && <h1>{link.name}</h1>}
                            </a>
                        </Box>
                    ))
                }
                {/*<li>*/}
                {/*    <Toggler darkMode={darkMode} handleClick={handleClick} />*/}
                {/*</li>*/}
            </Box>
        </Box>
    )
}