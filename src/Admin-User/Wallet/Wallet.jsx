import './Wallet.css'
import { AccountCircle, ConnectedTvRounded, ConnectWithoutContact, ConnectWithoutContactSharp, Search, Share, ShoppingBag } from '@mui/icons-material';
import Box from '@mui/material/Box';
import atmimage from '../../assets/atmimage.png'

const Wallet = () => {
  return (
    <div className='WalletContainer'>
      <div className='WallFirstSection'>
        <h4> Good morning</h4>
        <p> Emmanuel </p>
        <AccountCircle />
        <input type="Search" placeholder='Search items' className='searcheng' />
        <a href="#" className="button"> Search </a>
      </div>
      <div className='WallpSection'>
        <p> Saved Items</p>
      </div>

      <div>
        <div className="Wallcard1">
          <img src={atmimage} alt="Beans and Plantain" className="atmimage" />
          <img src={atmimage} alt="Beans and Plantain" className="atmimage" />
        </div>
      </div>
    </div >
  )
}

export default Wallet