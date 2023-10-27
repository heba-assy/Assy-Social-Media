import './Navbar.scss';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../../Context/darkModeContext'
import { AuthContext } from '../../Context/AuthContext';

function Navbar() {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const {currentUser} = useContext(AuthContext)

  return (
    <div className='navbar'>
      <div className='left'>
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>AssySocial.</span>
        </Link>
        <HomeOutlinedIcon />
        {darkMode ?
          <DarkModeOutlinedIcon onClick={toggle} style={{ cursor: "pointer" }} />
          :
          <WbSunnyOutlinedIcon onClick={toggle} style={{ cursor: "pointer" }} />}
        < GridViewOutlinedIcon />
        <div className='search'>
          <SearchOutlinedIcon />
          <input type='text' placeholder='Search...' />
        </div>
      </div>
      <div className='right'>
        <PersonOutlineOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsNoneOutlinedIcon />
        <div className='user'>
          <img src={currentUser.profilePic} alt='' />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar