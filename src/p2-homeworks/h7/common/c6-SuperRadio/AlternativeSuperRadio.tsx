import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import "./AlternativeSuperRadio.css"

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type AlternativeSuperRadioType = DefaultRadioPropsType & {
   options?: string[]
   onChangeOptions?: (option: string) => void
}


export const AlternativeSuperRadio: React.FC<AlternativeSuperRadioType> = (
   {
      value, name,
      options,
      onChange,
      onChangeOptions,
      ...restProps
   }
) => {

   const onChangeOptionsHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange && onChange(e)
      onChangeOptions && onChangeOptions(e.currentTarget.value)
   }

   const mappedOptions = options ? options.map((o, i) => (
      <div className="alt_super_rad">
         <label className="rad-label" key={name + "-" + i}>
            <input type="radio"
                   className="rad-input"
                   name={name}
                   value={o}
                   onChange={onChangeOptionsHandler}
                   {...restProps}
            />
            <div className="rad-design"> </div>
            <div className="rad-text">{o}</div>
         </label>
      </div>
   )) : []

   return (
      <>
         {mappedOptions}
      </>
   )
}
