import React from 'react'
import '../Styles/SongRow.css'
import { useDataLayerValue } from './DataLayer';

export default function Songrow({track="test", playSong}) {
    
    // console.log(track);
    function millisToMinutesAndSeconds(millis) {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    const [{ item }, dispatch] = useDataLayerValue();

    const songRow = (track.id === item?.id) ? " songRow-is-playing songRow": "songRow";
      
    return (
        <div className={songRow} onClick={() => playSong(track.id)}>
            <div className="songRow__info">
                <img className="songRow__avatar" src={track.album.images[0].url} alt=""/>
                <div className="songRow__name">
                    <h1>{track.name}</h1>
                    <p>
                        {track.artists.map((artist) => artist.name)}
                    </p>
                </div>
                
            </div>
            <div className="songRow__album">
                <p>
                    {track.album.name}
                </p>
            </div>
            <div className="songRow__time">
                <p>
                    {millisToMinutesAndSeconds(track.duration_ms)}
                </p>
            </div>
        </div>
    )
}
