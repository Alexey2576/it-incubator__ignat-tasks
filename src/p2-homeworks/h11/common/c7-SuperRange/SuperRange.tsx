import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './SuperRange.module.css'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRangePropsType = DefaultInputPropsType & {
   onChangeRange?: (value: number) => void
};

const SuperRange: React.FC<SuperRangePropsType> = (
   {
      type,
      onChange, onChangeRange,
      className,

      ...restProps
   }
) => {
   const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
      onChange && onChange(e)
      const minValue = Math.round(+e.currentTarget.value)
      onChangeRange && onChangeRange(minValue)
   }

   const finalRangeClassName = `${s.range} ${className ? className : ''}`

   return (
      <div className={s.superRange}>
         <input
            type={'range'}
            onChange={onChangeCallback}
            className={finalRangeClassName}

            {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
         />
      </div>
   )
}

export default SuperRange
