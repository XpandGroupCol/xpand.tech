
import clsx from "clsx"
import type { ReactNode } from "react"

const variantButtons= {
    primary: 'primary',
    secondary: 'secondary'
}

interface Props   {
    onClick: () => void
    label: string
    children: ReactNode
    disabled?: boolean
    variant?: keyof typeof variantButtons
    className?: string,
    size?: 'sm'
}

const Button = ({ onClick, label, children, disabled, variant = 'primary', size, className = '' }: Props) => {
    return <button onClick={onClick} aria-label={label} disabled={disabled} className={clsx('inline-flex items-center whitespace-nowrap rounded-[80px] py-3 md:py-4 px-6 italic font-hanken text-6 min-w-[200px] justify-center font-semibold w-full max-w-[300px] md:max-w-[500px] hover:opacity-95 hover:shadow-lg transition-all duration-200', className, {
    'bg-primary text-white': variant === variantButtons.primary,
    'bg-secondary text-xp-base': variant === variantButtons.secondary,
    '!py-1 font-normal text-[18px] px-4': size === 'sm'
    })}>
        {children}
    </button>
}

export default Button