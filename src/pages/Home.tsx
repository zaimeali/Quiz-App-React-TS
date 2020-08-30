import React, { useState, useEffect } from 'react'

// Components
import Loading from '../components/Loading';
import Overlay from '../components/Overlay';
import Body from '../components/Body';

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

    const [loading, setLoading] = useState(true)
    const [overLoad, setOverLoad] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 500);
        return () => clearTimeout(timer);
    }, [])

    useEffect(() => {
        const overTimer =- setTimeout(() => {
            setOverLoad(false)
        }, 1000);
        return () => clearTimeout(overTimer);
    }, [])

    return (
        <div className="home-wrapper">
            { loading && <Loading /> }
            { !loading && 
            <AppBar position="absolute">
                <Toolbar className="main__menu">
                    <Typography variant="h5" className="app__name">
                        Quiz Trivia App
                    </Typography>
                    <Typography className="numQuestion" align="center">
                        0/10 Questions
                    </Typography>
                    <Typography className="numQuestion" align="center">
                        0/10 Score
                    </Typography>
                    <Typography variant="caption" className="app_username">
                        Welcome, { username.name }!
                    </Typography>
                </Toolbar>
            </AppBar> }
            { !overLoad && <Overlay /> }
            { !overLoad && <Body /> }

        </div>
    )
}
