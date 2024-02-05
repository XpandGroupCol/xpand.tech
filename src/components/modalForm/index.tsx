import { useState } from "react"
import Modal from "../react/modal"

import CloseIcon from "@/components/icons/CloseIcon.tsx"
import XpandLogoSmall from "../icons/XpandSmallLogo"
import Form from "../react/form"
import Stepper from "../react/stepper"
import { STEPPER_DATA } from "@/config/stepper-data"
import { FormProvider, useForm } from "react-hook-form"
import { invitationSchema, invitationValues } from '../react/form/schema'
import { useCreateLead } from "@/hooks/useCreateLead"
import { yupResolver } from "@hookform/resolvers/yup"
import { validateForm } from "@/utils/validateForm"
import ThankYou from "../react/form/thankYou"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useModalStore } from '@/store'


const ModalForm = () => {
    const [step, setStep] = useState(1)

    const open = useModalStore((store) => store.open)
    const onClose = useModalStore((store) => store.onClose)

    const { load, createLead, resetFetch, success } = useCreateLead()

    const methods = useForm({
        defaultValues: { ...invitationValues },
        resolver: yupResolver(invitationSchema),
    })
    const { handleSubmit, trigger, reset } = methods

    const onCloseModal = () => {
        // setIsOpen(false)
        onClose()
        setStep(1)
        reset({ ...invitationValues })
        resetFetch()
    }
    // const onOpenModal = () => setIsOpen(true)


    const onNext = async () => {
        const isValid = await validateForm(trigger, step)
        if (!isValid) return
        setStep(prev => prev + 1)

    }

    const onPrev = () => {
        if (step === 1) return
        setStep(prev => prev - 1)

    }

    const onChnageStep = async (step: number) => {
        const isValid = await validateForm(trigger, step)
        if (!isValid) return
        if (step === STEPPER_DATA.length) return
        setStep(step)
    }

    const onSubmit = async (values: any) => {

        await createLead({ ...values, tag: 154, list: 33 }).then((data) => {
            if (data) {
                setStep(prev => prev + 1)
            }
        })
    }

    const isLastStep = step === STEPPER_DATA.length

    return (
        <>
            <ToastContainer theme="colored" />
            <Modal isOpen={open} onClose={onCloseModal}>
                <header className="flex justify-between items-center px-6 pt-6">
                    <XpandLogoSmall />
                    <button type="button" onClick={onCloseModal} className=' cursor-pointer w-[34px] h-[34px] rounded-full flex flex-col justify-center items-center transition-all duration-300 hover:bg-[#0a169a22]'>
                        <CloseIcon />
                    </button>
                </header>
                <FormProvider {...methods}>
                    <div className="max-w-3xl m-auto py-12 flex flex-col h-full overflow-y-auto px-6 font-hanken">
                        <h2 className="text-primary text-2xl md:text-5xl text-center mb-8 font-bold">¡Estamos a punto de ir
                            más allá con tu empresa!</h2>
                        <div className="m-auto w-full flex justify-center flex-col items-center mt-6 mb-8">
                            <Stepper current={step} onChange={onChnageStep} data={STEPPER_DATA} />
                        </div>

                        {success ?
                            <ThankYou onClick={onCloseModal} />
                            :
                            <>
                                <p className="text-[18px] md:text-xl text-xp-base text-center mb-6">Completa la siguiente información:</p>
                                <form className="flex-1 flex flex-col">
                                    <Form step={step} />
                                    <div className="flex flex-col gap-[20px] mt-12 md:mt-0 md:flex-row md:max-w-md mx-auto w-full">
                                        <button
                                            disabled={step === 1 || load}
                                            onClick={onPrev}
                                            type="button"
                                            className="border-2 hover:opacity-95 transition-all duration-300  disabled:border-gray-300 disabled:text-gray-300 border-primary text-primary px-6 py-3 inline-flex justify-center items-center font-hanken italic rounded-full w-full h-[46px] md:h-[56px] md:min-w-[150px]">
                                            Volver
                                        </button>
                                        <button disabled={load} className="border-2 disabled:!bg-gray-300 disabled:border-gray-300 hover:opacity-95 transition-all duration-300  bg-primary disabled:text-xp-base text-white px-6 py-2 inline-flex justify-center items-center font-hanken italic rounded-full w-full h-[46px] md:h-[56px] min-w-[150px]" type={'button'} onClick={!isLastStep ? onNext : handleSubmit(onSubmit)}>
                                            {isLastStep ? 'Enviar' : 'Siguiente'}
                                        </button>
                                    </div>
                                </form>
                            </>}
                    </div>
                </FormProvider>
            </Modal>
        </>
    )
}

export default ModalForm