import React from 'react'
import s from './AlternativeAffairsTitle.module.css';

type AlternativeAffairsTitle = {
   title: string
}

function AlternativeAffairsTitle (props: AlternativeAffairsTitle) {
   return (
      <div>
         <h3 className={s.title}>{props.title}</h3>
      </div>
   );
}

export default AlternativeAffairsTitle;