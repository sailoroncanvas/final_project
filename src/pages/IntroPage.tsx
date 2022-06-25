import React from 'react'
import { Link } from 'react-router-dom'

export const IntroPage = () => {
    return (
        <div>
            <img src='four.png'
                className='w-full h-screen object-cover'/>

            <div>
                <Link to="/location">
                    <button>
                <img src='ilogo.png'
                    className='absolute top-64 flex-center' />
                    </button>
                    </Link>
            </div>
            
            <div className='absolute flex-center py-12 text-white'>
            </div>



        </div>
    )
}