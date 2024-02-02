import { useState } from "react"
import Accordeon from "./accordeon"
import { ACCORDEON_DATA } from '@/config/accordeon-data'
import type { ItemType } from "@/config/types"


const AccordeonList = () => {

    const [currentActive, setCurrentActive] = useState<any>({})

    const handleClick = (id: string | number) =>  setCurrentActive((prev:any ) => {
        if(prev[id]) {
            delete prev[id] 
            return {...prev}
        }
        return {...prev, [id]: id}
    })  

    return (
        <div className="mt-[50px] md:mt-[80px] w-full" >
            {ACCORDEON_DATA.map((el) => (
                <Accordeon key={el.id} {...el} current={currentActive} onClick={handleClick} />
            ))}
        </div>
    )
}

export default AccordeonList