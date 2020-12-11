import React from 'react'
import '../Styles/SongRow.css'

export default function Songrow({track="test"}) {
    
    console.log(track);
    function millisToMinutesAndSeconds(millis) {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }
      
    return (
        <div className="songRow">
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
