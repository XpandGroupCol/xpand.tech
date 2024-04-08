import clsx from "clsx"
import type { ItemType } from "@/config/types"
import ButtonForm from "./modalForm/buttonForm"

interface Props extends ItemType {
    current?: any,
    onClick: (id: string | number) => void
}

const Accordeon = ({ title, paragraph, img, header, current, id, onClick }: Props) => {
    const isActive = current[id]
    return (
        <div className="w-full">
            <article className="w-full border-t-2 border-secondary">
                <nav className="flex justify-between items-center font-ibm text-secondary text-md md:text-lg py-[30px] transition-all duration-200 px-2 cursor-pointer hover:bg-[#23262e]" onClick={() => onClick(id)}>
                    <h4 className="max-w-[150px] sm:max-w-[220px] text-balance">{header}</h4>
                    <button aria-label={title} className="flex items-center gap-2">
                        <div className="relative">
                            <span className="w-4 h-[2px] bg-secondary block absolute left-0 top-0 right-0 bottom-0 m-auto" />
                            <span className={clsx("w-4 h-[2px] bg-secondary block rotate-[90deg] transition-all", {
                                '!rotate-[0deg]': isActive
                            })} />
                        </div>  Ver
                    </button>
                </nav>
                <main className={clsx('text-white font-hanken  overflow-hidden transition-all max-h-0 duration-200', {
                    '!max-h-[1000px]  delay-200 py-4 ease-in-out duration-400': isActive
                })}>
                    <div className='flex items-center gap-[20px] md:gap-[40px] md:max-w-fit m-auto flex-col md:flex-row pb-[30px]'>
                        <img src={img} className="w-[170px] md:w-[220px] aspect-square" alt={`${title}, ${paragraph}`} loading="lazy" />
                        <div className="flex flex-col items-center gap-[18px] md:gap-[36px] text-[18px] md:text-xl [&>p]:p-0 [&>p]:m-0 font-hanken">
                            <div>
                                <h5 className="font-bold">{title}</h5>
                                <p className="font-light">{paragraph}</p>
                            </div>
                            <ButtonForm
                                client:visible
                                variant="secondary"
                                className="mt-14"
                                size="sm"
                            >
                                Cotizar proyecto &gt;
                            </ButtonForm>
                        </div>
                    </div>
                </main>
            </article>
        </div>
    )
}

export default Accordeon