import React, { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {useNavigate} from 'react-router-dom';


const FormIndex = (
    {
      IsSignInPage = true,

    }
  ) => {
    const [data , setData] = useState({
      ...(!IsSignInPage && {
        FullName : '' ,
       }),
       Email:'',
       Password:'',
    })

    const Navigate = useNavigate();

  console.log("data:>>>" , data);
  return (
    <>
    <div className=" flex justify-center items-center">
      <div className="bg-white w-[600px] h-[650px] shadow-lg  rounded-lg  flex flex-col justify-center items-center shadow-lg  pt-4 pb-8 m-4">
          <div className='text-4xl font-extrabold mt-4'>
            {/* hello form */}
            Welcome {IsSignInPage && 'Back'}
          </div>
          <div className='text-xl mb-8'> { IsSignInPage ? 'SignIn to have Fun ' : ' Signup now to get started'} </div>
          <div className=' flex flex-col justify-center items-center w-full '>
            <form action="" className='flex flex-col justify-center items-center w-full ' onSubmit={()=>console.log("hello")}>
              { !IsSignInPage && <Input label='FullName' type='text' name='name' placeholder='Enter Your Full name' value={data.FullName} onChange={ (e)=>setData({...data , FullName: e.target.value}) }/>}
              <Input label='Email' name='email' type='email' placeholder='Enter Your email' value={data.Email} onChange={ (e)=>setData({...data, Email: e.target.value})} />
              <Input label='Password' name='password' type='password' placeholder='Enter Your password' value={data.Password} onChange={ (e)=>setData({...data, Password: e.target.value})}  />
              <Button label={IsSignInPage ? 'SignIn':'SignUp'} type='submit' className='' />

            </form>
              <div>{ IsSignInPage ? `Don't have Account`  : 'Already Have Account' }?? <span  className='cursor-pointer underline ' onClick={()=> Navigate(`/user/${IsSignInPage ? 'signup' : 'signin'}`)} >{ IsSignInPage ? 'SignUp' : 'SignIn'}</span></div>
          </div>
      </div>
      

    </div>
    </>
  )
}

export default FormIndex;
