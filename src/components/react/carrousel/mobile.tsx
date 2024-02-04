import { useMemo, useState } from "react";
import { CARROUSEL_DATA } from '@/config/carrousel-data'

const CarrouselMobile = () => {

    const [slides, setSlides] = useState(() => CARROUSEL_DATA)

    const current = slides[0]
    const data = [...slides.slice(1, slides.length)]


    const prev = () => {
        const rest = [...data.slice(0, -1)]
        const last = data[data.length - 1]
        setSlides([last, current, ...rest])
    }

    const next = () => {
        setSlides([...data, current])
    }

    return (
        <div className="grid grid-cols-1 max-w-[600px] m-auto gap-6 w-full lg:hidden">
            <div className="w-full aspect-video  bg-xp-base rounded-2xl p-10 relative flex flex-col">
                <div className="w-[30px] text-xl absolute h-full top-0 left-0  flex flex-col justify-center items-center">
                    <button onClick={prev} className=" text-secondary  w-[24px] h-[24px] flex items-center justify-center rounded-full hover:bg-[#15161a] transition-all duration-200">
                        &lt;
                    </button>
                </div>
                <div className="w-[30px] text-xl absolute h-full top-0 right-0  flex flex-col justify-center items-center">
                    <button onClick={next} className=" text-secondary  w-[24px] h-[24px] flex items-center justify-center rounded-full hover:bg-[#15161a] transition-all duration-200">
                        &gt;
                    </button>
                </div>
                <img src='/quote.svg' className="absolute" />
                <picture className="w-full flex justify-end mb-6">
                    <img src={current.img} alt={current.title} className="w-[80px]" />
                </picture>
                <p className="text-white font-hanken text-xl text-balance mb-4 flex-1 flex items-center">
                    {current.title}
                </p>
                <span className="text-secondary font-ibm text-sm"> &lt;{current.autor}&gt;</span>
                <p className="text-secondary font-ibm text-sm">  &lt;{current.charge}&gt;</p>
            </div>
            <div className="grid grid-cols-4 gap-4">
                {data.map(({ title, img }) => (
                    <div key={img} className='bg-xp-base h-[60px] xs:h-[80px] sm:h-[100px] flex flex-col justify-center items-center rounded-lg p-4'>
                        <img className="w-full block object-contain max-h-[90%]" src={img} alt={title} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CarrouselMobile