import React, { useEffect } from 'react'
import { getData } from '../Context/DataContext'
import Slider from 'react-slick';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Category from './Category';

const Carousel = () => {
    const { data, fetchAllProds } = getData();

    useEffect(() => {
        fetchAllProds();
    }, [])

    // SampleNextArrow, SamplePrevArrow functions
    const SamplePrevArrow = (props) => {
        const {className, style, onClick} = props;

        return (
            <div onClick={onClick} className={`arrow ${className}`} style={{zIndex:3}}>
                <AiOutlineArrowLeft className='' style={{...style, display:"block", borderRadius:"50px", backgroundColor: "#f53347", color:"white", position: "absolute", padding:"2px", left:"50px", height:"40px", width: "40px", margin:"1px"
                }}/>
            </div>
        );
    }

    const SampleNextArrow = (props) => {
        const {className, style, onClick} = props;
        
        return (
            <div onClick={onClick} className={`arrow ${className}`} style={{zIndex:3}}>
                <AiOutlineArrowRight className='' style={{...style, display:"block", borderRadius:"50px", backgroundColor: "#f53347", color:"white", position: "absolute", padding:"2px", right:"50px", height:"40px", width: "40px", margin:"1px"
                }} />
            </div>
        );
    }

    var settings = {
        dots: false,
        autoplay:true,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 500,
        pauseOnHover: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <div className='w-full-hidden'>
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
            </Slider> 
            <Category />
        </div>
    )
}

export default Carousel