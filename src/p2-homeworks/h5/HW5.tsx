import React from 'react'
import Header from './Header/Header'
import Content from './Content/Content'
import {HashRouter} from "react-router-dom";

function HW5() {
   return (
      <div>
         {/*в gh-pages лучше работает HashRouter*/}
         {/**/}
         <HashRouter>

            <Header/>
            {/*заменил название компоненты Routes на Content в связи с использованием новой версии "react-router-dom v6",*/}
            {/*в котором испоользовал вместо Switch - Routes, а вместо Redirect - Navigate*/}
            <Content/>

         </HashRouter>
      </div>
   )
}

export default HW5
