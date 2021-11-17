import React from 'react'
import {AffairType} from "../../HW2";
import s from './Affair.module.css'

type AffairPropsType = {
   // key не нужно типизировать
   affair: AffairType
   deleteAffairCallback: (id: number) => void
}

function Affair(props: AffairPropsType) {
   const deleteCallback = () => {
      props.deleteAffairCallback(props.affair._id)
   }

   return (
      <div className={s.affair}>
         <span className={s.text}>{props.affair.name}</span>
         <button className={s.btn} onClick={deleteCallback}>X</button>
      </div>
   )
}

export default Affair
