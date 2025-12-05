import './Profile.css'
import { AccountCircle, ConnectedTvRounded, ConnectWithoutContact, ConnectWithoutContactSharp, Search, Share, ShoppingBag } from '@mui/icons-material';
import Box from '@mui/material/Box';


const Profile = () => {
  return (
    <div className='PofileContainer'>
      <div className='FirstSection'>
        <h4> Good morning</h4>
        <p> Emmanuel </p>
        <AccountCircle />
        <input type="Search" placeholder='Search items' className='searcheng' />
        <a href="#" className="button"> Search </a>

      </div>
    </div>
  )
}

export default Profile