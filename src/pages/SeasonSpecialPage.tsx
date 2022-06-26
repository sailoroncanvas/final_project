import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as BackIcon } from '../assets/icons/back.svg';



export const SeasonSpecialPage = () => {
    return (
        <div>

            <div>
                <Link to="/sotd">
                    <button>
                        <BackIcon />
                    </button>
                </Link>
            </div>

            <div className="text-center py-6 font-bold text-4xl font-lobster text-black mt-6">#Season_Special</div>

            <div className='justify-center'>
                <div className="flex flex-col space-y-12 ">


                    <div>
                        <div className="flex flex-row space-x-12 justify-center py-12 px-4">


                            <div>
                                <img
                                    src="https://images.unsplash.com/photo-1651489330304-6b7521930deb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                                    alt=""
                                    className="w-52 h-52 object-cover"
                                />
                                <div className="font-bold mt-2 text-center">봄 꽃샘추위를 위한 <br></br> 봄 코트</div>
                            </div>



                            <div>
                                <img
                                    src="https://images.unsplash.com/photo-1623184502217-d5e1cab9363b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                    alt=""
                                    className="w-52 h-52 object-cover"
                                />
                                <div className="font-bold mt-2 text-center">더운 여름엔 바캉스를 위한 수영복</div>
                            </div>

                        </div>

                        <div>
                            <div className="flex flex-row space-x-12 justify-center py-12 px-4">

                                <div>
                                    <img
                                        src="https://images.unsplash.com/photo-1550263292-000a0d08ffa0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
                                        alt=""
                                        className="w-52 h-52 object-cover"
                                    />
                                    <div className="font-bold mt-2 text-center">가을엔 분위기 있고 따뜻한 스카프</div>
                                </div>


                                <div>
                                    <img
                                        src="https://images.unsplash.com/photo-1579479942929-16888239a675?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80
                "
                                        alt=""
                                        className="w-52 h-52 object-cover"
                                    />
                                    <div className="font-bold mt-2 text-center">겨울엔 따뜻하고 가벼운<br></br>패딩</div>
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
