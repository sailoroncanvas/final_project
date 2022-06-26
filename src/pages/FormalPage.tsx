import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as BackIcon } from '../assets/icons/back.svg';



export const FormalPage = () => {
    return (
        <div>

            <div>
                <Link to="/sotd">
                    <button>
                        <BackIcon />
                    </button>
                </Link>
            </div>

            <div className="text-center py-6 font-bold text-4xl font-lobster text-black mt-6">#Formal</div>

            <div className='justify-center'>
                <div className="flex flex-col space-y-12 ">


                    <div>
                        <div className="flex flex-row space-x-12 justify-center py-12 px-4">


                            <div>
                                <img
                                    src="https://images.unsplash.com/photo-1602810316693-3667c854239a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                    alt=""
                                    className="w-52 h-52 object-cover"
                                />
                                <div className="font-bold mt-2 text-center">화이트 드레스 셔츠</div>
                            </div>



                            <div>
                                <img
                                    src="https://images.unsplash.com/photo-1650889417001-31f6f3df9409?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80"
                                    alt=""
                                    className="w-52 h-52 object-cover"
                                />
                                <div className="font-bold mt-2 text-center">블랙 린넨 소재 자켓</div>
                            </div>

                        </div>

                        <div>
                            <div className="flex flex-row space-x-12 justify-center py-12 px-4">

                                <div>
                                    <img
                                        src="https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1897&q=80"
                                        alt=""
                                        className="w-52 h-52 object-cover"
                                    />
                                    <div className="font-bold mt-2 text-center">면 정장 바지</div>
                                </div>


                                <div>
                                    <img
                                        src="https://images.unsplash.com/photo-1517445312882-bc9910d016b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=473&q=80
                "
                                        alt=""
                                        className="w-52 h-52 object-cover"
                                    />
                                    <div className="font-bold mt-2 text-center">슬랙스</div>
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
