
import "./Navbar.css"
import SearchIcon from '@mui/icons-material/Search';

const Navbar=()=>{
    return(
        <header className="header">
        <nav>
          <div className="nav_center">
            <div className="nav_search">
              <input
                placeholder="Search for friends, photos, videos.."
                type="text"
                className="search_large"
              />
              <input
                placeholder="Search..."
                type="text"
                className="search_small"
              />
              <div className="magnifying-glass"><SearchIcon className="search_icon"/></div>
            </div>
          </div>
          <div className="nav_bars">
            <i className="fa-solid fa-bars"></i>
          </div>
          <div className="nav_right">
            <div className="nav_chat">
              <div>Chat&nbsp;</div>
              <span className="chat_badge">2</span>
            </div>
            <div className="nav_create">
              <span>create</span>
            </div>
            <div className="nav_profile"></div>
          </div>
        </nav>
      </header>
    )
}

export default Navbar;