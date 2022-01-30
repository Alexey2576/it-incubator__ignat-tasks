import React, {useLayoutEffect, useState} from "react";
import './slider.css'
type Slider2Type = {
   startMin: number
   startMax: number
   thumbsize: number,
   setMinVal(val: number): void
   setMaxVal(val: number): void
   minVal: number
   maxVal: number
}

export const Slider: React.FC<Slider2Type> = (
   { startMin, startMax , thumbsize,
      minVal, maxVal,
      setMinVal, setMaxVal,
   }
   ) => {
   const [avg, setAvg] = useState((startMin + startMax) / 2);

   const width = 300;
   const minWidth = thumbsize + ((avg - startMin) / (startMax - startMin)) * (width - 2 * thumbsize);
   const minPercent = ((minVal - startMin) / (avg - startMin)) * 100;
   const maxPercent = ((maxVal - avg) / (startMax - avg)) * 100;
   const styles = {
      min: {
         width: minWidth,
         left: 0,
         "--minRangePercent": `${minPercent}%`
      },
      max: {
         width: thumbsize + ((startMax - avg) / (startMax - startMin)) * (width - 2 * thumbsize),
         left: minWidth,
         "--maxRangePercent": `${maxPercent}%`
      }
   };

   useLayoutEffect(() => {
      setAvg((maxVal + minVal) / 2);
   }, [minVal, maxVal]);

   return (
      <div
         className="min-max-slider"
         data-legendnum="2"
         data-rangemin={startMin}
         data-rangemax={startMax}
         data-thumbsize={thumbsize}
         data-rangewidth={width}
      >
         <input
            id="min"
            className="min"
            style={styles.min}
            name="min"
            type="range"
            step="1"
            min={startMin}
            max={avg}
            value={minVal}
            onChange={({ target }) => setMinVal(Math.round(Number(target.value)))}
         />
         <input
            id="max"
            className="max"
            style={styles.max}
            name="max"
            type="range"
            step="1"
            min={avg}
            max={startMax}
            value={maxVal}
            onChange={({ target }) => setMaxVal(Math.round(Number(target.value)))}
         />
      </div>
   );
};