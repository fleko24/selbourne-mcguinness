import React from 'react'
import './trade.style.scss'

const Trade = () => {
  const images = [
    { src: '/trade/trade-1.jpg' },
    { src: '/trade/trade-2.jpg' },
    { src: '/trade/trade-3.jpg' },
    { src: '/trade/trade-4.jpg' },
    { src: '/trade/trade-5.jpg' },
    { src: '/trade/trade-6.jpg' },
    { src: '/trade/trade-7.jpg' },
    { src: '/trade/uni-2.jpg' },
    { src: '/trade/uni-3.jpg' },
    { src: '/trade/uni-4.jpg' }
  ];
  return (
    <div className='container'>
      <div className='text-container'>
        <span className='title'>Trade & Contracts.</span>
        <br/><br/>
        <p className='text'>
          Shelbourne & McGuinness commercial can provide kitchens, wardrobes and any fitted furniture for a wide variety of commercial projects.
        </p>
        <br/>
        <p className='text'>
          Architects, Interior Designers, Builders and Developers can trust us to deliver the right product at the right price at the right time for their projects.
        </p>
        <br/>
        <blockquote className='bq'>At our Showroom you and your customer can experience the most up to date designs and products.</blockquote>
        <br/>
        <p className='text'>
          Some of our recently completed projects include:
        </p>
        <br/>
        <br/>
        <div className="list-container">
          <ul className='items-list'>
            <li className='item'>Uninest Student Bedrooms for Kavanagh Court and Ardcairn House.</li>
            <li className='item'>213 apartments at Wyckham Point Dundrum for JJ Rhatigan.</li>
            <li className='item'>8 detached houses for Mallincross Ltd at Balrothery.</li>
          </ul>
        </div>
      </div>
      <div className='pics-container'> 
            {
              images.map((imgSrc, index) => (
                <div className="pic" style={{ backgroundImage: `url(${imgSrc.src})`}}>
                  {/*<img src={imgSrc.src} key={index} alt="images"/>*/}
                </div>
               )
              )   
            }
      </div>
    </div>
  )
}

export default Trade