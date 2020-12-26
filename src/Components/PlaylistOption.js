import React from 'react'
import "../Styles/PlaylistOption.css";
import { useDataLayerValue } from './DataLayer';


export default function PlaylistOption({playlist, Icon, onClick, className}) {
    const [{current_playlist, dispatch}] = useDataLayerValue();
  return (
    <div className={current_playlist?.name === playlist.name ? "playlistOption playlistOption__currentOption" : "playlistOption"}  onClick = {onClick}>
      {Icon && <Icon className="playlistOption__icon" />}
      {Icon ? <h4>{playlist.name}</h4> : <p>{playlist.name}</p>}
    </div>
  );
}
