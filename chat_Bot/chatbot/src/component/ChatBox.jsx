import React, { useState } from 'react';

const ChatBox = () => {

    const [chatMessage , setChatMessage] = useState([
        {
            message: "hello, I'm your chat mate",
            sender:"ChatGpt",
        }
    ]);


  return (
    <>
        <div className="main_container">
            <div className="chat_container">
                <div className="message_container">
                    <h1>message:</h1>
                        {chatMessage.map((message,i)=>{
                            return <div key={i}></div>
                        })}
                </div>
            </div>
        </div>
      
    </>
  );
};

export default ChatBox;
