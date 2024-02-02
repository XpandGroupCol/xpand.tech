import { forwardRef, type ReactNode } from "react"

interface Props {
    name: string
    id?: string
    label: string
    error?: string
    value: any
}

const InputRadio = forwardRef<Props, any>((({ name, label = '', id = '', error = '', value='',...props }, ref) => {
    return (
        <div>
            <div className="bg-[#D9D9D9] py-3 md:py-5 px-8 w-full rounded-full inline-flex gap-2 items-center">
                <div className="bg-white rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                    <input ref={ref}  id={id} aria-labelledby={name} value={value} type="radio" name={name} className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" {...props} />
                    <div className="check-icon hidden border-4 border-primary rounded-full w-full h-full z-1"></div>
                </div>
                <label htmlFor={id} className="text-xp-base">{label}</label>
            </div>
            {Boolean(error) && <span className="text-sm text-red-700 ml-5">{error}</span>}
        </div>


    )
}))

export default InputRadio