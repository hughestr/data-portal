import React, { useEffect } from "react";
import { useTour } from '@reactour/tour'
import { case_control_steps } from "./gwassteps";

const TourButton = ({stepInfo}) => {
    const { setIsOpen, setSteps, isOpen } = useTour()

    useEffect(() => {
        setSteps(case_control_steps[stepInfo.step])
    }, [stepInfo])

    return (<button onClick={() => {
        if (!isOpen) {
            setIsOpen(true)
        }
    }}>Open Tour</button>)
}

export default TourButton
