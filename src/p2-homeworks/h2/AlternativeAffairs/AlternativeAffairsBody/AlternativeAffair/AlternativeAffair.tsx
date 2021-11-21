import React from 'react'
import s from './AlternativeAffair.module.css'
import {AffairType} from "../../../HW2";

type AlternativeAffairType = {
   // key не нужно типизировать
   id: number
   affair: AffairType
   deleteAffairCallback: (id: number) => void
   changeCheckBox: (id: number) => void
}

function AlternativeAffair(props: AlternativeAffairType) {
   const style = {backgroundColor: "transparent"}
   if (!props.affair.valueCheck) {
      style.backgroundColor = "#aec0ff"
   } else
      style.backgroundColor = "rgba(197,209,255,0.59)"

   const deleteCallback = () => {
      props.deleteAffairCallback(props.affair._id)
   }
   const changeValueCheckBox = () => {
      props.changeCheckBox(props.affair._id)
   }


   return (
      <div className={s.affair_block} style={style}>
         <div className={s.affair_item}>
            <div>
               <input type="checkbox"
                      className={s.checkbox}
                      id={`affair${props.id}`}
                      name={`affair${props.id}`}
                      checked={props.affair.valueCheck}
                      onClick={changeValueCheckBox}/>
               <label htmlFor={`affair${props.id}`}
                      className={s.text}>{props.affair.name}</label>
            </div>
            <div>
               <button className={s.btn} onClick={deleteCallback}>X</button>
            </div>
         </div>
         <div className={s.affair_date}>
            <span className={s.date}>{props.affair.date}</span>
         </div>
      </div>

   )
}

export default AlternativeAffair;
