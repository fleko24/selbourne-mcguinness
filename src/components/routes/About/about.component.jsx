import React from 'react'
import './about.style.scss'

const About = () => {
  return (
    <div className='about'>
        <div className='bg-image'>  
          <div className="overlay-right-panel">
            <div className="content">
                <span className="title">About Us.</span>
                <br/><br/>
                <p className="text">
                    Shelbourne & McGuinness kitchens are created to improve the lives of those who own them.We design and build outstanding quality products exclusively in Ireland for every situation.
                    <br/><br/>
                    Shelbourne & McGuinness kitchens originate from Commitment, Honesty and Originality. Commitment to achieving the very best result with every single kitchen Honesty to customers every step of the journey to the finished project. Originality in Design, technology and products.
                </p>    
                <blockquote className='bq'>The Shelbourne &amp; McGuinness Difference.</blockquote>
                <p className="text">    
                    At Shelbourne & McGuinness we strive for excellence. Our cabinets are produced from high quality Egger melamine sheets, solid wood veneers or furniture grade birch plywood using the very latest CNC machinery.
                    <br/><br/>
                    This system ensures absolute precision in cabinet construction as well as allowing infinite variation in cabinet size. Most of our cabinets would offer 10% more storage space than comparable mass produced examples,as well as allowing us to offer deeper drawers and lower plinth heights.
                    <br/><br/>
                    We source finished doors from several Irish companies as well as offering a complete made to measure option where the customer has complete control of the finished look of the kitchen.
                    <br/><br/>
                    We use all our experience to ensure the quality of the hardware we offer with our kitchens and it is sourced from reputable companies.
                    <br/><br/>
                    All the attention to detail that goes into a Shelbourne & McGuinness kitchen ensures that each kitchen will last a lifetime.
                </p>
                <br/>
                <span className='subtitle'>Our Showroom</span>
                <br/>
                <p className='text'>
                    Some of our fabulous designs are on display in our showroom at Egan Business Centre in Bray, only twenty minutes from South Dublin.
                </p>
                <br/>
                <span className='subtitle'>The Complete Service.</span>
                <br/>
                <p className='text'>
                    We don’t just provide quality kitchens, our service covers all areas of the company from our efficiency in providing plans and quotations quickly,our speed of production and installation to our highly experienced tilers, electricians and plumbers that ensure your project is finished to perfection.
                </p>
                <br/>
                <span className='subtitle'>Our Prices.</span>
                <br/>
                <p className='text'>
                    The price is not the full story. There is a huge difference between the best money can buy and the best value for money.Our aim is to offer the finest quality at a competitive price and we promise that we will be completely honest in all our dealings.
                </p> 
            </div>
          </div>
        </div>
    </div>
  )
}

export default About 