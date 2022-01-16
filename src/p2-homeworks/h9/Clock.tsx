import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import './HW9.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
       clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => setShow(true)
    const onMouseLeave = () => setShow(false)

    const stringTime = `${date.getHours()}.${date.getMinutes()}.${date.getSeconds()}`
    const stringDate = `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`

    return (
        <div className={"clock"}>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div>
                    {stringDate}
                </div>
            )}
            <div>
               <SuperButton onClick={start}>start</SuperButton>
               <SuperButton onClick={stop}>stop</SuperButton>
            </div>


        </div>
    )
}

export default Clock
