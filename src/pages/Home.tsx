import React, { useState, useEffect } from 'react'

// Components
import Loading from '../components/Loading';

import './Home.css'

// Route
import { useLocation } from 'react-router-dom';

// Interface
import { IUser } from '../components/UserData'

// Material UI
import { AppBar, Toolbar, Typography } from '@material-ui/core'

export default function Home() {

    const location = useLocation<IUser>() 

    let username = Object.keys(location.state).length > 0 ? { name: location.state.name } : { name: 'guest' }
    console.log(username)

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 500);
        return () => clearTimeout(timer);
    }, [])

    return (
        <div 
            className="home-wrapper"
        >
            { loading && <Loading /> }
            {/* { !loading && location.search } */}
            {/* { username.name } */}
            { !loading && 
            <AppBar position="absolute">
                <Toolbar className="main__menu">
                    <Typography variant="h5" className="app__name">
                        Quiz Trivia App
                    </Typography>
                    <Typography variant="caption" className="app_username">
                        Welcome, { username.name }!
                    </Typography>
                </Toolbar>
            </AppBar> }
            
        </div>
    )
}
