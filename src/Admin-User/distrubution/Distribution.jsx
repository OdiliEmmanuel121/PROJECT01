import './Distribution.css'
import { AccountCircle, ConnectedTvRounded, ConnectWithoutContact, ConnectWithoutContactSharp, Search, Share, ShoppingBag } from '@mui/icons-material';
import Box from '@mui/material/Box';
import damask1 from '../../assets/damask1.jpg'
import sen6 from  '../../assets/sen6.jpg'
import vintage8 from '../../assets/vintage8.jpg'
import sen5 from  '../../assets/sen5.jpg'
import damask2 from '../../assets/damask2.jpg'
import sen7 from  '../../assets/sen7.jpg'
import vintage7 from '../../assets/vintage7.jpg'
import damask3 from '../../assets/damask3.jpg'
import sen4 from  '../../assets/sen4.jpg'




const Distribution = () => {
  return (
    <div className='DistributionContainer'>
      <div className='DistFirstSection'>
        <h4> Good morning</h4>
        <p> Emmanuel </p>
        <AccountCircle />
        <input type="Search" placeholder='Search items' className='Distsearcheng' />
        <a href="#" className="Distbutton"> Search </a>
      </div>
      <div className='DistSecondSection'>
        <h4> Purchased Items ready for distribution </h4>
      </div>
      <div className='DistThirdSection'>
        <p>Select items to distribute</p>
        <div className='DistCheckbox'>
          <h5>Select all</h5>
          <input type="checkbox" />
        </div >
      </div>

      <Box className='DistBoxSection1' sx={{ py: 3 }}>
        <div className='DistcardBox'>
          <div className="Distcard1">
            <img src={damask1} alt="Beans and Plantain" className="Distcard-image5" />
          </div>
        </div>

        <div className='DistcardBox'>
          <div className="Distcard2">
            <img src={sen6} alt="Beans and Plantain" className="Distcard-image2" />
          </div>
        </div>

        <div className='DistcardBox'>
          <div className="Distcard3">
            <img src={vintage8} alt="Beans and Plantain" className="Distcard-image4" />
          </div>
        </div>
      </Box>

      <Box className='DistBoxSection1' sx={{ py: 3 }}>
        <div className='DistcardBox'>
          <div className="Distcard1">
            <img src={sen5} alt="Beans and Plantain" className="Distcard-image5" />
          </div>
        </div>

        <div className='DistcardBox'>
          <div className="Distcard2">
            <img src={damask2} alt="Beans and Plantain" className="Distcard-image2" />
          </div>
        </div>

        <div className='DistcardBox'>
          <div className="Distcard3">
            <img src={sen7} alt="Beans and Plantain" className="Distcard-image4" />
          </div>
        </div>
      </Box>

      <Box className='DistBoxSection2' sx={{ py: 3 }}>
        <div className='DistcardBox'>
          <div className="Distcard1">
            <img src={vintage7} alt="Beans and Plantain" className="Distcard-image6" />
          </div>
        </div>

        <div className='DistcardBox'>
          <div className="Distcard2">
            <img src={damask3} alt="Beans and Plantain" className="Distcard-image9" />
          </div>
        </div>
      </Box>

      <div className='ClassDistbutton1'>
        <a href="#" className="Distbutton1">Click to see similar products </a>
      </div>
    </div>
  )
}

export default Distribution