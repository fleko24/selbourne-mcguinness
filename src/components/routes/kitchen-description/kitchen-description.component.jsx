import React from 'react'
import { useParams} from 'react-router-dom'
import { kitchens } from '../../../Data/kitchens.data';
import VideoPlayer from '../../video-player/video-player.component';
import Button from '../../button/button.component';
import './kitchen-description.style.scss'


const KitchenDescription = () => { 
    const {  id } = useParams();
    const kitchen = kitchens.find( k => k.id === id)
   
    return (
            <div className='kitchen-description'>
                <div className='image-container'>
                    <img src={kitchen.image} alt={kitchen.name} className='bg-image'/>
                    <div className='overlay'>
                        <div className='main-container'>
                            <div className='text-container'>
                                <h1>{kitchen.name}</h1>
                                <p className='description'>{kitchen.first_content}</p> 
                                <blockquote>{kitchen.slogan}</blockquote>
                                <p className='description'>{kitchen.second_content}</p> 
                                <div className="btn-container">
                                 { /*  <Button onClick={() => window.open(kitchen.brochure, '_blank')} text='View brochure'/>*/}
                                 <Button handleClick={() => window.open(kitchen.brochure, '_blank')} text='View brochure'/>
                                </div> 
                            </div>
                            <div className="video-container">
                                <VideoPlayer src={kitchen.video} title={kitchen.name} width="100%" height="100%"/>
                            </div>
                        </div>
                        
                        <div className="optionals-container">
                            <span className='optionals-title'>Options include:</span>
                            <ul className="options-list">
                            {
                                kitchen.options.map(k => {
                                    return (
                                        <li className='option' key={k}>{k}</li>
                                    )
                                })
                            }
                            </ul>
                          {/*  <div className="btn-container">
                                 <Button text="Get more Info > "/>
                        </div>*/}



                            
                        </div>
                    </div>
                </div>
            </div>
        );

}

export default KitchenDescription