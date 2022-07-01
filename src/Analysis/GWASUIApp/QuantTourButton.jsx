import React, { useEffect } from "react";
import { useTour } from '@reactour/tour'
import { quantitative_steps } from "./gwassteps";

const QuantTourButton = ({stepInfo}) => {
    const { setIsOpen, setSteps, isOpen } = useTour()


    useEffect(() => {
        console.log(stepInfo.step)
        setSteps(quantitative_steps[stepInfo.step])
    }, [stepInfo])

    return (<button onClick={() => {
        if (!isOpen) {
            setIsOpen(true)
        }
    }}>Open Tour</button>)
}

export default QuantTourButton
