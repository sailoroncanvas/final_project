import React from 'react';
import { ReactComponent as AlarmIcon } from '../assets/icons/alarm.svg';
import { ReactComponent as DiaryIcon } from '../assets/icons/diary.svg';
import { ReactComponent as MyIcon } from '../assets/icons/my.svg';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Link, useHistory } from 'react-router-dom';

export const HomePage = () => {
  const history = useHistory()
  return (
    <div>
      <div className='flex justify-between px-6 items-center'>
        <div className='font-lobster py-6 text-3xl text-cyan-400'>Message from Moi</div>
        <div className='flex justfy-end items-center space-x-2'>
          <div>
            <Link to="/alarm">
              <button>
                <AlarmIcon className='w-10 h-10 py-2' />
              </button>
            </Link>
          </div>
          <div>
            <Link to="/mydiary">
              <button>
                <DiaryIcon className='w-10 h-10 py-2' />
              </button>
            </Link>
          </div>
          <MyIcon className='w-10 h-10 py-2' />
        </div>
      </div>

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


      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => history.push('/mydiary')}
      >
        <SwiperSlide>
          <div>
            <div className='font-lobster pl-6 py-6 text-rose-500 text-3xl justify-end'>Letter from My Diary</div>
            <div className='flex items-center justify-center'>
              <img src="https://images.unsplash.com/photo-1542295669297-4d352b042bca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt=""></img>
            </div>
          </div>



          <div>
            <div className="font-chakra mt-6 ml-6 font-semibold text-xl">Weather</div>
            <div className='mt-4 text-center text-lg font-medium'>햇살 따사로운 날</div>
            <div className="font-chakra mt-6 ml-6 font-semibold text-lg mb-4">Fashion Log</div>
            <div className='text-center text-lg font-medium'>얇은 민소매 플로럴 원피스 딱 좋았다</div>
            <div className='text-center text-lg font-medium'>그래도 저녁까지 있을 거면 봄 카디건 가져올 걸</div>
            <div className="font-chakra mt-4 mr-4 mb-2 font-semibold text-right">Date: 2022. 06. 11. 2 P.M. / 27° </div>
          </div>
        </SwiperSlide>
        <SwiperSlide></SwiperSlide>

      </Swiper>


      <div>
        <div className='mt-8 ml-6 font-lobster text-3xl text-orange-400'>#BOTD</div>
        <div className="w-full overflow-x-scroll">
          <div className='flex min-w-max'>
            <div>
              <div className='mt-2 ml-6 h-40 w-30 flex space-x-4'>
                <img src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80"></img>
              </div>
              <div className='text-center'>#반소매</div>
            </div>

            <div>
              <div className='mt-2 ml-6 h-40 w-30 flex space-x-4'>
                <img src="https://images.unsplash.com/photo-1574809736435-dced6ecf6ce7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"></img>
              </div>
              <div className='text-center'>#데님 반바지</div>
            </div>

            <div>
              <div className='mt-2 ml-6 h-40 w-30 flex space-x-4'>
                <img src="https://images.unsplash.com/photo-1585944672394-4c58a015c1fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"></img>
              </div>
              <div className='text-center'>#운동화</div>
            </div>


            <div>
              <div className='mt-2 ml-6 h-40 w-30 flex space-x-4'>
                <img src="https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80"></img>
              </div>
              <div className='text-center'>#드레스</div>
            </div>

            <div>
              <div className='mt-2 ml-6 h-40 w-30 flex space-x-4'>
                <img src="https://images.unsplash.com/photo-1518049362265-d5b2a6467637?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80"></img>
              </div>
              <div className='text-center'>#하이힐</div>
            </div>

          </div>
        </div>

      </div>


      <div>
        <div className="mt-10 h-48 flex flex-row-justify justify-center items-center space-x-8"
          style={{ backgroundImage: 'url(/kind-steel.png)' }}>
          <Link to="/bulletin">
            <button>
              <div className='border-y-4 border-4 h-40 w-40 bg-white border-white drop-shadow-md text-center flex items-center justify-center'><div className='text-sm text-black'>지금 사람들은 <br /> 이렇게 입었어요! <br /> <span className='mt-6 font-lobster text-2xl text-indigo-500'>#OOTD</span></div></div>
            </button>
          </Link>
          <div>
            <Link to='/sotd'>
              <button>
                <div className='border-y-4 border-4 h-40 w-40 bg-white border-white drop-shadow-md text-center flex items-center justify-center'><div className='text-sm text-black'>특별하고 색다른 <br /> 상황별 코디 추천 <br />  <span className='mt-6 font-lobster text-2xl text-pink-400'>#SOTD</span> </div></div>
              </button>
            </Link>
          </div>
        </div>
      </div>






    </div>

  );
};
