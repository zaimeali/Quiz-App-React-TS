import React, { useState, useEffect } from 'react'

import './Body.css'

// Material UI
import { Accordion, AccordionSummary, Typography, AccordionDetails, Divider } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

// Components
import Even from './Even'
import Odd from './Odd'

export default function Body() {    

    const [items, setItems] = useState<any[]>([])

    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=10&category=18&type=multiple')
            .then(res => res.json())
            .then(data => {
                setItems(data.results)
                console.log(data.results)
            })
    }, [])

    return (
        <div className="body__wrapper">
            { items && items.map((item, i) => (
                <Accordion key={ i }>
                    <AccordionSummary
                        expandIcon={ <ExpandMoreIcon /> }
                        aria-controls={`panel${i}a-content`}
                        id={`panel${i}a-header`}
                        className="accordionSummary"
                    >
                        <Typography className="accordionQuestion" align="left">
                            <Typography variant="caption">Q{ i + 1 })</Typography> { item.question }
                        </Typography>
                    </AccordionSummary>
                    <Divider />
                    <AccordionDetails>
                        { i % 2 === 0 ? 
                            <Even correct={ item.correct_answer } incorrect={ item.incorrect_answers } /> 
                                : <Odd correct={ item.correct_answer } incorrect={ item.incorrect_answers } /> 
                        }
                    </AccordionDetails>
                </Accordion>
            )) }
        </div>
    )
}