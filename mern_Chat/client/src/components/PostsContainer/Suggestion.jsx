const Suggestion=(props)=>{

    return(
        <div className="suggestion">
                <img src={props.user_img} className="post_user_img"/>
                <p>{props.username}</p>
                <button>Follow</button>
        </div>
    )
}

export default Suggestion;