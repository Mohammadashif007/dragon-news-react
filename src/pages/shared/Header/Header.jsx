import React from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center mt-14'>
            <img className='mx-auto' src={logo} alt="" />
            <p className='text-xl my-3'>Journalism Without Fear or Favour</p>
            <p className='text-3xl'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;