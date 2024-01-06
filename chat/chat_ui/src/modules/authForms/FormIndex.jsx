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
        fetchfullName : '' , // fetchullName 
       }),
       email:'',
       password:'',
    })

    const Navigate = useNavigate();

    const handleSubmit = async (e)=>{
       console.log("data:>>>" , data);
       e.preventDefault();
        const res = await fetch(`http://localhost:5555/api/${IsSignInPage ? 'login' : 'register'}` ,{
          method: 'POST',
          headers:{
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })

        if(res.status === 400){
          alert('invalid credentials .......');
        }else{
          const resData = await res.json();
          console.log("data:>>>" , resData);
          if(resData.token){
            localStorage.setItem('user:token',resData.token);
            localStorage.setItem('user:details',JSON.stringify( resData.user));
            Navigate('/');
          }
          
                  }

    }

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
            <form action="" className='flex flex-col justify-center items-center w-full ' onSubmit={(e)=>handleSubmit(e)}>
              { !IsSignInPage && <Input label='FullName' type='text' name='name' placeholder='Enter Your Full name' value={data.fullName} onChange={ (e)=>setData({...data , fullName: e.target.value}) }/>}
              <Input label='Email' name='email' type='email' placeholder='Enter Your email' value={data.email} onChange={ (e)=>setData({...data, email: e.target.value})} />
              <Input label='Password' name='password' type='password' placeholder='Enter Your password' value={data.password} onChange={ (e)=>setData({...data, password: e.target.value})}  />
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
