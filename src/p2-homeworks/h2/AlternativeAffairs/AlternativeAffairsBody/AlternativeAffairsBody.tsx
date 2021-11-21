import React from 'react'
import {AffairType, filterAffairs, FilterType} from "../../HW2";
import s from './AlternativeAffairsBody.module.css'
import AlternativeAffair from "./AlternativeAffair/AlternativeAffair";

type AlternativeAffairsBody = {
   data: Array<AffairType>
   setFilter: (filter: FilterType) => void
   deleteAffairCallback: (id: number) => void
   changeCheckBox: (id: number) => void
}

function AlternativeAffairsBody(props: AlternativeAffairsBody) {

   const setAll = () => {
      filterAffairs(props.data, "all");
      return props.setFilter("all");
   }
   const setHigh = () => {
      props.setFilter("high")
      return filterAffairs(props.data, "high")
   }
   const setMiddle = () => {
      props.setFilter("middle")
      return filterAffairs(props.data, "middle")
   }
   const setLow = () => {
      props.setFilter("low")
      return filterAffairs(props.data, "low")
   }

   return (
      <div className={s.affairs}>
         <div className={s.affairs_block}>
            {props.data.map(a => <AlternativeAffair
               id={a._id}
               key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
               affair={a}
               deleteAffairCallback={props.deleteAffairCallback}
               changeCheckBox={props.changeCheckBox}
            />)}
         </div>
         <div className={s.btn_block}>
            <button className={s.btn} onClick={setAll}>All</button>
            <button className={s.btn} onClick={setHigh}>High</button>
            <button className={s.btn} onClick={setMiddle}>Middle</button>
            <button className={s.btn} onClick={setLow}>Low</button>
         </div>
      </div>
   )
}

export default AlternativeAffairsBody;