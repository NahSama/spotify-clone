import React from 'react'
import { loginUrl } from '../spotify'
import '../Styles/Login.css'

export default function Login(props) {
    

    return (
        <div className="login">
            <h1>Login</h1>
            <img 
                src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" 
                alt="spotify logo"
            />
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
            {/* Spotify Logo */}
            {/* Login Button */}
        </div>
    )
}
