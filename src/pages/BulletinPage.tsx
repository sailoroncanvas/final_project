import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Blank_heart } from '../assets/icons/blank_heart.svg';
import { ReactComponent as BackIcon } from '../assets/icons/back.svg';

export const BulletinPage = () => {
    return (

        <div>

<div>
        <Link to=" /home">
        <button>
        <BackIcon />
        </button>
        </Link>
        </div>

            <div className="text-center py-6 font-bold text-3xl font-lobster text-indigo-500">#OOTD</div>
            <div>
                <img src='https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
                    className="items-center justify-center ml-3 w-50 h-50 object-cover"></img>
                <div className="ml-3 m-4 text-left text-lg font-medium">반소매, 긴바지 / 햇빛은 좋은데 바람 불어서 얇은 자켓 걸치니 딱 좋아요!</div>
                <div className="flex justify-end items-center space-x-2 pr-6">
                    <div className="text-right text-small ">2022.05.11 AM 11:58</div>
                    <Blank_heart />
                </div>

            </div>

            <div className="border-y border-black mt-6"></div>

            <div>
                <div className="ml-3 m-4 text-left text-lg font-medium">반소매에 반바지 입었어요! 지금은 딱 좋은데 조금 있으면 더 추워질거 같아요.</div>
                <div className="flex justify-end items-center space-x-2 pr-6">
                    <div className="text-right text-small">2022.05.11 AM 11:50</div>
                    <div style={{ width: 18 }} />
                </div>
            </div>

            <div className="border-y border-black mt-6 mb-6"></div>


            <div>
                <div>
                    <img src='https://images.unsplash.com/photo-1564702092538-f0301c78282b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
                        className="ml-3"></img>
                    <div className="ml-3 m-4 text-left text-lg font-medium">오늘 날씨 너무 좋아요! 여름 점프수트 입으면 딱이에요!</div>
                    <div className="text-right text-small mr-12">2022.05.11 AM 10:48</div>
                </div>
            </div>

        </div>


    );
};