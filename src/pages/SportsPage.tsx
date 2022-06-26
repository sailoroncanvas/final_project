import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as BackIcon } from '../assets/icons/back.svg';



export const SportsPage = () => {
    return (
        <div>

            <div>
                <Link to="/sotd">
                    <button>
                        <BackIcon />
                    </button>
                </Link>
            </div>

            <div className="text-center py-6 font-bold text-4xl font-lobster text-black mt-6">#Sports_Wear</div>

            <div className='justify-center'>
                <div className="flex flex-col space-y-12 ">


                    <div>
                        <div className="flex flex-row space-x-12 justify-center py-12 px-4">


                            <div>
                                <img
                                    src="https://images.unsplash.com/flagged/photo-1559500717-44611046e95f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                                    alt=""
                                    className="w-52 h-52 object-cover"
                                />
                                <div className="font-bold mt-2 text-center">스포츠 탱크탑</div>
                            </div>



                            <div>
                                <img
                                    src="https://images.unsplash.com/photo-1444491741275-3747c53c99b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                                    alt=""
                                    className="w-52 h-52 object-cover"
                                />
                                <div className="font-bold mt-2 text-center">사이클 팬츠</div>
                            </div>

                        </div>

                        <div>
                            <div className="flex flex-row space-x-12 justify-center py-12 px-4">

                                <div>
                                    <img
                                        src="https://images.unsplash.com/photo-1618259181324-86a49fe68099?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                        alt=""
                                        className="w-52 h-52 object-cover"
                                    />
                                    <div className="font-bold mt-2 text-center">레깅스</div>
                                </div>


                                <div>
                                    <img
                                        src="https://images.unsplash.com/photo-1600364769293-40c659a6c3c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80
                "
                                        alt=""
                                        className="w-52 h-52 object-cover"
                                    />
                                    <div className="font-bold mt-2 text-center">스웨트프루프 티셔츠</div>
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
