import React  from 'react'
import { kitchens } from '../../Data/kitchens.data'
import Kitchen from '../Kitchen/kitchen.component'
import './kitchens-collection.style.scss'

const KitchensCollection = () => {
  return (
    <div className='collection-container'>
       {
        kitchens && kitchens.map((kit) => (
            <Kitchen key={kit.id} props={kit}/>
        ))
       }
    </div>
  )
}

export default KitchensCollection