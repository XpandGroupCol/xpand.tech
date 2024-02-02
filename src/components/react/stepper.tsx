import clsx from "clsx"

const Stepper = ({ current, onChange, data = [] }: any) => {
    return (
        <ul className="relative flex flex-row w-[90%] md:w-[450px]">
            {data.map((el: any, index: number) => {
                const isLast = (data.length - 1) === index
                const isCurrent = current === el.id
                const isCheck = el.id < current
                return (
                    <li onClick={() =>onChange(el.id)} key={el.id} role="button" tabIndex={-1} className={clsx('group shrink', {
                        'basis-0 flex-1': !isLast
                    })}>
                        <div className="min-w-[28px] min-h-[28px] w-full inline-flex items-center text-xs align-middle ml-[16px]">
                            <span className={clsx("w-7 h-7 flex justify-center items-center flex-shrink-0 border-2 border-primary rounded-full ", {
                                'bg-primary': isCheck 
                            })}>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                                    <path d="M14 2L6 10L2 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            {!isLast && <div className={clsx("w-full h-[2px] flex-1 bg-[#acb0d9] group-last:hidden ", {
                                '!bg-primary': isCheck
                            })}></div>}
                        </div>
                        <div className="mt-2 max-w-[80px] ml-[-20px] text-center">
                            <span className={clsx('block text-[12px] sm:text-sm font-medium text-[#acb0d9]', {
                                '!text-primary': isCurrent || isCheck
                            })}>
                                {el?.text}
                            </span>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}

export default Stepper