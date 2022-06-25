import React from 'react'
import { Link } from 'react-router-dom';
import { ReactComponent as BackIcon } from '../assets/icons/back.svg';

export const SOTDPage = () => {
    return (
        <div>

            <div>
                <Link to=" /home">
                    <button>
                        <BackIcon />
                    </button>
                </Link>
            </div>


            <div className="text-center py-6 font-bold text-4xl font-lobster text-pink-400">#SOTD</div>

            <div className='justify-center'>
                <div className="flex flex-col space-y-12 ">


                    <div>
                        <div className="flex flex-row space-x-12 justify-center py-12">


                            <div>
                                <Link to=" /casual">
                                    <button>
                                        <img
                                            src="https://images.unsplash.com/photo-1525828024186-5294af6c926d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                                            alt=""
                                            className="w-32 h-32 object-cover rounded-full"
                                        />
                                        <div className="font-bold mt-2 text-center">캐주얼</div>
                                    </button>
                                </Link>
                            </div>



                            <div>
                                <img
                                    src="https://images.unsplash.com/photo-1600091166971-7f9faad6c1e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                                    alt=""
                                    className="w-32 h-32 object-cover rounded-full"
                                />
                                <div className="font-bold mt-2 text-center">정장</div>
                            </div>

                        </div>

                        <div>
                            <div className="flex flex-row space-x-12 justify-center py-12">

                                <div>
                                    <img
                                        src="https://images.unsplash.com/photo-1565462905097-5e701c31dcfb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
                                        alt=""
                                        className="w-32 h-32 object-cover rounded-full"
                                    />
                                    <div className="font-bold mt-2 text-center">로맨틱</div>
                                </div>


                                <div>
                                    <img
                                        src="https://images.unsplash.com/photo-1541338784564-51087dabc0de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80
                "
                                        alt=""
                                        className="w-32 h-32 object-cover rounded-full"
                                    />
                                    <div className="font-bold mt-2 text-center">트레이닝복</div>
                                </div>

                            </div>

                        </div>


                        <div>
                            <div className="flex flex-row space-x-12 justify-center py-12">

                                <div>
                                    <img
                                        src="https://images.unsplash.com/photo-1588117260148-b47818741c74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80
                "
                                        alt=""
                                        className="w-32 h-32 object-cover rounded-full"
                                    />
                                    <div className="font-bold mt-2 text-center">액세서리</div>
                                </div>


                                <div>
                                    <img
                                        src="https://images.unsplash.com/photo-1632149877166-f75d49000351?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80
                "
                                        alt=""
                                        className="w-32 h-32 object-cover rounded-full"
                                    />
                                    <div className="font-bold mt-2 text-center">겨울정장</div>
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