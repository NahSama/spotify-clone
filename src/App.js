import React, { useEffect } from 'react';
import './App.css';
import Login from './Components/Login.js';
import { Player } from './Components/Player';
import { getTokenFromURL } from './spotify';
import SpotifyWebAPi from "spotify-web-api-js";
import { useDataLayerValue } from './Components/DataLayer';


const spotify = new SpotifyWebAPi();


function App() {
    const [{token}, dispatch] = useDataLayerValue();

    //Run code based on a given condition
    useEffect(() => {
        //code..
        const hash = getTokenFromURL();
        window.location.hash = "";
        const _token = hash.access_token;

        if (_token) {
            dispatch({
                type: "SET_TOKEN",
                token: _token,
            })

            //Use SpotifyWebApi to access
            spotify.setAccessToken(_token);

            spotify.getMe().then(user => {
                dispatch({
                    type: "SET_USER",
                    user: user,
                })
            });

            spotify.getUserPlaylists().then((playlists) => {
                dispatch({
                    type: "SET_PLAYLISTS",
                    playlists: playlists,
                })
            })

            spotify.getPlaylist("37i9dQZEVXcCRKcjUBRO1l").then((response) => {
                dispatch({
                    type: "SET_DISCOVER_WEEKLY",
                    discover_weekly: response
                })
            })
            
        }

        console.log('I have a token', token);
    }, [])

    return (
        // BEM
        <div className="app">
        {
            token ? (
                <Player />
            ) : (
                <Login />

            )
        }
        </div>
    );
}

export default App;
