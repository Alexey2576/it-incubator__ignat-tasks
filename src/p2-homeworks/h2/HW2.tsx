import React, {useState} from 'react'
import s from './hw2.module.css'
import AlternativeAffairs from "./AlternativeAffairs/AlternativeAffairs";
import moment from "moment";

export type AffairPriorityType = "high" | "middle" | "low"
export type AffairType = {
   _id: number
   name: string
   priority: AffairPriorityType
   date: string
   valueCheck: boolean
}
export type FilterType = "all" | AffairPriorityType

const defaultAffairs: Array<AffairType> = [
   {_id: 1, name: 'React', priority: 'high', date: "16.11.2021", valueCheck: true},
   {_id: 2, name: 'Anime', priority: 'low', date: "17.11.2021", valueCheck: false},
   {_id: 3, name: 'Games', priority: 'low', date: "18.11.2021", valueCheck: true},
   {_id: 4, name: 'Work', priority: 'high', date: "19.11.2021", valueCheck: false},
   {_id: 5, name: 'HTML & CSS', priority: 'middle', date: "20.11.2021", valueCheck: false},
]

export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => filter === 'all' ? affairs : affairs.filter(a => a.priority === filter)
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => affairs.filter(a => a._id !== _id)
export const changeCheckBox = (affairs: Array<AffairType>, _id: number): Array<AffairType> => affairs.map(a => a._id === _id ? {...a, valueCheck: !a.valueCheck} : {...a})
export const addNewCard = (affairs: Array<AffairType>, text: string): Array<AffairType> => [...affairs,{_id: 7, name: text, priority: "low", date: moment().format("DD.MM.YYYY"), valueCheck: false}]
function HW2() {
   const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs);
   const [filter, setFilter] = useState<FilterType>('all');
   const filteredAffairs = filterAffairs(affairs, filter)
   const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))
   const changeCheckBoxCallback = (_id: number) => setAffairs(changeCheckBox(affairs, _id))
   const addNewCardCallback = (text: string) => setAffairs(addNewCard(affairs, text))
   return (
      <div>
         {/*<div className={s.hw2}>*/}
         {/*   <hr/>*/}
         {/*   <h3 className={s.title}>AFFAIRS</h3>*/}
         {/*   <Affairs*/}
         {/*      data={filteredAffairs}*/}
         {/*      setFilter={setFilter}*/}
         {/*      deleteAffairCallback={deleteAffairCallback}*/}
         {/*   />*/}
         {/*   <hr/>*/}
         {/*</div>*/}

         {/*Личное творчество */}
         <div className={s.hw2}>
            <AlternativeAffairs title={"ALTERNATIVE AFFAIRS"}
                                data={filteredAffairs}
                                setFilter={setFilter}
                                deleteAffairCallback={deleteAffairCallback}
                                changeCheckBoxCallback={changeCheckBoxCallback}
                                addNewCardCallback={addNewCardCallback}
            />
            <hr/>
         </div>
      </div>

   )
}

export default HW2;
