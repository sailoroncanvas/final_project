import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as BackIcon } from '../assets/icons/back.svg';

export const AlarmPage = () => {
    return (
        <div>

            <div>
                <Link to=" /home">
                    <button>
                        <BackIcon />
                    </button>
                </Link>
            </div>

            <div className='text-center py-12 font-lobster text-4xl text-teal-400'>Alarm</div>

            <div>
                <div className='text-left pl-4 mb-4 text-lg'>오늘의 모이의 추천을 확인해주세요!</div>
            </div>

            <div className="border-y border-black mt-4"></div>

            <div>
                <div className='text-left pl-4 py-4 mt-3 text-lg'>오늘 날씨는 어떠한가요? 당신의 옷은요? <br /> 일기장이 당신을 기다리고 있어요! <br /> </div>
            </div>

            <div className="border-y border-black mt-4"></div>

            <div>
                <div className='text-left pl-4 py-4 mt-3 text-lg'>ch.blue님이 당신의 코디 공유를 좋아합니다.</div>
            </div>

            <div className="border-y border-black mt-4"></div>

            <div>
                <div className='text-left pl-4 py-4 mt-3 text-lg'>이 패션 로그에 좋아요를 누르셨습니다. <br /> 다음 BOTD에 반영해드릴게요! <br /> </div>
            </div>

            <div className="border-y border-black mt-4"></div>

            <div>
                <div className='text-left pl-4 py-4 mt-3 text-lg'>당신의 두 번째 일기 작성을 축하드립니다!</div>
            </div>

            <div className="border-y border-black mt-4"></div>

            <div>
                <div className='text-left pl-4 py-4 mt-3 text-lg'>모이의 패션 추천이 어땠나요? 알려주세요!</div>
            </div>

            <div className="border-y border-black mt-4"></div>

            <div>
                <div className='text-left pl-4 py-4 mt-3 text-lg'>당신의 세 번째 일기 작성을 축하드립니다!</div>
            </div>

            <div className="border-y border-black mt-4"></div>

            <div>
                <div className='text-left pl-4 py-4 mt-3 text-lg'>오늘은 글을 작성했나요? 빼놓지 않고 써놔요!</div>
            </div>

            <div className="border-y border-black mt-4"></div>

            <div>
                <div className='text-left pl-4 py-4 mt-3 text-lg'>오늘 당신의 기분과 날씨를 말해주세요!</div>
            </div>

            <div className="border-y border-black mt-4"></div>

            <div>
                <div className='text-left pl-4 py-4 mt-3 text-lg'>당신의 첫 번째 일기 작성을 축하드립니다!</div>
            </div>

            <div className="border-y border-black mt-4"></div>


        </div>

    )
}