import { useEffect } from 'react'
import CouponView from './components/coupon_view'
import Headers from './components/header'
import db from './db/db_connection'
function App() {
  const date = new Date()
  useEffect(() => {
    db.sql`insert into views(date) values(${date.toLocaleDateString()})`
  },[])
  
  return (
    <div className='w-full h-full justify-center items-center bg-[#D0A9F5] flex flex-col'>
      <Headers />
      <CouponView />
    </div>
  )
}

export default App
