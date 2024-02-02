import { Controller, useFormContext } from "react-hook-form"
import Input from "../input"

const ContactForm = () => {
    const { formState: { errors }, control } = useFormContext()
    return (
        <div className="flex flex-col gap-10">
            <Controller control={control} name="email" render={({ field }) => <Input type="email" placeholder="Correo electrónico" error={errors?.email?.message} {...field} />} />
            <Controller control={control} name="phone" render={({ field }) => <Input type="tel" placeholder="Número de WhatsApp" error={errors?.phone?.message} icon={<span className="text-[#a3a4a6]">+57</span>} {...field} />} />
        </div>
    )
}

export default ContactForm