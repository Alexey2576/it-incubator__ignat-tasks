import React from 'react'
import s from './AlternativeAffairsTitle.module.css';

type AlternativeAffairsTitle = {
   title: string
   setIsCollapsed: (isCollapsed: boolean) => void
   isCollapsed: boolean
}

function AlternativeAffairsTitle (props: AlternativeAffairsTitle) {
   return (
      <div onClick={() => { props.setIsCollapsed(!props.isCollapsed) }}>
         <h3 className={s.title}>{props.title}</h3>
      </div>
   );
}

export default AlternativeAffairsTitle;