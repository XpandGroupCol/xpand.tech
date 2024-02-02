import { Controller, useFormContext } from "react-hook-form"
import Input from "../input"

const CompanyDataForm = () => {
    const { formState: { errors }, control } = useFormContext()
    return (
        <div className="flex flex-col gap-10">
            <Controller control={control} name="acct_name" render={({ field }) => <Input type="text"  placeholder="Nombre de la empresa" error={errors?.acct_name?.message} {...field}/>} />
        </div>
    )
}

export default CompanyDataForm