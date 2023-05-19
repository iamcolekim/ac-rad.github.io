import React from 'react';
import ProjInfo from './proj-info';
import Missions from './missions';
import News from './news';
import Papers from './papers';
import Media from './media';
import Teams from './teams';

const Landing = () => {
    return (
        <main>
            <h1>Landing</h1>
            <ProjInfo />
            <Missions />
            <News />
            <Papers />
            <Media />
            <Teams />
        </main>
    );
};

export default Landing;
