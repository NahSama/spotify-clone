import React, { useEffect } from 'react';
import "../Styles/Footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import RepeatOneIcon from '@material-ui/icons/RepeatOne';
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";
import { useDataLayerValue } from './DataLayer';


export default function Footer({spotify}) {
    
    const [{token, item, playing, shuffle, repeat}, dispatch] = useDataLayerValue();
    
    useEffect(() => {
        spotify.getMyCurrentPlaybackState().then((r) => {
            // console.log("Context: My current track is " + item?.name);
            // console.log("Hook: My current track is " + r.item?.name);
            
            if(item?.name !== r.item?.name){
                dispatch({
                    type: "SET_ITEM",
                    item: r.item,
                });
            };
        })
      }, );

    const handlePlayPause = () => {
        if (playing) {
            spotify.pause();
            dispatch({
                type: "SET_PLAYING",
                playing: false
            });
        }else {
            spotify.play();
            dispatch({
                type:"SET_PLAYING",
                playing: true
            });
        };
    };

    // const skipNext = () => {
    //     spotify.skipToNext().then((res) => {
    //         console.log("Next track" + res);
    //     });
    //     spotify.getMyCurrentPlayingTrack().then((r) => {
    //         console.log("My current track is" + r.item.name)
    //       dispatch({
    //         type: "SET_ITEM",
    //         item: r.item,
    //       });
    //       dispatch({
    //         type: "SET_PLAYING",
    //         playing: true,
    //       });
    //     });
    //   };

    const skipNext = async() => {
        spotify.skipToNext();
        const r = await spotify.getMyCurrentPlayingTrack();
        dispatch({
            type: "SET_ITEM",
            item: r.item,
        });
        dispatch({
            type: "SET_PLAYING",
            playing: true,
        });
    }

    const skipPrevious = () => {
        spotify.skipToPrevious();
        spotify.getMyCurrentPlayingTrack().then((r) => {
            dispatch({
                type: "SET_ITEM",
                item: r.item
            });
            dispatch({
                type: "SET_PLAYING",
                playing: true
            });
        });
    };

    const changeVolume = (e, value) => {
        spotify.setVolume(value);
    }

    const toggleShuffle = () => {
        spotify.setShuffle(!shuffle);
        dispatch({
            type: "SET_SHUFFLE",
            shuffle: !shuffle
        });
    }

    const repeatStates = ["track", "context", "off"];
        
    const toggleRepeat = () => {
        const currentState = repeatStates.indexOf(repeat);
        const newState = (currentState + 1 ) % 3;
        spotify.setRepeat(repeatStates[newState]);
        dispatch({
            type: "SET_REPEAT",
            repeat: repeatStates[newState]
        })
    }

    return (
        <div className="footer">
            <div className="footer__left">
                <img 
                    className="footer__albumLogo"
                    src={item?.album.images[0].url}
                    alt={item?.name}
                />
                {item ? (
                <div className="footer__songInfo">
                    <h4>{item.name}</h4>
                    <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
                </div>
                ) : (
                <div className="footer__songInfo">
                    <h4>No song is playing</h4>
                    <p>...</p>
                </div>
                )}
            </div>

            <div className="footer__center">
                <ShuffleIcon className={shuffle ? "footer__green" : "footer__icon"} onClick={toggleShuffle}/>
                <SkipPreviousIcon className="footer__icon" onClick={skipPrevious}/>
                
                {playing? (
                    <PauseCircleOutlineIcon 
                        fontSize="large" 
                        className="footer__icon"
                        onClick={handlePlayPause}
                    />
                ) : (
                    <PlayCircleOutlineIcon 
                        fontSize="large" 
                        className="footer__icon"
                        onClick={handlePlayPause}
                    />
                )}
                
                <SkipNextIcon className="footer__icon" onClick={skipNext}/>
                {repeat === "track" && <RepeatOneIcon className="footer__green" onClick={toggleRepeat}/>}
                {repeat === "context" && <RepeatIcon className="footer__green" onClick={toggleRepeat}/>}
                {repeat === "off" && <RepeatIcon className="footer__icon" onClick={toggleRepeat}/>}
               
            </div>

            <div className="footer__right">
                <Grid container spacing={2}>
                <Grid >
                    <PlaylistPlayIcon />
                </Grid>
                <Grid >
                    <VolumeDownIcon />
                </Grid>
                <Grid xs>
                    <Slider 
                        aria-labelledby="continuous-slider" 
                        className="continuous-slider" 
                        defaultValue={40}
                        step={1}
                        min={0}
                        max={100}
                        onChange={changeVolume}
                        />
                </Grid>
                </Grid>
            </div>
        </div>

    )
}
