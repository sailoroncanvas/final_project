import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { ReactComponent as BackIcon } from '../assets/icons/back.svg';
import { TextField } from '../components/TextField';




//useEffect(() => { }, []);


export const PostPage = () => {
    const { push } = useHistory();
    const [weather, setWeather] = useState("");
    const [fashionlog, setFashionLog] = useState("");
    const [date, setDate] = useState("");
    const [image, setImage] = useState("");
    const { replace } = useHistory();




    const create = () => {
        axios
            .post("http://localhost:1337/api/diaries", {
                data: {
                    date: date,
                    weather: weather,
                    fashionlog: fashionlog,
                    userid: localStorage.getItem('userid'),
                },
            })
            .then((response) => {
                // Handle success.
                console.log('Well done!');
                replace("/mydiary");

            })

            .catch((error) => {
                //Handle error.
                console.log('An error occurred:', error.response);
            });

    };


    return (


        <div>

            <div>
                <Link to=" /mydiary">
                    <button>
                        <BackIcon />
                    </button>
                </Link>
            </div>

            <div className='mt-8 font-lobster text-center text-4xl text-blue-400'>Write Today's Diary</div>


            <div className='font-chakra ml-6 mt-12 text-black text-lg'>
                <TextField label="Date:" placeholder="What's today's date?"
                    value={date}
                    onChange={(event) => {
                        setDate(event.target.value);
                    }} />

            </div>


            <div className="border-y border-black mt-4"></div>

            <div className='ml-6 mt-4'>
                <TextField label="Image" placeholder="Show off your style!"
                    value={image}
                    onChange={(event) => {
                        setImage(event.target.value);
                    }} />

            </div>

            <div className='py-48'></div>

            <div className="border-y border-black mt-4"></div>


            <div>

                <div className='font-chakra mt-6 ml-6 font-semibold text-xl'>
                    <TextField label="Weather" placeholder="How do you feel about Today's Weather?"
                        value={weather}
                        onChange={(event) => {
                            setWeather(event.target.value);

                        }} />

                    <div className="border-y border-gray-300 mt-4 mb-4 justify-center"></div>

                    <div className="mb-4 font-chakra mt-6 ml-6 font-semibold text-xl"></div>
                    <TextField label="Fashion Log" placeholder="Show off your style!"
                        value={fashionlog}
                        onChange={(event) => {
                            setFashionLog(event.target.value);

                        }} />
                </div>



            </div>


            <div className="place-content-center center-justify py-14">
                

                        <div className='flex items-center'>
                        <div className="ml-40 border-2 bg-blue-400 py-4 text-white text-center font-lobster text-lg rounded-full items-center" onClick={() => {
                            create();
                        }}>Create Diary</div>
                        </div>
                

            </div>




        </div>
    )
}