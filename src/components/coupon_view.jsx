
import db from "../db/db_connection";
import { useState } from "react";
import { useEffect } from "react";



export default function CouponView() {

    const [currentDate, setCurrentDate] = useState(new Date());
    const [currentFormattedDate, setFormattedCurrentDate] = useState(`${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`);

    const [list, setList] = useState([]);
    useEffect(() => {
        fetchData();
    }, [currentDate]);

    const fetchData = async () => {
        setList([]);

        const result = async () =>
            await db.sql(`use database TajasCoupon; SELECT * FROM t_coupon WHERE date = '${`${currentDate.getDate().toString().padStart(2, '0')}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getFullYear()}`}' `);

        await result().then((data) => {
            setList(data);
        });
    }




    return (
        <div className="w-full pt-5 flex flex-col item-center justify-center p-2">
            <div className="flex flex-col sm:flex-row m-5 justify-center gap-4 items-center">
                <p className="text-sm text-[#45a049">Date</p>

                <input type="date" className="bg-[#45a049] hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" value={
                    `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate().toString().padStart(2, '0')}`
                } onChange={(e) => {
                    setCurrentDate(new Date(e.target.value));

                }} />

                <button className="bg-[#45a049] hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={
                    () => {
                        window.location.reload();
                    }
                } >
                    Refresh
                </button>

            </div>

            <div className="flex flex-col rounded-xl  w-full p-2 justify-center items-center">
                <div className="flex bg-[#45a049] text-white flex-row border-b text-sm items-center justify-around border-t w-full ">
                    <p className="w-1/3 border-r pt-3 pb-3  border-l  text-center font-bold">Time</p>
                    <p className="w-1/3 border-r pt-3 pb-3  border-l text-center font-bold">Coupon</p>
                    <p className="w-1/3 border-r pt-3 pb-3 border-l  text-center font-bold">Result</p>
                </div>

                {
                    list.length > 0 ? <ShowList list={list} /> : <p className="text-sm m-4 font-bold text-[#45a049]">No data</p>
                }

            </div>
        </div>
    );
}


function ShowList({ list }) {
    return (
        <>
            {
                list.map(d => (
                    <Card key={d.time} time={d.time} coupon={"Tejas"} result={d.result} color={d.color} />
                ))
            }
        </>
    )
}

function Card({ time, coupon, result,color }) {

    return (
        <div className="h-[50px] flex bg-white text-black flex-row border-b text-sm items-center justify-around border-t w-full">
            <p className="w-1/3 border-r pt-3 pb-3  border-l text-center">{time}</p>
            <p className="w-1/3 border-r pt-3 pb-3  border-l text-center">{coupon}</p>
            <p className="w-1/3 border-r pt-3 pb-3  border-l  text-center" style={{backgroundColor:color}}>{result.toString().padStart(2, '0')}</p>
        </div>
    );
}