import {  useState } from "react";
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

    const onChange = (index:number) => () =>  {
        const start = data.slice(0, index) 
        const [active, ...ends] = data.slice(index, data.length)
       setSlides([active,...ends, current, ...start])
    }

    return (
        <div className="grid grid-cols-1 max-w-[600px] m-auto gap-6 w-full lg:hidden">
            <div className="w-full aspect-video  bg-xp-base rounded-2xl p-10 relative flex flex-col">
                <div className="w-[30px] text-xl absolute h-full top-0 left-0  flex flex-col justify-center items-center">
                    <button onClick={prev} className=" text-secondary  w-[30px] h-[30px] flex items-center justify-center rounded-full hover:bg-[#15161a] transition-all duration-200">
                        &lt;
                    </button>
                </div>
                <div className="w-[30px] text-xl absolute h-full top-0 right-0  flex flex-col justify-center items-center">
                    <button onClick={next} className=" text-secondary  w-[30px] h-[30px] flex items-center justify-center rounded-full hover:bg-[#15161a] transition-all duration-200">
                        &gt;
                    </button>
                </div>
                <img src='/quote.svg' className="absolute" alt="quote" />
                <picture className="w-full flex justify-end mb-6 min-h-[80px]">
                    <img src={current.img} alt={current.title} className="w-[80px]" />
                </picture>
                <p className="text-white font-hanken text-xl text-balance mb-4 flex-1 flex items-center min-h-[270px] xs:min-h-[150px]">
                    {current.title}
                </p>
                <span className="text-secondary font-ibm text-[12px] xs:text-sm"> &lt;{current.autor}&gt;</span>
                <p className="text-secondary font-ibm text-[12px] xs:text-sm">  &lt;{current.charge}&gt;</p>
            </div>
            <div className="grid grid-cols-4 gap-4">
                {data.map(({ title, img }, index) => (
                    <button key={img} className='bg-xp-base h-[60px] xs:h-[80px] sm:h-[100px] flex flex-col justify-center items-center rounded-lg p-4 cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-sm' onClick={onChange(index)} >
                        <img className="w-full block object-contain max-h-[90%]" src={img} alt={title} />
                    </button>
                ))}
            </div>
        </div>
    )
}

export default CarrouselMobile