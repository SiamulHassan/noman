import React from 'react';
import Bannar from '../Bannar/Bannar';
import Navbar from '../Navbar/Navbar';
import TextSlider from '../TextSlider/TextSlider';
import './Home.css';
const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Bannar></Bannar>
            <TextSlider></TextSlider>
        </div>
    );
};

export default Home;