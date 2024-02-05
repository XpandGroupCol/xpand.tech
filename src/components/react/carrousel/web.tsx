import { EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import styles from './carrousel.module.css'
import { CARROUSEL_DATA } from '@/config/carrousel-data';
import clsx from 'clsx';

const WebSlider = () => {
    return (
        <div className={clsx(styles.xpCarrousel, 'hidden lg:block')}>

            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 350,
                    modifier: 2,
                    slideShadows: true
                }}
                modules={[EffectCoverflow]}
                className="swiper_container"
            >

                {CARROUSEL_DATA.map(({ img, title, autor, charge }) => (
                    <SwiperSlide key={img}>
                        <div className="w-full max-w-[550px] min-h-[330px] aspect-video  bg-xp-base rounded-2xl p-10 relative flex flex-col overflow-hidden">
                            <div className='absolute w-full h-full  top-0 left-0 flex justify-center items-center p-10 blur-sm z-10 bg-xp-base xp-hidden' >
                            <img src={img} alt={title} className='w-[70%]'  />
                            </div>
                            <img src='/quote.svg' className="absolute" />
                            <picture className="w-full flex justify-end mb-6">
                                <img src={img} alt={title} className="w-[80px]" />
                            </picture>
                            <p className="text-white font-hanken text-lg text-balance mb-4 flex-1 flex items-center">
                                {title}
                            </p>
                            <span className="text-secondary font-ibm text-sm"> &lt;{autor}&gt;</span>
                            <p className="text-secondary font-ibm text-sm">  &lt;{charge}&gt;</p>
                        </div>
                    </SwiperSlide>
                ))}


            </Swiper>
        </div>
    )
}

export default WebSlider