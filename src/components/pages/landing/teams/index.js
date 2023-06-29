import React from 'react';
import CardGrid from './CardGrid';
import Card from './card';
import { CurrentExecInfo } from './memberInfo/teamInfo';
import { MemberCardInfo } from './memberInfo/MemberCardInfo.js';
import { FormerExecutiveCardInfo } from './memberInfo/FormerExecutiveCardInfo.js';

const currentExecCards = CurrentExecInfo.map((memberData) => {
    return (
        <Card
            card={{
                className: 'teamPageCardStyle1',
                image: memberData.image,
                name: memberData.name,
                position: memberData.position,
                discipline: memberData.discipline,
                link1: memberData.linkedin,
                link2: memberData.world,
            }}
        />
    );
});

const memberCards = MemberCardInfo.map((memberData) => {
    return (
        <Card
            card={{
                className: 'teamPageCardStyle1',
                image: memberData.image,
                name: memberData.name,
                position: memberData.position,
                discipline: memberData.discipline,
                link1: memberData.linkedin,
                link2: memberData.world,
            }}
        />
    );
});

const formerExecCards = FormerExecutiveCardInfo.map((memberData) => {
    return (
        <Card
            card={{
                className: 'teamPageCardStyle2',
                image: memberData.image,
                name: memberData.name,
                position: memberData.position,
                discipline: memberData.discipline,
                link1: memberData.linkedin,
                link2: memberData.world,
            }}
        />
    );
});

const index = () => {
    return (
        <div id="teams">
            <div className="ExecCardContainer">
                <div className="CurrentExecutiveTitleWrapper">
                    <div className="ExecTitleBorderContainer">
                        <p className="BlackHeader">Current Executives</p>
                    </div>
                </div>
                <div className="CardGridContainer">
                    <CardGrid cards={currentExecCards} />
                </div>
            </div>
            <div className="GeneralCardContainer">
                <div className="GeneralTitleWrapper">
                    <div className="GeneralMemberBorderContainer">
                        <p className="BlackHeader">Current Members</p>
                    </div>
                </div>
                <div className="CardGridContainer">
                    <CardGrid cards={memberCards} />
                </div>
            </div>
            <div className="FormerCardContainer">
                <div className="shapedividers_com-1463"></div>
                <div className="FormerTitleWrapper">
                    <div className="FormerExecBorderContainer">
                        <p className="WhiteHeader">Former Executives</p>
                    </div>
                </div>
                <div className="CardGridContainer">
                    <CardGrid cards={formerExecCards} />
                </div>
            </div>
        </div>
    );
};

export default index;
