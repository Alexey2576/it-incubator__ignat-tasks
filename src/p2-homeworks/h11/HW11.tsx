import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import {Slider} from "./common/Slider/Slider";
import './HW11.css'

function HW11() {

   const [sliderMin, setSliderMin] = useState(0);
   const [sliderMax, setSliderMax] = useState(0);
   const setSliderMinCallback = (value: number) => {
      sliderMin <= sliderMax && setSliderMin(value)
   }
   return (
      <div>
         <h2>homeworks 11</h2>

         {/*should work (должно работать)*/}
         <div className={"range"}>
            <span className={"span"}>{sliderMin}</span>
            <SuperRange value={sliderMin} onChangeRange={setSliderMinCallback}
            />
         </div>

         <div className={"doubleRange"}>
            <span className={"span"}>{sliderMin}</span>
            <Slider startMin={0}
                     startMax={100}
                     thumbsize={10}
                     minVal={sliderMin}
                     maxVal={sliderMax}
                     setMinVal={setSliderMin}
                     setMaxVal={setSliderMax}
            />
            <span className={"span"}>{sliderMax}</span>
         </div>

         <hr/>
         {/*для личного творчества, могу проверить*/}
         {/*<AlternativeSuperRange/>*/}
         {/*<AlternativeSuperDoubleRange/>*/}
         <hr/>
      </div>
   )
}

export default HW11
