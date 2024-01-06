import './Leftbar.css'
import HomeIcon from '@mui/icons-material/Home';
import ViewArrayIcon from '@mui/icons-material/ViewArray';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const Leftbar=()=>{

    return(
        <div className="leftbar_container">
            <div className="leftbar">
                <div className="logo"><img className="logo_img" src="/images/logo/logo.png"></img></div>
            <div className="nav_links">
                <div className="link_icon"><HomeIcon/></div>
                <div className="link_icon view_array"><ViewArrayIcon /></div>
                <div className="link_icon"><ChatBubbleOutlineIcon/></div>
                <div className="link_icon"><FavoriteBorderIcon/></div>
            </div>
            <div className="settings">
                <SettingsIcon/>
            </div>
            </div>
        </div>
    )
}

export default Leftbar;