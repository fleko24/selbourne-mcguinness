import React from 'react'
import './kitchen.style.scss'
import { Link } from 'react-router-dom';

const Kitchen = ({props}) => {
  const { id, image, name } = props;
  return (
    <div className='kitchen-container'>
        <div className="background-image" style={{
            backgroundImage: `url(${image})`
        }
        }/>
       <Link className="body-container" to={id}>
            <h2>{name}</h2>
            <span> VIEW KITCHEN </span>
       </Link>
    </div>
  )
}

export default Kitchen