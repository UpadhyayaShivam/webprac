import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ChatsPage = () => {
    const [chats , setChats] = useState([]);

    const fetchChats = async () =>{
        const {data} = await axios.get("/api/chats");

        // console.log(data);
        setChats(data);
    };

    useEffect(()=>{
        fetchChats()
    },[]);


  return (
    <div>
      <h1>chats</h1>
      {chats.map((c)=>(
        <h1 key={c._id}>
        {c.chatName}
        </h1>
      ))}
    </div>
  );
;}

export default ChatsPage;
