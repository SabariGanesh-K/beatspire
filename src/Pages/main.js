import React from 'react'
import { Routes, Route} from "react-router-dom";
import { Landing } from './Landing/Landing';

export const Main = () => {
  return (
    <div>
          <Routes>
            <Route path="/home" element={<Landing />} />
            
          </Routes>
    </div>
  )
}
