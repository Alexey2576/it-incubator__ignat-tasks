import React, {useEffect, useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import moment from "moment";
import './HW9.css'

function AlternativeClock() {
   const [timerId, setTimerId] = useState(0)
   const [flag, setFlag] = useState(false)
   const [date, setDate] = useState(new Date())
   const [show, setShow] = useState(false)

   const stop = () => clearInterval(timerId)
   const start = () => {
      stop()
      setFlag(!flag)
   }

   useEffect(() => {
      const id: number = window.setInterval(() => {
         setDate(new Date())
      }, 1000)
      setTimerId(id)
   }, [flag])

   const onMouseEnter = () => setShow(true)
   const onMouseLeave = () => setShow(false)

   const stringTime = moment(date).format('h:mm:ss')
   const stringDate = moment(date).format('DD.MM.YYYY')

   const showDateClass = show ? `vemekunys` : ''
   const showTimeClass = !show ? 'vemekunys' : ''
   return (
      <div className={"AlternativeClock"}>

         <div className="bookacket">
            <div className="uncomenkad">

               {show
                  ? <div className={showDateClass}
                        onMouseLeave={onMouseLeave} >{stringDate}</div>
                  : <div onMouseEnter={onMouseEnter}
                        className={showTimeClass}>{stringTime}</div>
               }
            </div>

         </div>
         <div>
            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>
         </div>
      </div>
   )
}

export default AlternativeClock
