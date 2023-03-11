import React from 'react';
import '../style/home.min.css'

function Home() {
    return (
        
        <section className="Home">
            <div className="hero-body">
                <div className="hero-container">
                    <p className="title">
                        Random Ass Fights
                    </p>
                    <p className="subtitle">
                        <img
                        className='hero-img'
                        src='https://cdn.randomassfights.live/Static/IMG/4nWnO7.png'
                        width='350'
                        height='400'
                        />
                    </p>
                </div>
            </div>
            <article className="message">
                <div className="message-header">
                    <h3>Want to add a video?</h3>
                </div>
                <div className="message-body">
                    Shoot us an email: <a href='mailto:requests@randomassfights.live'>requests@randomassfights.live</a>
                </div>
            </article>
        </section>
    );
}

export default Home;