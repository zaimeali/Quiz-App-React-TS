import React, { useState, useEffect } from 'react'

// Components
import Loading from '../components/Loading';

import './Home.css'

// Route
import { useLocation } from 'react-router-dom';

export default function Home() {

    const location = useLocation()

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
        setLoading(false)
        }, 3000);
        return () => clearTimeout(timer);
    }, [])

    return (
        <div 
            className="home-wrapper"
        >
            { loading && <Loading /> }
            {/* { !loading && location.search } */}
        </div>
    )
}
