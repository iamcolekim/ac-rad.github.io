import React from 'react';

//assets + dependencies
import { Link } from 'react-scroll';
import { useState, useRef, useEffect } from 'react';
import videoBg from '../../../assets/banner_video.mp4';

//components
import Header from './header-banner/index.js';
import ProjInfo from './proj-info';
import Missions from './missions';
import News from './news/news';
import Papers from './papers';
import Media from './media';
import Teams from './teams/index.js';

const Landing = () => {
    //for handling the click states for the display of the menu
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    //for the handling of the max height
    const headerRef = useRef(null);
    const videoContentRef = useRef(null);
    const [navMaxHeight, setNavMaxHeight] = useState(0);
    const [videoMaxHeight, setVideoMaxHeight] = useState(0);
    useEffect(() => {
        const headerHeight = headerRef.current.clientHeight;
        const videoContentHeight = videoContentRef.current.clientHeight;

        const calculatedNavMaxHeight = Math.min(10, headerHeight);
        const calculatedVideoMaxHeight = Math.min(10, videoContentHeight);

        setNavMaxHeight(calculatedNavMaxHeight);
        setVideoMaxHeight(calculatedVideoMaxHeight);
    }, []);

    return (
        <>
            <main id="home" className="antialiased w-full min-h-screen">
                <Header navMaxHeight={navMaxHeight} headerRef={headerRef} />

                <div id="video" className="relative -z-50 flex flex-col items-center justify-center">
                    <video src={videoBg} autoPlay loop muted className="w-full h-full object-cover" />
                    <div id="overlay" className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
                    <div ref={videoContentRef} id="videoContent" className="absolute w-full h-full flex flex-col justify-center items-center text-neutral-100">
                        <h1>Welcome</h1>
                        <p>Scroll Down</p>
                    </div>
                </div>
                <Link to="home" spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}>
                    Test
                </Link>
                <ProjInfo />
                <Missions />
                <News />
                <Papers />
                <Media />
                <Teams />
            </main>
        </>
    );
};

export default Landing;
