import React from 'react'

// Framer Motion for Animation
import { motion } from 'framer-motion'

// CSS
import './Loading.css'

export default function Loading() {

    const loadingContainerVariants = {
        start: {
            transition: {
                staggerChildren: 0.1,
            },
        },
        end: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    const loadingCircleVariants = {
        start: {
            y: '0%',
        },
        end: {
            y: '100%'
        },
    }

    const loadingCircleTransition = {
        duration: 0.6,
        yoyo: Infinity,
        ease: 'easeInOut',
    }

    return (
        <motion.div 
            className="loading"
            variants={ loadingContainerVariants }
            initial="start"
            animate="end"
        >
            <motion.span 
                className="loadingCircle" 
                variants={ loadingCircleVariants }
                transition={ loadingCircleTransition } 
            />
            <motion.span 
                className="loadingCircle" 
                variants={ loadingCircleVariants }
                transition={ loadingCircleTransition } 
            />
            <motion.span 
                className="loadingCircle" 
                variants={ loadingCircleVariants }
                transition={ loadingCircleTransition } 
            />
        </motion.div>
    )
}
