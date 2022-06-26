import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Icon } from '../assets/icons/Polygon 1.svg'

export const LocationPage = () => {
    return (
        <div>
            <div className="font-lobster text-green-400 text-center mt-12 text-4xl">Hello, I'm Moi!</div>
            <img src='moi.png'
                className="py-16 pl-4" />
            <div className='text-2xl text-center'>오늘 날씨에 뭐입지?</div>
            <div className='text-2xl text-center'>모이가 알려드릴게요!</div>
            <div className="py-4"></div>
            <div className="border-4 border-black h-14 flex justify-end items-center mr-8 ml-8">
                <Icon />
            </div>

            <div>
                <Link to="/home">
                <button>
            <div className="flex items-center mt-6">
            <div className="ml-40 bg-green-400 py-4 text-white text-center font-lobster text-lg rounded-full">Magic Start!</div>
            </div>
            </button>
            </Link>
            </div>

            </div>
            );
        
};