import {useState} from 'react'
import './PostsContainer.css'
import postsArray from './postsArray';
import Post from './Post.jsx'
import Suggestion from './Suggestion';
import suggestions from './suggestions';
import stories from './stories.js'
import AutorenewIcon from '@mui/icons-material/Autorenew';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
const PostsContainer=()=>{  

    let [translation,setTranslation] = useState(0);
    function transalteDown(){
        const stContainer = document.getElementsByClassName('stories_container')[0];
        let x = translation;
        let height = stContainer.scrollHeight;
        if(x>(-height+500)){
            setTranslation(x-=100);
            stContainer.style.transform = `translateY(${x}px)`;
        }
    }
    function translateUp(){
        const stContainer = document.getElementsByClassName('stories_container')[0];
        let x = translation;
        if(x!=0){
            setTranslation(x+=100);
            stContainer.style.transform = `translateY(${x}px)`;
        }
    }
    return(
        <>
          
    <main className="main">
          <div className="main_posts">
            <div className='posts_container'>
            {
              postsArray.map((element,key)=>{
                
               return(
                <Post 
                key={key}
                id={element.id}
                user_img={element.user_img}
                username={element.username}
                post_time={element.post_time}
                post_image={element.post_image}
                like={element.like}
                likesCount={element.likesCount}
                desc={element.desc}
                admin_img={element.admin_img}
                />
               )
              })
            }
            </div>

          </div>
      <div className="main_stories">
            <button onClick={translateUp}><ExpandCircleDownIcon className="arrow-up"/></button>
            <div className="stories_container">
            {stories.map((element)=>(
                <div className='story'>
                    <img src={element.user_img}/>
                </div>
            ))}
            </div>
            <button onClick={transalteDown}><ExpandCircleDownIcon className="arrow-down"/></button>
        </div>    

      <div className="main_end">
        <div className="my_profile">
            <div className="profile_img"><img src="images/profile_pictures/4.jpg"/></div>
            <div className="username"><p>vibhu_2k19</p></div>
            <div className="realname">Vaibhav Sharma</div>
            <AutorenewIcon style={{color:"cornflowerblue"}}/>
        </div>
        <div className="suggestion_container">
            <p>Suggestions</p>
            {
                suggestions.map((element,key)=>{
                    return(<Suggestion key={key} user_img={element.user_img} username={element.username} />)
                })
            }
            <div className="button"><button>See all</button></div>
        </div>
      </div>
    </main>
        </>
    )
}


export default PostsContainer;