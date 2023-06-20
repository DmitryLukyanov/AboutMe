import React from 'react';
import Style from './Home.module.scss';
import me from '../../img/self.jpg';
import classNames from 'classnames';
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import { Box } from "@mui/material";
import { info } from "../../info/Info";

export default function Home() {

    return (
        <div id="home">
            <Box
                component={'main'}
                display={'flex'}
                flexDirection={{ xs: 'column', md: 'row' }}
                alignItems={'center'}
                justifyContent={'center'}
                /* 101vh to allow home page be a bit bigger than the start page to trigger correct events in waypoint */
                minHeight={'calc(101vh)'}
            >
                <Box className={classNames(Style.avatar, Style.shadowed)} alt={'image of developer'} style={{ background: info.gradient }} component={'img'} src={me} width={{ xs: '35vh', md: '40vh' }}
                    height={{ xs: '35vh', md: '40vh' }}
                    borderRadius={'50%'}
                    p={'0.75rem'}
                    mb={{ xs: '1rem', sm: 0 }}
                    mr={{ xs: 0, md: '2rem' }} />
                <Box>
                    <h1>Hi, I'm <span style={{ background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{info.firstName}</span><span className={Style.hand}>🤚</span>
                    </h1>
                    <h2>Deal with all in .NET and more.</h2>
                    <Box
                        component={'ul'}
                        p={'0.8rem'}
                    >
                        {
                            info.miniBio.map(
                                (bio, index) =>
                                    (<EmojiBullet key={index} emoji={bio.emoji} text={bio.text} />)
                            )
                        }
                    </Box>
                    <Box
                        display={'flex'}
                        gap={'0.8rem'}
                        justifyContent={'flex-start'}
                        fontSize={{ xs: '2rem', md: '2.5rem' }}
                    >
                        {
                            info.socials.map(
                            (social, index) =>
                                (<SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />)
                            )
                        }
                    </Box>
                </Box>
            </Box>
        </div>
    )
}