import React from 'react'

const Button = (
    {
        label = 'button',
        type = 'button',
        className = '',
        disabled = false,
    }
) => {
  return (
    <>
      <div className='w-1/2 flex flex-col justify-center items-center'>
            <button type={type} className={`w-full m-4 bg-[#ffe9b0] text-black font-semibold py-2 px-4 rounded-lg border-2 hover:border-peach-400  ${className}`} disabled={disabled}>
                {label}
            </button>
      </div>
      
    </>
  )
}

export default Button
