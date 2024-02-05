import Button from "../react/button"
import { useModalStore } from '@/store'


const ButtonForm = ({ children, label, ...buttonProps }: any) => {
    const onOpen = useModalStore((store) => store.onOpen)

    return (<Button onClick={onOpen} label={label} {...buttonProps}>
        {children}
    </Button>

    )
}

export default ButtonForm