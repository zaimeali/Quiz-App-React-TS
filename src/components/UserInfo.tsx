import React, { useState, useEffect } from 'react'

// Framer Motion for Animation
import { motion } from 'framer-motion'

// Component
import UserData from './UserData'
import Loading from './Loading'

// CSS
import './UserInfo.css'


export default function UserInfo() {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
        setLoading(false)
        }, 3000);
        return () => clearTimeout(timer);
    }, [])

    return (
        <div 
            className="user-wrapper"
        >
            { loading && <Loading /> }
            { !loading && 
            <motion.div
                className="container"
                initial={{ rotate: 180, scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                type: "spring",
                stiffness: 260,
                damping: 60
                }}
            >
                <UserData />
            </motion.div> }
        </div>
    )
}
