import React from 'react'
import '../Styles/Body.css';
import Header from './Header';
import SongRow from './SongRow';
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { useDataLayerValue } from './DataLayer';
import { Favorite } from '@material-ui/icons';


export default function Body({spotify}) {
    
    const [{ discover_weekly }, dispatch] = useDataLayerValue();

    return (
        <div className="body">
            <Header spotify={spotify}/>
            <div className="body__info">
                <img src={discover_weekly?.images[0].url} alt="dw"/>
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>
            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon
                        className="body__shuffle"
                    />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>
                <div className="body__header">
                    <div>
                        <p>Title</p>
                    </div>
                    <div>
                        <p>Album</p>
                    </div>
                    <div>
                        <p>Time</p>
                    </div>
                </div>
                {/* List of Songs */}
                {discover_weekly?.tracks.items.map((item) => (
                    <SongRow track={item.track}/>
                ))}
            </div>
        </div>
    )
}