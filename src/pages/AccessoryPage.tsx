import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as BackIcon } from '../assets/icons/back.svg';



export const AccessoryPage = () => {
    return (
        <div>

            <div>
                <Link to="/sotd">
                    <button>
                        <BackIcon />
                    </button>
                </Link>
            </div>

            <div className="text-center py-6 font-bold text-4xl font-lobster text-black mt-6">#Accessory</div>

            <div className='justify-center'>
                <div className="flex flex-col space-y-12 ">


                    <div>
                        <div className="flex flex-row space-x-12 justify-center py-12 px-4">


                            <div>
                                <img
                                    src="https://images.unsplash.com/photo-1612979022617-b498c5ffbe6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                                    alt=""
                                    className="w-52 h-52 object-cover"
                                />
                                <div className="font-bold mt-2 text-center">데일리용 백팩</div>
                            </div>



                            <div>
                                <img
                                    src="https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=457&q=80"
                                    alt=""
                                    className="w-52 h-52 object-cover"
                                />
                                <div className="font-bold mt-2 text-center">포멀하고 스타일리시한 숄더백</div>
                            </div>

                        </div>

                        <div>
                            <div className="flex flex-row space-x-12 justify-center py-12 px-4">

                                <div>
                                    <img
                                        src="https://images.unsplash.com/photo-1619119069152-a2b331eb392a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                                        alt=""
                                        className="w-52 h-52 object-cover"
                                    />
                                    <div className="font-bold mt-2 text-center">로맨틱한 테니스 팔찌</div>
                                </div>


                                <div>
                                    <img
                                        src="https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80
                "
                                        alt=""
                                        className="w-52 h-52 object-cover"
                                    />
                                    <div className="font-bold mt-2 text-center">운동 효율을 높여주는 스마트워치</div>
                                </div>

                            </div>

                        </div>










                        <div>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}
