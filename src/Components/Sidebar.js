import React from 'react'
import '../Styles/Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from './DataLayer';
import PlaylistOption from './PlaylistOption';

export default function Sidebar({spotify}) {
    
    const [{ playlists }, dispatch] = useDataLayerValue();

    return (
        <div className="sidebar">
            <img
                className="sidebar__logo"
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt=""
            />
            <SidebarOption Icon={HomeIcon} option="Home"/>
            <SidebarOption Icon={SearchIcon} option="Search"/>
            <SidebarOption Icon={LibraryMusicIcon} option="Library"/>
            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />
            {playlists?.items?.map((playlist, index) => (
                <PlaylistOption 
                    key={index} 
                    playlist={playlist} 
                    onClick={() => {
                        spotify.getPlaylist(playlist.id).then((response) => {
                        dispatch({
                            type: "SET_CURRENT_PLAYLIST",
                            current_playlist: response
                            })
                    })}}/>
            ))}
        </div>
    )
}
