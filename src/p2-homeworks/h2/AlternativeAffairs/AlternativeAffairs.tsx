import React, {useState} from 'react'
import {AffairType, FilterType} from "../HW2";
import s from "../Affairs/Affairs.module.css";
import AlternativeAffairsTitle from "./AlternativeAffairsTitle/AlternativeAffairsTitle";
import AlternativeAffairsBody from "./AlternativeAffairsBody/AlternativeAffairsBody";

type AlternativeAffairsPropsType = {
   title: string
   data: Array<AffairType>
   setFilter: (filter: FilterType) => void
   deleteAffairCallback: (id: number) => void
   changeCheckBoxCallback: (id: number) => void
   addNewCardCallback: (text: string) => void
}

function AlternativeAffairs(props: AlternativeAffairsPropsType) {
   const [isCollapsed, setIsCollapsed] = useState(false)
   return (
      <div className={s.affairs}>
         <AlternativeAffairsTitle title={props.title} setIsCollapsed={setIsCollapsed} isCollapsed={isCollapsed}/>
         {!isCollapsed && <AlternativeAffairsBody data={props.data}
                                                  deleteAffairCallback={props.deleteAffairCallback}
                                                  changeCheckBoxCallback={props.changeCheckBoxCallback}
                                                  setFilter={props.setFilter}
                                                  addNewCardCallback={props.addNewCardCallback}/>}
      </div>
   )
}

export default AlternativeAffairs;
