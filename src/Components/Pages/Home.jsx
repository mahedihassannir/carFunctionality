import React from 'react';


const Home = () => {
    return (
        <div>
            <div className='w-full'>

                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/tqKxnsQ/1.jpg" className="w-full h-[600px]" />
                        <div className="absolute flex  transform  right-0 mr-3 gap-4  bottom-0  -translate-y-1/2 ">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/sm3t5dP/2.jpg" className="w-full h-[600px]" />
                        <div className="absolute flex  transform  right-0 mr-3 gap-4  bottom-0  -translate-y-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/sPGjh8R/3.jpg" className="w-full h-[600px]" />
                        <div className="absolute flex  transform  right-0 mr-3 gap-4  bottom-0  -translate-y-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">

                        <img src="https://i.ibb.co/rtmGQ0J/4.jpg" className="w-full rounded-lg h-[600px]" />


                        <div className="absolute flex  transform  right-0 mr-3 gap-4  bottom-0  -translate-y-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Home;