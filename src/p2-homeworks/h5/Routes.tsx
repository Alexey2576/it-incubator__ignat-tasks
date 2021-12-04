import React from 'react'
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import {Navigate, Route, Routes} from "react-router-dom";
import Junior from "./pages/Junior";
import JuniorPlus from "./pages/JuniorPlus";

export const PATH = {
   PRE_JUNIOR: '/pre-junior',
   JUNIOR: '/junior',
   JUNIOR_PLUS: '/junior-plus',
   // add paths
}

function Content() {
   return (
      <div>
         {/*Switch выбирает первый подходящий роут*/}
         <Routes>
            <Route path='/' element={<Navigate replace to={PATH.PRE_JUNIOR}/>}/>

            {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
            {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}

            <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
            <Route path={PATH.JUNIOR} element={<Junior/>}/>
            <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>

            {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
            <Route element={<Error404/>}/>

         </Routes>
      </div>
   )
}

export default Content
