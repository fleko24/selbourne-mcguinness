import React from 'react'
import './contact.style.scss'
import Map from '../../map/map.component'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Icon } from '@iconify/react';

const Contact = () => {
  return (
    <div className='contact-container'>
      <div className="text-panel">
          <span className='title'> Get in touch</span>
          <br/>
          <br/>
          <p className='text'>Please contact us if you have any questions or would like to find out more information about any of our services and products.</p>
          <br/>
          <br/>
          <span className='subtitle'>Contact Brendan</span>
          <br/>
          <br/>
          <span className='text'>Email: brendan@shelbourneandmcguinness.ie</span>
          <br/>
          <span className='text'>Phone: 01 276 8503</span>
          <br/>
          <span className='text'>Address:
                Unit 3,
                Egan Business Centre,
                Upper Dargle Road,
                Bray,
                Co. Wicklow,
                A98 PT73
          </span>
          <br/>
          <div className='social'>
            <span className='subtitle'>Follow Us</span>
            <br/><br/>
            <div className="icons-container">
              <a href='https://www.facebook.com/profile.php?id=100052565877043'>
                <FacebookIcon className='fb-icon' sx={{ fontSize: 45}} color='secondary' />
              </a>
              <a href='https://www.facebook.com/profile.php?id=100052565877043'>
                <TwitterIcon className='fb-icon' sx={{ fontSize: 45 }} color='secondary' />
              </a>
              <a href='https://vimeo.com/shelbourneandmcguinness'>
              <Icon className='fb-icon'icon="mdi:vimeo" />
              </a>
            </div>
             
          </div>
         
      </div>
      <div className="map-panel">
        <div className='mapa-container'>
          <Map></Map>
        </div>
      </div>
    </div>
  )
}

export default Contact