import React from 'react';
import { ReactComponent as alramIcon } from '../assets/icons/alarm.svg';
import { ReactComponent as diaryIcon } from '../assets/icons/diary.svg';
import { ReactComponent as myIcon } from '../assets/icons/my.svg';

export const HomePage = () => {
  return (
    <div>
      <div className='font-lobster pl-6 py-6 text-3xl text-green-400'>Message from Moi</div>
      <div className='py-6 flex items-center justify-center'>
        <img src="https://images.unsplash.com/photo-1517495306984-f84210f9daa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt=""
          className='rounded-full w-52 h-52 relative' />
        <div className='absolute'>
          <div className='font-chakra text-white text-4xl text-center py-2'>Seoul</div>
          <div className='font-chakra text-white text-xl text-center py-2'>29°</div>
          <div className='text-white text-lg text-center'>AM. 09:41</div>
        </div>
      </div>

      <div className='font-lobster pl-6 py-6 text-rose-500 text-3xl'>Letter from My Diary</div>
      <div className='pl-3 flex items-center center-justify'>
        <img src="https://images.unsplash.com/photo-1542295669297-4d352b042bca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt=""></img>
      </div>

      <div className='mt-4 text-center text-xl font-medium'>햇살 따사로운 날</div>
      <div className='text-center text-xl font-medium'>얇은 민소매 플로럴 원피스 딱 좋았다</div>
      <div className='text-center text-xl font-medium'>그래도 저녁까지 있을거면 봄 카디건 가져올 걸</div>

      <div className='mt-6'>
        <img src='kind steel.png' className='relative'></img>
        <div className='absolute border-y-4'></div>
      </div>





    </div>

  );
};
