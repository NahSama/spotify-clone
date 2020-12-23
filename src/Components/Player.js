import React from 'react';
import '../Styles/Player.css';
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer'


export function Player({spotify}) {
    return (
        <div className="player">
            <div className="player__body">
                <Sidebar spotify={spotify}/>
                <Body spotify={spotify} />
            </div>
            <Footer spotify={spotify} />
        </div>
    )
}
