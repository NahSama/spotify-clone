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
    
    const [{ current_playlist }, dispatch] = useDataLayerValue();

    // console.log("This is current playlist", current_playlist);

    const playPlaylist = (id) => {
        spotify
            .play({
                context_uri: `spotify:playlist:${current_playlist.id}`,
            })
            .then((res) => {
                spotify.getMyCurrentPlaybackState().then((r) => {
                    dispatch({
                        type: "SET_ITEM",
                        item: r.item
                    });
                    dispatch({
                        type: "SET_PLAYING",
                        playing: true
                    });
                });
            });
    }

    const playSong = (id) => {
        spotify
            .play({
                uris: [`spotify:track:${id}`],
            })
            .then((res) => {
                spotify.getMyCurrentPlaybackState().then((r) => {
                    dispatch({
                        type: "SET_ITEM",
                        item: r.item
                    });
                    dispatch({
                        type: "SET_PLAYING",
                        playing: true,
                    });
                });
            });
    }

    return (
        <div className="body">
            <Header spotify={spotify}/>
            <div className="body__info">
                <img src={current_playlist?.images[0].url} alt="dw"/>
                <div className="body__infoText">
                    <strong>Playlist</strong>
                    <h2>{current_playlist?.name}</h2>
                    <p>{current_playlist?.description}</p>
                </div>
            </div>
            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon
                        className="body__shuffle"
                        onClick = {playPlaylist}
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
                {current_playlist?.tracks.items?.map((item, index) => (
                    <SongRow key={index} track={item.track} playSong={playSong}/>
                ))}
            </div>
        </div>
    )
}
