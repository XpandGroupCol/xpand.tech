import { Controller, useFormContext } from "react-hook-form"
import InputRadio from "../inputRadio"

const BudgetForm = () => {
    const { control, formState: { errors } } = useFormContext()

    const error = errors?.presupuesto_tech?.message as string
    return (
        <div role="radiogroup" className="flex flex-col gap-8 md:flex-row md:[&>div]:w-[45%] flex-wrap justify-around">
            <Controller control={control} name="presupuesto_tech" render={({ field }) => <InputRadio id='0-4' label="$ 0 - $ 4.000.000" {...field} defaultChecked value='1.000.000 a 4.000.000'  />} />
            <Controller control={control} name="presupuesto_tech" render={({ field }) => <InputRadio id='4-8' label="$ 4.000.001 - $ 8.000.000" {...field} value='4.000.001 a 8.000.000' />} />
            <Controller control={control} name="presupuesto_tech" render={({ field }) => <InputRadio id='8-12' label="$ 8.000.001 - $ 12.000.000"  {...field} value='8.000.001 a 12.000.000' />} />
            <Controller control={control} name="presupuesto_tech" render={({ field }) => <InputRadio id='more' label="Más de $ 12.000.000" {...field} value='12.000.000 o más' />} />
            {Boolean(error) && <span className="text-sm text-red-700 ml-5">{error}</span>}
        </div>
    )
}

export default BudgetForm