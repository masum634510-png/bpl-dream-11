import React from 'react';
import img from '../../assets/banner-main.png'

const Banner = () => {
    return (
        <div className='min-h-[60vh] w-10/12 mx-auto bg-linear-to-r rounded-2xl from-gray-900 to-green-300'>
            <div className='flex justify-center items-center gap-5 flex-col py-5'>
                <img src={img} alt="" className='w-[220px] h-[180px]'/>
                <h2 className='font-bold text-3xl text-white'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
                <p className='text-[#ffffffad]'>Beyond Boundaries Beyond Limits</p>
                <button className="btn btn-warning">Claim Free Credit</button>
            </div>
        </div>
    );
};

export default Banner;