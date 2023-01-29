import React from 'react';
import { dataHome } from '../data';
import { homeDs, homeMb, homeTb } from '../images';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="home">
            <div className="home-container">
                <div className="home-content">
                    {
                        dataHome.map((data) => {
                            return(
                                <React.Fragment>
                                    <p className="home-subtitle">
                                        {data.subTitle}
                                    </p>
                                    <p className="home-title">
                                        {data.title}
                                    </p>
                                    <p className="home-description">
                                        {data.description}
                                    </p>
                                </React.Fragment>
                            );
                        })
                    }
                </div>
                <div className="home-explore">
                    <span className="explore-circle"></span>
                    <span className="explore-circle__bg"></span>
                </div>
            </div>
            <div className="home-bg">
                <picture>
                    <source media="(min-width: 1024px)" srcSet={homeDs} type='image/jpg' />
                    <source media="(min-width: 768px)" srcSet={homeTb} type='image/jpg' />
                    <img src={homeMb} alt="home background" />
                </picture>
            </div>
        </div>
    );
}

export default Home;