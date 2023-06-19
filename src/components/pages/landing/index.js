import React from 'react';
import Header from './header-banner/index.js';
import ProjInfo from './proj-info';
import Missions from './missions';
import News from './news';
import Papers from './papers';
import Media from './media';
import Teams from './teams';

//assets
import videoBg from '../../../assets/banner_video.mp4';

const Landing = () => {
    const maxWidth = {
        width: '100%',
    };
    const marginTop64 = {
        marginTop: '64px',
    };
    return (
        <>
            <main className="antialiased w-full min-h-screen">
                <div id="video">
                    <div id="overlay" className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
                    <video src={videoBg} autoPlay loop muted className="w-full h-screen object-cover" />
                    <div id="videoContent" className="absolute w-full h-full top-0 flex flex-col justify-center items-center text-neutral-100">
                        <h1>Welcome</h1>
                        <p>Scroll Down</p>
                    </div>
                </div>
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
