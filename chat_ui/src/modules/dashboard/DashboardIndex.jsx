import React from 'react';
import Avatar1 from '../../Assests/Avatar3.svg'

const DashboardIndex = () => {




    const SendIcon = () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-[#808080]"
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
        className="h-6 w-6 text-gray-500"
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


  const contacts = [

      {
        name: ' jhon',
        status: 'Available',
        img:Avatar1,
      },
      {
        name: ' jhonny',
        status: 'Available',
        img: Avatar1,
      },
      {
        name: ' Alex',
        status: 'Available',
        img: Avatar1,
      },
      {
        name: ' Alaxender',
        status: 'Available',
        img: Avatar1,
      },
      {
        name: ' El',
        status: 'Available',
        img: Avatar1,
      },
      {
        name: ' Light',
        status: 'Available',
        img: Avatar1,
      },
    ]
  
  return (
    <>
    {/* <h1>dashboard</h1> */}
      <div className=" flex   w-full">
        <div className="w-[25%]  h-screen  bg-[#FDF7E4] ">
          <div className="flex justify-center items-center mt-8 shadow-lg  pb-8">
              <div className='rounded-full object-cover border-4 border-[#006D77] mr-2'>
                <img src={Avatar1} alt="Avatar Image" className="rounded-full h-20 w-20 "/>
              </div>
              <div className="">
                  <h1 className='text-lg'>CHAT PULSE</h1>
                  <p className='text-sm'>My Account</p>
                </div>
          </div>
          <div className="w-full flex flex-col items-center pr-4">
            <div className="pt-4">Messages</div>
            <div className="w-full">
              {
                contacts.map(({name,status,img})=>{
                  return(
                      <div className="flex pl-2  items-center ml-2 mr-2 mt-4 w-full shadow-sm bg-[#FAF9F6] pb-4 rounded-lg ">
                        <div className='rounded-full  border-2 border-[#808080]'>
                          <img src={img} alt="Avatar Image" className="rounded-full h-12 w-12 "/>
                        </div>
                        <div className="pl-2">
                            <h1 className='text-xl '>{name}</h1>
                            <p className='text-sm text-[#808080]'>{status}</p>
                        </div>
                      </div>
                  )
                })
              }
            </div>
          </div>


        </div>
        <div className=" w-[50%] h-screen bg-[#FAF9F6] flex flex-col items-center ">
          <div className="w-[75%] h-[80px] mt-8  mb-4 bg-[#faeed1] shadow-lg rounded-full flex items-center jusity-center  ">
            <div className='cursor-pointer'>
                <img src={Avatar1} alt="Avatar Image" className="rounded-full h-20 w-20 "/>
            </div>
            <div className="p-4 m-4 ">
              <h1 className='text-xl '>Alaxender</h1>
              <p className='text-sm text-[#808080]'>online</p>
            </div>
            <div className="cursor-pointer ml-72 mr-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone-plus" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              <path d="M15 6h6m-3 -3v6" />
              </svg>
            </div>
          </div>
          <div className="h-[75%]  w-full overflow-y-auto  p-4 " style={{ scrollbarWidth: 'thin', scrollbarColor: '#888 #f1f1f1' }}>
            <div className="h-[1000px] px-10 py-14">
              <div className=" max-w-[40%] rounded-b-xl rounded-tr-xl bg-[#F0ECE5] p-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </div>
              <div className=" max-w-[40%] rounded-b-xl rounded-tr bg-[#FFF5C2] ml-auto p-4 text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </div>
              <div className=" max-w-[40%] rounded-b-xl rounded-tr-xl bg-[#F0ECE5] p-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </div>
              <div className=" max-w-[40%] rounded-b-xl rounded-tr bg-[#FFF5C2] ml-auto p-4 text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </div>
              <div className=" max-w-[40%] rounded-b-xl rounded-tr-xl bg-[#F0ECE5] p-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </div>
              <div className=" max-w-[40%] rounded-b-xl rounded-tr bg-[#FFF5C2] ml-auto p-4 text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </div>
              <div className=" max-w-[40%] rounded-b-xl rounded-tr-xl bg-[#F0ECE5] p-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </div>
              <div className=" max-w-[40%] rounded-b-xl rounded-tr bg-[#FFF5C2] ml-auto p-4 text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </div>
              <div className=" max-w-[40%] rounded-b-xl rounded-tr-xl bg-[#F0ECE5] p-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </div>
              <div className=" max-w-[40%] rounded-b-xl rounded-tr bg-[#FFF5C2] ml-auto p-4 text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </div>
              
            </div>
          </div>

          <div className="flex items-center p-4 bg-[#EEF5FF] border-t rounded-full mt-4 w-[75%] border-gray-200">
            <div className="flex items-center justify-center rounded-full overflow-hidden border-2 border-[#00BFA5] mr-3">
              <img src={Avatar1} alt="Avatar" className="rounded-full h-10 w-10" />
            </div>
            <div className="flex-1">
              <input type="text" placeholder="Type a message..." className="w-full py-2 px-4 rounded-lg bg-gray-100 focus:outline-none" />
            </div>
            <button className="mr-2">
              <PlusIcon />
            </button>
            <button>
              <SendIcon />
            </button>
          </div>

        </div>
        <div className="w-[25%]  "> yo 3</div>
      </div>
    </>
  )
}

export default DashboardIndex
