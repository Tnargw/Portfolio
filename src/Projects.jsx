import React from 'react';

const Projects = () => {
    return (
        <div id='projects' className='project-container'>
            <div className='project'>
                <h1 className='project-title' >Projects</h1>
                <div className='project-items-container'>
                    {/* Hoppy Frog */}
                    <div className='project-item'>
                        <a target='blank' href="https://github.com/Tnargw/flutter_game">
                            <div className='project-image-one'></div>
                            <div className='project-description'>
                                <h1>Hoppy Frog</h1>
                                <h5>
                                    A Flappy Bird clone built with Flutter, featuring a custom parallax background, smooth animations, and a selection of multiple frog characters.
                                </h5>
                                <h4 className='project-button'>VIEW PROJECT</h4>
                            </div>
                        </a>
                    </div>
                    {/* Maze of Glory */}
                    <div className='project-item'>
                        <a target='blank' href="https://github.com/Tnargw/Snowfall-DataAnalysis">
                            <div className='project-image-two'></div>
                            <div className='project-description'>
                                <h1>Snowfall Data Analysis</h1>
                                <h5>
                                    A Python tool for visualizing historical snowfall using Open-Meteo's API, Geonames for nearby cities, and Folium to generate interactive heatmaps. Users can explore snowfall differences across regions and time periods on an HTML map.
                                </h5>
                                <h4 className='project-button'>VIEW PROJECT</h4>
                            </div>
                        </a>
                    </div>
                    {/* Pokecards */}
                    <div className='project-item'>
                        <a target='blank' href="https://github.com/Tnargw/p2pGame">
                            <div className='project-image-three'></div>
                            <div className='project-description'>
                                <h1>P2P Python Game</h1>
                                <h5>
                                    A multiplayer Pong game built in Python with real-time peer-to-peer networking powered by Python Banyan. It uses TCP communication to sync gameplay between two players.
                                </h5>
                                <h4 className='project-button'>VIEW PROJECT</h4>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;