import React from 'react';
import dollarImg from '../../assets/dollar 1.png'

const Navbar = ({coin}) => {
    return (

        <div className="w-10/12 mx-auto navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Cricket</a>
            </div>
            <div className="flex-none">
                <button className="flex justify-between items-center gap-2 font-bold text-xl">
                    {coin} Coins
                   <img src={dollarImg} alt="" />
                </button>
            </div>
        </div>

    );
};

export default Navbar;