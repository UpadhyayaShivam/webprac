import SendIcon from '@mui/icons-material/Send';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import {useState,useEffect} from 'react';

const Post =(props)=>{

    const [isLiked,setIsLiked] = useState(props.like);
    const [likes,setLikes] = useState(props.likesCount);

    function likeHandler(){
        setIsLiked(!isLiked);
        setLikes(!isLiked?likes-1:likes+1);
    }

    useEffect((e)=>{
        const textarea = document.querySelectorAll("textarea");
        textarea.forEach((area)=>{
            area.addEventListener("keyup",(e)=>{
            area.style.height="auto";
            const height = e.target.scrollHeight;
            area.style.height=`${height}px`;
        })
        })    
    });

    return(

        <div className="post_container">
            <div className="post">
                <div className="post_top">
                    <img src={props.user_img} className="post_user_img"/>
                    <p className="post_username">{props.username}</p>
                    <p className="post_time">{props.post_time}</p>
                </div>
              <div className="post_display">
                <img src={props.post_image}/>
                <p className="post_description">{props.desc}</p>
                </div>
              <div className="post_bottom">
                <div className="post_icons">
                   <button className="like-btn" onClick={likeHandler}> {isLiked?<FavoriteBorderIcon className="icon"/>:<FavoriteIcon className="icon" style={{color:"red"}}/>} </button>
                    <ChatBubbleOutlineIcon className="icon"/>
                    <SendIcon className="icon"/>
                </div>
                <div className="likes_count">{likes} likes</div>
                <div className="write_something">
                    <img src={props.admin_img}/>
                    <textarea type="text" placeholder="write somehting.." maxLength="350"/>
                </div>
              </div>
            </div>
          </div>
    )
}

export default Post;