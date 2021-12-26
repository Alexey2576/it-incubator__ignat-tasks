import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
   options?: string[]
   onChangeOption?: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
   {
      options,
      onChange, onChangeOption,
      ...restProps
   }
) => {
   const mappedOptions: JSX.Element[] | undefined = options? options.map((o,i) => {
      return <option key={i}>{o}</option>
   }) : [];

   const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
      onChange && onChange(e)
      onChangeOption && onChangeOption(e.currentTarget.value)
   }

   return (
      <select onChange={onChangeCallback} {...restProps}>
         {mappedOptions}
      </select>
   )
}

export default SuperSelect
