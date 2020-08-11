import React, { useState } from 'react'

// CSS
import './UserData.css'

// SVG
import { ReactComponent as User } from '../assets/img/user.svg'

// Route
import { useHistory } from 'react-router-dom'

export default function UserData() {

    const [user, setUser] = useState('')
    const history = useHistory()

    const handleChange = (e: any) => {
        setUser(e.target.value)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        setUser(e.target.value)
        if(user) {
            history.push({
                pathname: `/home`,
            })
        }
    }

    return (
        <form 
            className="form-container"
            onSubmit={ handleSubmit }
        >
            <User className="userLogo" />
            <input 
                type="text"
                value={ user || "" }
                onChange={ handleChange }
                placeholder="Enter your name.."
            />
        </form>
    )
}
