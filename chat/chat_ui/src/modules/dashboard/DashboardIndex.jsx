import React, { useEffect, useState } from 'react';
import Avatar1 from '../../Assests/Avatar3.svg';
import {glass_effect} from "../../css/indexDashboard.css";

const DashboardIndex = () => {

    const SendIcon = () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-[#fff]"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M3.707 3.293a1 1 0 011.414 0L11 9.586V7a1 1 0 112 0v4a1 1 0 01-1 1h-4a1 1 0 010-2h2.586l-6.293-6.293a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M13 13a1 1 0 011-1h3.586l-4.293 4.293a1 1 0 01-1.414-1.414L16.172 12H13z"
          clipRule="evenodd"
        />
      </svg>
    );
    
    const PlusIcon = () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-[#fff]"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 3a1 1 0 011 1v4h4a1 1 0 110 2h-4v4a1 1 0 11-2 0v-4H5a1 1 0 110-2h4V4a1 1 0 011-1z"
          clipRule="evenodd"
        />
      </svg>
    );


  // const contacts = [

  //     {
  //       name: ' jhon',
  //       status: 'Available',
  //       img:Avatar1,
  //     },
  //     {
  //       name: ' jhonny',
  //       status: 'Available',
  //       img: Avatar1,
  //     },
  //     {
  //       name: ' Alex',
  //       status: 'Available',
  //       img: Avatar1,
  //     },
  //     {
  //       name: ' Alaxender',
  //       status: 'Available',
  //       img: Avatar1,
  //     },
  //     {
  //       name: ' El',
  //       status: 'Available',
  //       img: Avatar1,
  //     },
  //     {
  //       name: ' Light',
  //       status: 'Available',
  //       img: Avatar1,
  //     },
  //   ]
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user:details')));
    const [conversation, setConversation] = useState([]);
    const [messages, setMessages] = useState({});
    const [inputMessage , setInputMessage ] = useState({});
    console.log('user : ' + user);
    console.log(conversation);

    useEffect(()=>{
      const loggedInUser = JSON.parse(localStorage.getItem('user:details'));
        const fetchConversations = async ()=>{
          const res = await fetch(`http://localhost:5555/api/conversation/${loggedInUser?.id}`,{
            method: 'GET',
            headers:{
            'Content-Type': 'application/json',
          },
          });
          const resData = await res.json();
          setConversation(resData);
        }
        fetchConversations();
    } , []);


    const fetchMessages = async (conversationId , user)=>{
        const res = await fetch(`http://localhost:5555/api/message/${conversationId}`,{
          method: "GET",
          headers:{
            'Content-Type': 'application/json',
          },
          // body: JSON.stringify({conversationId}),
        });
        const resData = await res.json();
        console.log('resdata >>', resData);
        console.log('messages >>', messages);
        setMessages({messages : resData, reciver: user, conversationId});
    }

    const sendMessage = async ()=>{
      const res = await fetch(`http://localhost:5555/api/message`,{
          method: "POST",
          headers:{
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            conversationId: messages?.conversationId,
            senderId: user?.id,
            inputMessage,
            reciverId: messages?.reciver?.reciverId,
          }),
        });
        const resData = await res.json();
        console.log('resdata >>', resData);
        setInputMessage();
      
    };
  
  return (
    <>
    {/* <h1>dashboard</h1> */}
      <div className=" flex   w-full">
        <div className="w-[25%]  h-screen  bg-[#080a14]  text-white">
          <div className="flex justify-center items-center mt-8 shadow-lg  pb-8">
              <div className='rounded-full object-cover border-4 border-[#3081D0] mr-2'>
                <img src={Avatar1} alt="Avatar Image" className="rounded-full h-20 w-20 "/>
              </div>
              <div className="pl-2">
                  <h1 className='text-lg'>{user?.fullName}</h1>
                  <p className='text-sm'>My Account</p>
                </div>
          </div>
          <div className="w-full flex flex-col items-center pr-4">
            <div className="pt-4">Messages</div>
            <div className="w-full">
              {
                conversation.map(({conversationId , user})=>{
                  return(
                      <div className="flex pl-2 pt-2 cursor-pointer items-center ml-2 mr-2 mt-4 w-full shadow-sm bg-[#288a85] pb-4 rounded-lg " onClick={()=>fetchMessages(conversationId, user)}>
                        <div className='rounded-full  border-2 border-[#808080]'>
                          <img src={Avatar1} alt="Avatar Image" className="rounded-full h-12 w-12 "/>
                        </div>
                        <div className="pl-2">
                            <h1 className='text-xl '>{user?.fullName}</h1>
                            <p className='text-sm text-[#ffffff]'>{user?.email}</p>
                        </div>
                      </div>
                  )
                })
              }
            </div>
          </div>


        </div>
        <div className=" w-[50%] h-screen bg-[#288a85] flex flex-col items-center ">
            {
              messages?.reciver?.fullName && 
              
            <div className="w-[75%] h-[80px] mt-8  mb-4 bg-[#080a14] text-white shadow-lg rounded-full flex items-center jusity-center  ">
                <div className='cursor-pointer'>
                    <img src={Avatar1} alt="Avatar Image" className="rounded-full h-20 w-20 "/>
                </div>
                <div className="p-4 m-4 ">
                  <h1 className='text-xl '>{messages?.reciver?.fullName}</h1>
                  <p className='text-sm text-[#808080]'>{messages?.reciver?.email}</p>
                </div>
                {/* <div className="cursor-pointer  mr-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone-plus" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                  <path d="M15 6h6m-3 -3v6" />
                  </svg>
                </div> */}
            </div>
            
            }
          <div className="h-[75%]  w-full overflow-y-auto  p-4 " style={{ scrollbarWidth: 'thin', scrollbarColor: '#888 #f1f1f1' }}>
            <div className="h-[1000px] px-10 py-14">
              
             {
              messages?.messages?.length >0 ? messages.messages.map(({message , user :{id} = {}}) =>{
                if(id === user?.id){
                  return(
                      <div className=" max-w-[40%] rounded-b-xl rounded-tr bg-[#FFF5C2] ml-auto p-4 text-black">
                        {message}
                      </div>
                  )
                }else{
                  return(
                          <div className=" max-w-[40%] rounded-b-xl rounded-tr-xl bg-[#F0ECE5] p-4">
                        {message}
                          </div>
                  )
                }  
              })
                : 
                  <div className=" max-w-[100%] rounded-b-xl rounded-tr-xl bg-[#F0ECE5] p-4">
                    No Messages
                  </div>
             }
              
            </div>
          </div>

          {
              messages?.reciver?.fullName && 
                    <div className="flex items-center p-4 bg-[#080a14] border-t rounded-full mt-4 w-[75%] border-gray-200">
                    <div className="flex items-center justify-center rounded-full overflow-hidden border-2 border-[#00BFA5] mr-3">
                      <img src={Avatar1} alt="Avatar" className="rounded-full h-10 w-10" />
                    </div>
                    <div className="flex-1">
                      <input type="text" placeholder="Type a message..." className="w-full py-2 px-4 rounded-lg bg-gray-200 focus:outline-none" value={inputMessage} onChange={(e)=> setInputMessage(e.target.value)} />
                    </div>
                    <button className={`mx-2  ${!inputMessage && 'pointer-events-none'}`} onClick={sendMessage } >
                      <SendIcon  />
                    </button>
                    <button className={`mr-2 `} >
                      <PlusIcon  />
                    </button>
                  </div>
                  
          }
              
                
             

          

        </div>
        <div className="w-[25%] bg-[#000] text-white "> 
        <div className="flex justify-center items-center mt-8 shadow-lg  pb-8">
              <div className="pl-2 text-white ">
                  <h1 className='text-sm text-7xl mb-8'>Chat Pulse</h1>
                  <h3 className='text-lg'>{user?.fullName}</h3>
                  <h3 className='text-lg'>{user?.email}</h3>
                </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardIndex;
