import React, {useState} from 'react'
import Affairs from './Affairs/Affairs'
import s from './hw2.module.css'
// types
export type AffairPriorityType = "high" | "middle" | "low"
export type AffairType = {
   _id: number
   name: string
   priority: string
}
export type FilterType = "all" | AffairPriorityType

// constants
const defaultAffairs: Array<AffairType> = [
   {_id: 1, name: 'React', priority: 'high'},
   {_id: 2, name: 'Anime', priority: 'low'},
   {_id: 3, name: 'Games', priority: 'low'},
   {_id: 4, name: 'Work', priority: 'high'},
   {_id: 5, name: 'HTML & CSS', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => {
   debugger
   if (filter === 'all') {
      return affairs
   } else {
      return affairs.filter(a => a.priority === filter)
   }
}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => affairs.filter(a => a._id !== _id)


function HW2() {
   const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs);
   debugger
   const [filter, setFilter] = useState<FilterType>('all');
   const filteredAffairs = filterAffairs(affairs, filter)
   const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))

   return (
      <div>
         <div className={s.hw2}>
            <hr/>
            <h3 className={s.title}>AFFAIRS</h3>
            <Affairs
               data={filteredAffairs}
               setFilter={setFilter}
               deleteAffairCallback={deleteAffairCallback}
            />
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
         </div>
      </div>

   )
}

export default HW2;
