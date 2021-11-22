import React from 'react'
import Affair from './Affair/Affair'
import {AffairType, filterAffairs, FilterType} from '../HW2'
import s from './Affairs.module.css'

type AffairsPropsType = {
   data: Array<AffairType>
   setFilter: (filter: FilterType) => void
   deleteAffairCallback: (id: number) => void
}

function Affairs(props: AffairsPropsType) {
   const mappedAffairs = props.data.map((a: AffairType) => (
      <Affair
         key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
         affair={a}
         deleteAffairCallback={props.deleteAffairCallback}
      />
   ))

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
            {mappedAffairs}
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

export default Affairs;
