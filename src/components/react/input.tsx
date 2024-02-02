import { forwardRef, type ReactNode } from "react"

interface Props {
    name: string
    placeholder: string
    type: string
    icon?: ReactNode
    id?: string,
    error?: string
}

const Input = forwardRef<Props, any>((({ name, placeholder, type = 'text', icon, error = '', ...props }, ref) => {
    return (
        <div>
            <div className="bg-[#D9D9D9] py-3 md:py-5 px-8 w-full rounded-full inline-flex gap-2 items-center">
                {icon}
                <input ref={ref}  className="text-[18px] bg-[#D9D9D9] w-full outline-none placeholder:text-[#a3a4a6] text-xp-base" name={name} type={type} placeholder={placeholder} {...props} />
            </div>
            {Boolean(error) && <span className="text-sm text-red-700 ml-5">{error}</span>}
        </div>

    )
}))

export default Input