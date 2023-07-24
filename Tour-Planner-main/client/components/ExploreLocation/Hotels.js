import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../../styles/Home.module.css'
import { Autoplay, Pagination, Navigation } from "swiper";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/outline";
import { data } from '../LandingPage/HeroCarouselData'
import Cards from './Cards';
import { useSelector } from 'react-redux';

const Hotels = () => {
    const { data: allData, isLoading, isError, isSuccess } = useSelector(state => state.placeDetails)
    const hotelsData = allData?.hotels?.features
    return (
        <>
            <div className="grid w-4/5 grid-cols-1 sm:grid-cols-2  mx-auto mt-11">
                <div className="">
                    <h2 className="font-bold text-3xl py-2">Restaurants & Hotels
                    </h2>
                    <h2 className="font-light text-lg py-1 text-[#697488] ">These popular destinations have a lot to offer
                    </h2>
                </div>
                <div className="mx-auto sm:ml-auto sm:mr-0 mt-3 sm:mt-0 flex items-center">
                    <button className="hotelsPrev p-3 hover:scale-105 hover:text-blue-700 hover:-translate-x-2 transition ease-out active:text-blue-900 bg-gray-100 rounded-full"><ArrowLeftIcon className="h-5" /></button>
                    <div className="hotels" /> <button className="hotelsNext p-3 hover:scale-105 hover:text-blue-700 hover:translate-x-2 transition ease-out active:text-blue-900 bg-gray-100 rounded-full"><ArrowRightIcon className="h-5" /></button>
                </div>
            </div>
            <div className="w-4/5 my-8 sm:text-xl m-auto">
                <Swiper
                    className="w-full"
                    spaceBetween={15}
                    slidesPerView={1}
                    // centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        // clickable: true,
                        // renderCustom: renderCustomPagination
                        el: '.hotels',
                        clickable: true,
                    }}
                    navigation={{
                        nextEl: '.hotelsNext',
                        prevEl: '.hotelsPrev',
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                    loop={true}
                    modules={[Autoplay, Pagination, Navigation]}


                >
                    {
                        isSuccess && hotelsData.map((data, id) => <SwiperSlide key={data.properties.place_id}><Cards data={data.properties} /></SwiperSlide>)
                    }
                </Swiper>
            </div>
        </>
    )
}

export default Hotels