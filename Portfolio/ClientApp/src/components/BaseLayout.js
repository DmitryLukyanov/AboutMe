import React, { useEffect, useState } from 'react';
import Style from './BaseLayout.module.scss'
import Navbar from "./Navbar";
import Home from "./home/Home";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import { Box, Grid } from "@mui/material";
import Fade from "react-awesome-reveal";

export default function BaseLayout() {
    let [darkMode, setDarkMode] = useState(false);

    function handleToggleDarkMode() {
        let oppositeOfCurrentDarkMode = !darkMode
        console.log(oppositeOfCurrentDarkMode)
        localStorage.setItem('darkMode', `${oppositeOfCurrentDarkMode}`)
        setDarkMode(oppositeOfCurrentDarkMode)
    }

    useEffect(() => {
        let detectedDarkMode = eval(localStorage.getItem('darkMode'));

        if (detectedDarkMode) {
            setDarkMode(detectedDarkMode)
        } else {
            localStorage.setItem('darkMode', 'false')
        }
    }, [])

    return (
        <Box className={darkMode ? Style.dark : Style.light}>
            <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
                justifyContent={'space-between'}>
                <Grid item>
                    <Navbar darkMode={darkMode} handleClick={handleToggleDarkMode} />
                </Grid>
                <Grid item flexGrow={1} className={Style.firstContentRow}>
                    <Home />
                </Grid>
                <Grid item flexGrow={1} >
                    <Fade bottom triggerOnce={true} className={Style.secondContentRow}>
                        <About />
                    </Fade>
                </Grid>
                <Grid item flexGrow={1} className={Style.firstContentRow}>
                    <Fade bottom triggerOnce={true}>
                        <Portfolio />
                    </Fade>
                </Grid>
            </Grid>
        </Box>
    )
}

