import React from 'react';
import { ReactComponent as KeyIcon } from '../assets/icons/key.svg';
import { ReactComponent as BackIcon } from '../assets/icons/back.svg';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

export const MyPage = () => {
  return (
    <div>

      <div>
        <Link to=" /home">
          <button>
            <BackIcon />
          </button>
        </Link>
      </div>

      <div className='my-52'>
        <div className='font-lobster text-center text-blue-900 text-4xl mt-32 my-24'>My Page</div>

        <div className='board-separate border-spacing-2 border-slate-400'></div>

        <div className='flex flex-row space-x-4 items-center justify-center text-center'>
          <div className='flex flex-row'>

            <div className='font-chakra border-4 h-20 w-40 bg-white border-white drop-shadow-md text-center font-semibold text-center justify-center'>
          
              <div className='mt-6'>Sailoroncanvas</div>
             
            </div>
          </div>
          <div>
            <Link to='/mydiary'>
              <button>
                <div className='font-chakra border-y-4 border-4 h-20 w-40 bg-white border-white drop-shadow-md text-center font-semibold'>
                  <div className='mt-6'>Scrapbook</div>
                  </div>
              </button>
            </Link>
          </div>
        </div>

        <div className='py-12 px-4'>
          <div className="border-2 border-blue-900 rounded-full text-white text-center py-4 font-semibold mt-7 bg-blue-900 font-lobster text-xl">
            Log Out
          </div>
        </div>

      </div>

    </div>
  )
}