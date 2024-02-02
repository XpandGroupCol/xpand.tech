import { useCallback, useState } from "react"
import { toast } from "react-toastify"

interface State {
    load: boolean
    success: boolean
}

export const useCreateLead = () => {

    const [response, setResponse] = useState<State>({
        load: false,
        success: false
    })

    const createLead = useCallback(async (payload: any) => {
        try {
            setResponse({ load: true, success: false })
            const response = await fetch(`${import.meta.env.PUBLIC_APP_ENDPOINT}/lead`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload)
            })

            if (!response.ok) {
                toast.error('Tuvimos un problema al procesar tu solicitud, por favor intenta nuevamente.')
                return null
            }
            await response.json()
            setResponse({ load: false, success: true })
            return true

        } catch (e) {
            setResponse({ load: false, success: false })
            toast.error('Tuvimos un problema al procesar tu solicitud, por favor intenta nuevamente.')
            return null
        }
    }, [])

    const resetFetch = useCallback(() => {
        setResponse({ load: false, success: false })
    }, [])

    return {
        createLead,
        resetFetch,
        ...response
    }
}
