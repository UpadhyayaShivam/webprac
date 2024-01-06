import React from 'react'

const Input = (
    {
        label = '',
        name = '',
        type = '',
        className = '',
        placeholder = '',
        isRequired = false,
        value = '',
        OnChange = ()=>{},
    }
) => {

  return (
    <div className='w-1/2'>
        <label htmlFor={name} className='block text-gray-700 text-m font-bold mb-2 mt-2 '>{label}</label>
        <input type={type}  id={name} className={`shadow border rounded w-full py-2 px-3 text-gray-700  hover:bg-[#ffe9b0] `} placeholder={placeholder} required={isRequired} value={value} onChange={OnChange}/>
    </div>
  )
}

export default Input;
