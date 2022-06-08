import React from "react";

export const MyDiaryPage = () => {
    return (

        <div>

<div className="font-lobster text-rose-500 py-6 text-center text-3xl">My Diary</div>

<div>
    <img src='https://images.unsplash.com/photo-1647891941746-fe1d53ddc7a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    className="ml-3"></img>
    <div className="font-chakra mt-6 ml-3 font-semibold text-xl">Weather</div> <div className="font-chakra text-lg text-center mt-4">How do you feel about Today's Weather?</div>
    <div className="border-y border-gray-300 mt-4 mb-4"></div>
    <div className="font-chakra mt-6 ml-3 font-semibold text-xl">Fashion Log</div> <div className="font-chakra text-lg text-center mt-4">Show off your style!</div>
</div>

<div>
    <div className="bg-rose-400 py-4 mt-10 ml-12 mr-12 mb-6 text-white text-center font-lobster text-lg rounded-full">Diary Closed!</div>
</div>



        </div>
        
    );
};
    