// eslint-disable-next-line @typescript-eslint/no-unused-vars
import CouponView from './components/coupon_view'
import Headers from './components/header'
import { Analytics } from '@vercel/analytics/react'

function App() {


  return (
    <div className='w-full h-full justify-center items-center bg-[#D0A9F5] flex flex-col'>
     <Headers />
     <CouponView />
     <Analytics />
    </div>
  )
}

export default App
