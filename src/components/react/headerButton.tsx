import ButtonForm from "./buttonForm"

const HeaderButton = () => {
    return (
        <ButtonForm
            client:load
            label="Da el primer paso ahora"
            variant="secondary">
            {({ onOpenModal }: any) => (
                <button className="font-ibm text-lg text-xp-white hidden md:inline" onClick={onOpenModal}>
                    Contactar
                </button>
            )}
        </ButtonForm>
    )
}

export default HeaderButton
