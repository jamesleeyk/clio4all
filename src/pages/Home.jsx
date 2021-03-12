import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Carousel from '../components/Carousel/Carousel';

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <h1>Home</h1>
                <Carousel />
            </div>
        )
    }
}

export default Home;