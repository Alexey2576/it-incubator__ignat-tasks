import React, {useEffect, useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import moment from "moment";

function AlternativeClock() {
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

   const stringTime = moment(date).format('h:mm:ss')
   const stringDate = moment(date).format('dddd, Do MMMM YYYY' + ' \\y\\e\\a\\r')

   return (
      <div>
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

         <SuperButton onClick={start}>start</SuperButton>
         <SuperButton onClick={stop}>stop</SuperButton>

      </div>
   )
}

export default AlternativeClock
