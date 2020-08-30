import React, { useState } from 'react'

import './Body.css'

// Framer Motion
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";


const items = [0, 1, 2];

export default function Body() {
  return (
    <div className="body__wrapper">
        <AnimateSharedLayout>
            <motion.ul layout initial={{ borderRadius: 25 }}>
                { items.map(item => (
                    <Item key={item} />
                )) }
            </motion.ul>
        </AnimateSharedLayout>
    </div>
  )
}

function Item() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }
    return(
        <motion.li layout onClick={ toggleOpen } initial={{ borderRadius: 10 }}>
            <motion.div className="avatar" layout />
            <AnimatePresence>{ isOpen && <Content /> }</AnimatePresence>
        </motion.li>
    )
}

function Content() {
    return (
        <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="row" />
            <div className="row" />
            <div className="row" />
        </motion.div>
    )
}