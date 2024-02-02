import BudgetForm from "./budgetForm"
import CompanyDataForm from "./companyDataForm"
import ContactForm from "./contactForm"
import PersonalInformationForm from "./personalInformationForm"

interface Props {
    step: number
}

const Form = ({ step }: Props) => {
    return (
        <div className="flex-1 md:flex-shrink-0 md:flex-grow-0 mb-8 md:min-h-[220px]">
            {step === 1 && <PersonalInformationForm />}
            {step === 2 && <ContactForm />}
            {step === 3 && <CompanyDataForm />}
            {step === 4 && <BudgetForm />}
        </div>
    )
}

export default Form