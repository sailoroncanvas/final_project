import React, { useEffect, useState } from "react";
import { ReactComponent as Album_heartIcon } from '../assets/icons/album_heart.svg';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Link } from "react-router-dom";

const dummy = [{
    
    image: 'https://images.unsplash.com/photo-1647891941746-fe1d53ddc7a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    weather: "How do you feel about Today's Weather?",
    fashionLog: "Show off your style!",

}, {
    image: 'https://images.unsplash.com/photo-1647891941746-fe1d53ddc7a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    weather: "How do you feel about Today's Weather?",
    fashionLog: "Show off your style!",

}, {
    image: 'https://images.unsplash.com/photo-1647891941746-fe1d53ddc7a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    weather: "How do you feel about Today's Weather?",
    fashionLog: "Show off your style!",

}]

export const MyDiaryPage = () => {
    const [data, setData] = useState<any>();
    useEffect(() => {
        fetch("http://localhost:1337/api/diaries", {
            method: 'GET',
            headers: {
                accept: "application/json",
                Authorization: 'Bearer 2ee95a772dbff633a524aa9a3d2f140a5dce16f4b054db7c3577cafd6f37843a6ed867ffb7289c82ba99e8fba996f622c0277b9c3197e92bf5fe0bde403d419157825b4e2e8ffd24a3ff4fe0e125a831f3d6540e7f65fcf5168f4d53ecb6291b93f9b5a33fb19c1f458a43a50427f3c7370cfc2c0b78192d4035868cc3eafdb8'
            }
        }).then((result) => result.json()).then((json) => setData(json))
    }, [])
    console.log('data', data)
    return (

        <div>

            <div className="font-lobster text-rose-500 py-6 text-center text-3xl">My Diary</div>

            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
            >
                {data?.data?.map((el: any) => <SwiperSlide>
                    <div>
                        <div className="font-chakra ml-4 mb-2 font-semibold">Date:</div>
                        <div className="flex items-center justify-center relative">
                            <img src={el.attributes.image}></img>
                            <Album_heartIcon className="absolute z-100 bottom-0 right-4" />
                        </div>

                        <div className="font-chakra mt-6 ml-6 font-semibold text-xl">Weather</div> <div className="font-chakra text-lg text-center mt-4">{el.attributes.weather}</div>
                        <div className="border-y border-gray-300 mt-4 mb-4"></div>
                        <div className="font-chakra mt-6 ml-6 font-semibold text-xl">Fashion Log</div> <div className="font-chakra text-lg text-center mt-4">{el.attributes.fashionLog}</div>
                    </div>

                    <div>
                        <Link to="/home">
                            <button>
                                <div className="bg-rose-400 py-4 mt-10 ml-12 mr-12 mb-6 text-white text-center font-lobster text-lg rounded-full center-align">Diary Closed!</div>
                            </button>
                        </Link>

                    </div>

                </SwiperSlide>)}

            </Swiper>



        </div >

    );
};
