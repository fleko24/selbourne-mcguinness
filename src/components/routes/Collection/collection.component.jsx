import React  from 'react'
import { Routes, Route } from 'react-router-dom'
import KitchensCollection from '../../kitchens-collection/kitchens-collection.component'
import KitchenDescription from '../kitchen-description/kitchen-description.component'

const Collection = () => {
  return (
      <Routes>
        <Route index element={ <KitchensCollection />} />
        <Route path=':id' element={<KitchenDescription />}/>
      </Routes>
  )
}

export default Collection