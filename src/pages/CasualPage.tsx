import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as BackIcon } from '../assets/icons/back.svg';



export const CasualPage = () => {
    return (
       <div>

         <div>
                <Link to=" /home">
                    <button>
                        <BackIcon />
                    </button>
                </Link>
            </div>

            <div className="text-center py-6 font-bold text-4xl font-lobster text-black">#Casual</div>

            <div className='justify-center'>
            <div className="flex flex-col space-y-12 ">


            </div>
            </div>


       </div>
    )
}
