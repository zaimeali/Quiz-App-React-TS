import React, { Fragment } from 'react'
import { Button } from '@material-ui/core'

type Props = {
    incorrect: string[];
    correct: string;
} 

export default function Odd({ incorrect, correct }: Props) {
    let options = [...incorrect, correct]

    return (
        <Fragment>
            <ul className="options_list">
                { options.map((option, i) => (
                    <li key={i}>
                        <Button className="optionButtons" variant="contained" color="primary">{ option }</Button>
                    </li>
                )) }
            </ul>
        </Fragment>
    )
}
