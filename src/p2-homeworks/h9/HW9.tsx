import React from 'react'
import Clock from './Clock'
import AlternativeClock from "./AlternativeClock";
import './HW9.css'

function HW9() {
    return (
        <div className={"HW9"}>
           <h2>homeworks 9</h2>

            {/*should work (должно работать)*/}
            <Clock/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            <AlternativeClock/>
            <hr/>

        </div>
    )
}

export default HW9
