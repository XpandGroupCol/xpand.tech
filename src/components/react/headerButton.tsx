import ButtonForm from "./buttonForm"

const HeaderButton = () => {
    return (
        <div className="w-[220px] hidden md:flex md: justify-end 2xl:pr-8">
            <ButtonForm
            client:load
            label="Da el primer paso ahora"
            variant="secondary">
            {({ onOpenModal }: any) => (
                <button className="font-ibm text-lg text-xp-white" onClick={onOpenModal}>
                    Contactar
                </button>
            )}
        </ButtonForm>
        </div>
    )
}

export default HeaderButton
