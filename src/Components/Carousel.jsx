import React, { useContext, useEffect } from 'react'
import { DataContext } from '../Context/DataContext'
import Slider from 'react-slick';

const Carousel = () => {
    const { data, fetchAllProds } = useContext(DataContext);

    useEffect(() => {
        fetchAllProds();
    }, [])

    // SampleNextArrow, SamplePrevArrow functions

    var settings = {
        dots: false,
        autoplay:true,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // nextArrow: <SampleNextArrow to="next" />,
        // prevArrow: <SamplePrevArrow to="prev" />
    };

    return (
        <div className='w-screen overflow-hidden'>
            <Slider {...settings}>
                {
                    data?.slice(0,7)?.map((item, index)=>{
                        return <div key={index} className='bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] -z-10 px-5 '>
                            <div className="flex gap-7 justify-center md:h-[400px] items-center ">
                                <div className="">
                                    <h3 className='text-red-400 font-semibold font-sans text-sm'>Powering Your World with the Best in Electronics.</h3>
                                    <h1 className="text-4xl font-bold uppercase text-white line-clamp-3 md:w-[300px]">{item.title}</h1>
                                    <p className="md:w-[500px] text-gray-400 pr-7 py-4 line-clamp-3">{item.description.length > 190 ? item.description.slice(0,187) + "..." : item.description}</p>
                                    <button className="bg-gradient-to-r from-red-400 to-purple-400 rounded px-3 py-1 text-white font-semibold font-sans cursor-pointer mt-3">Shop Now</button>
                                </div>
                                <div>
                                    <img className='w-[270px] h-[270px] p-5 bg-slate-200 rounded-full hover:scale-105 transition-all shadow-2xl shadow-red-300' src={item.image} alt={item.title} />
                                </div>
                            </div>
                        </div>
                    })
                }
                <div>
                    <h3>1</h3>
                </div>
               
            </Slider>
        </div>
    )
}

export default Carousel