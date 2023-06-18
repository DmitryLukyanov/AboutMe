import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import { Box, Grid } from "@mui/material";
import { info } from "../../info/Info";

export default function Portfolio() {
    return (
        <div id="portfolio">
            <Box pt={'6rem'} >
                <Grid container display={'flex'} justifyContent={'center'}>
                    {info.portfolio.map((project, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <PortfolioBlock
                                image={project.image}
                                source={project.source}
                                title={project.title}
                                technologies={project.technologies} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    );
};