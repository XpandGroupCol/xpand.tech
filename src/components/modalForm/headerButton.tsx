import { useModalStore } from "@/store"

const HeaderButton = () => {
    const onOpen = useModalStore((store) => store.onOpen)
    return (
        <div className="w-[220px] hidden md:flex md: justify-end 2xl:pr-8">
            <button className="font-ibm text-lg text-xp-white" onClick={onOpen}>
                Contactar
            </button>
        </div >
    )
}

export default HeaderButton
