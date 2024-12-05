import CouponView from './components/coupon_view'
import Headers from './components/header'
import app from './assets/Firebase'
import { getAnalytics,logEvent } from 'firebase/analytics'

function App() {


  const analytics = getAnalytics(app)
  logEvent(analytics, 'page_view');

  return (
    <div className='w-full h-full justify-center items-center bg-[#D0A9F5] flex flex-col'>
     <Headers />
     <CouponView />
    </div>
  )
}

export default App
