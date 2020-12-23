// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#introduction

export const authEndpoint = "https://accounts.spotify.com/authorize";

// Replace with APP ID, URI

const redirectURI = "http://localhost:3001/";

const clientId = "e96164a811d64ed29f4320414214c6ef";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
  ];

export const getTokenFromURL = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((intial, item) => {
            let parts = item.split('=');
            intial[parts[0]] = decodeURIComponent(parts[1]);

            return intial;
        }, {});
}


export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectURI}&scope=${scopes.join(
    "%20"
)}&response_type=token&show_dialog=true`;