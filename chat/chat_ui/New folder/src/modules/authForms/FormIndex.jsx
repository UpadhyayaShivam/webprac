import React, { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';


const FormIndex = (
    {
      IsSignInPage = false,

    }
  ) => {
    const [data , setData] = useState({
      ...(!IsSignInPage && {
        FullName : '' ,
       }),
       Email:'',
       Password:'',
    })

  console.log("data:>>>" , data);
  return (
    <>
      <div className="bg-white w-[600px] h-[650px] shadow-lg  rounded-lg  flex flex-col justify-center items-center shadow-lg  pt-4 pb-8 m-4">
          <div className='text-4xl font-extrabold mt-4'>
            {/* hello form */}
            Welcome {IsSignInPage && 'Back'}
          </div>
          <div className='text-xl mb-8'> { IsSignInPage ? 'SignIn to have Fun ' : ' Signup now to get started'} </div>
          <div className=' flex flex-col justify-center items-center w-full '>
              { !IsSignInPage && <Input label='FullName' name='name' placeholder='Enter Your Full name' value={data.FullName} onChange={ (e)=>setData({...data , FullName: e.target.value}) }/>}
              <Input label='Email' name='email' placeholder='Enter Your email' value={data.Email} onChange={ (e)=>setData({...data, Email: e.target.value})} />
              <Input label='Password' name='password' placeholder='Enter Your password' value={data.value} onChange={ (e)=>setData({...data, Password: e.target.value})}  />
              <Button label={IsSignInPage ? 'SignIn':'SignUp'} className='' />
              <div>{ IsSignInPage ? `Don't have Account`  : 'Already Have Account' }?? <span  className='cursor-pointer underline '>{ IsSignInPage ? 'SignUp' : 'SignIn'}</span></div>
          </div>
      </div>
      
    </>
  )
}

export default FormIndex;
