import React, { useEffect, useState, useRef } from 'react';
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

    const firstRef = useRef("home");
    const secondRef = useRef("home");
    const thirdRef = useRef("home");
    const [currentSection, setCurrentSection] = useState({ id: "home"});

    useEffect(() => {
        setCurrentSection(firstRef.current);

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;

        const sectionPositions = [
            firstRef.current,
            secondRef.current,
            thirdRef.current
        ];

        const currentSection = sectionPositions.find(
            (section) =>
                scrollPosition >= section.offsetTop - 1 &&
                scrollPosition < section.offsetTop + windowHeight
        );
        if (currentSection) {
            setCurrentSection(currentSection);
        }
    };

    useEffect(() => {
        if (currentSection) {
            console.log("Current section: ", currentSection.id);
        }
    }, [currentSection]);

    return (
        <Box className={darkMode ? Style.dark : Style.light}>
            <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'} className="scrollableContainer"
                justifyContent={'space-between'}>
                <Grid item>
                    <Navbar darkMode={darkMode} handleClick={handleToggleDarkMode} handleScroll={handleScroll} section={currentSection.id} />
                </Grid>
                <Grid id="home" item flexGrow={1} className={Style.firstContentRow} ref={firstRef}>
                    <Home />
                </Grid>
                <Grid id="about" item flexGrow={1} ref={secondRef} >
                    <Fade bottom triggerOnce={true} className={Style.secondContentRow}>
                        <About />
                    </Fade>
                </Grid>
                <Grid id="portfolio" item flexGrow={1} className={Style.firstContentRow} ref={thirdRef}>
                    <Fade bottom triggerOnce={true}>
                        <Portfolio />
                    </Fade>
                </Grid>
            </Grid>
        </Box>
    )
}

