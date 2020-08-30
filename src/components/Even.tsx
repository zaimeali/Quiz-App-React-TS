import React, { Fragment } from 'react'
import { Button } from '@material-ui/core'

type Props = {
    correct: string;
    incorrect: string[];
}

export default function Even({ correct, incorrect }: Props) {
    let options = [correct, ...incorrect]

    const checkAnswer = (e: React.MouseEvent) => {
        e.preventDefault();
        console.log((e.target as HTMLButtonElement).getAttribute('data-appMode'))
    }

    return (
        <Fragment>
            {/* <form onSubmit={ checkAnswer }> */}
                <ul className="options_list">
                    { options.map((option, i) => (
                        <li key={i}>
                            <Button 
                                type="submit" 
                                className='optionButtons' 
                                variant="contained"
                                name={ option }
                                data-appMode={ option }
                                onClick={ checkAnswer }
                            >
                                { option }
                            </Button>
                        </li>
                    )) }
                </ul>
            {/* </form> */}
        </Fragment>
    )
}
