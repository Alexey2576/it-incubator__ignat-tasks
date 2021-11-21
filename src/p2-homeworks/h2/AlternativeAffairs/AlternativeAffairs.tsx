import React, {useState} from 'react'
import {AffairType, filterAffairs, FilterType} from "../HW2";
import Affair from "../Affairs/Affair/Affair";
import s from "../Affairs/Affairs.module.css";
import AlternativeAffairsTitle from "./AlternativeAffairsTitle/AlternativeAffairsTitle";
import AlternativeAffairsBody from "./AlternativeAffairsBody/AlternativeAffairsBody";
import moment from "moment";

type AlternativeAffairsPropsType = {
   title: string
   data: Array<AffairType>
   setFilter: (filter: FilterType) => void
   deleteAffairCallback: (id: number) => void
   changeCheckBox: (id: number) => void
}

function AlternativeAffairs(props: AlternativeAffairsPropsType) {

   const [isCollapsed, setIsCollapsed] = useState(false)

   return (
      <div className={s.affairs}>
         {
            isCollapsed
               ? <div onClick={() => {
                  setIsCollapsed(!isCollapsed)
               }}>
                  <AlternativeAffairsTitle title={props.title}/>
               </div>
               : <div>
                  <div onClick={() => {
                     setIsCollapsed(!isCollapsed)
                  }}><AlternativeAffairsTitle title={props.title}/></div>
                  <AlternativeAffairsBody data={props.data}
                                          deleteAffairCallback={props.deleteAffairCallback}
                                          changeCheckBox={props.changeCheckBox}
                                          setFilter={props.setFilter}
                  />
               </div>
         }
      </div>
   )
}

export default AlternativeAffairs;
