import { Controller, useFormContext } from "react-hook-form"
import Input from "../input"

const PersonalInformationForm = () => {
    const {formState: {errors}, control} = useFormContext()

    return (
        <div className="flex flex-col gap-10">
            <Controller control={control} name="firstName" render={({field}) => <Input type="text"  placeholder="Nombre" error={errors?.firstName?.message as string} {...field} /> } />
            <Controller control={control} name="lastName" render={({field}) =>  <Input type="text" placeholder="Apellido"  error={errors?.lastName?.message as string} {...field}  />} />
           
        </div>
    )
}

export default PersonalInformationForm