import React from "react";
import { ReactComponent as Icon } from '../assets/icons/Polygon 1.svg'

export const LocationPage = () => {
    return (
        <div>
            <img src='moi.png'
                className="py-16 pl-4" />
            <div className='text-2xl text-center'>오늘 날씨에 뭐입지?</div>
            <div className='text-2xl text-center'>모이가 알려드릴게요!</div>
            <div className="py-4"></div>
            <div className="border-4 border-black h-14 flex justify-end items-center mr-8 ml-8">
                <Icon />
            </div>

        </div>
    );
};