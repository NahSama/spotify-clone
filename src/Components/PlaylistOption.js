import React from 'react'
import "../Styles/SidebarOption.css";
// import { useDataLayerValue } from './DataLayer';


export default function PlaylistOption({playlist, Icon, onClick}) {

  return (
    <div className="sidebarOption" onClick = {onClick}>
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4>{playlist.name}</h4> : <p>{playlist.name}</p>}
    </div>
  );
}
