// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState } from 'react'
import './App.css'
import CouponView from './components/coupon_view'
import Headers from './components/header'
import About from './components/About'

function App() {


  return (
    <div className='w-full h-full bg-[#D0A9F5] flex flex-col'>
     <Headers />
     <CouponView />
     <About />
    </div>
  )
}

export default App
