import React from 'react';
import Header from '../shared/Header/Header';
import Navbar from '../shared/Navbar/Navbar';
import Right_side_Nav from '../shared/Right_side_Nav/Right_side_Nav';
import Left_side_nav from '../shared/Left_side_nav/Left_side_nav';
import Breaking_News from './Breaking_News';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Breaking_News></Breaking_News>
            <Navbar></Navbar>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                <div className=''>
                    <Left_side_nav></Left_side_nav>
                </div>
                <div className='md:col-span-2 '> <p>News</p></div>
                <div className=''>
                    <Right_side_Nav></Right_side_Nav>
                </div>
            </div>
        </div>
    );
};

export default Home;