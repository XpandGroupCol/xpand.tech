const ThankYou = ({onClick}: any) => {
    return (
        <div className="flex-1 flex flex-col items-center text-xp-base md:mt-12 text-center text-balance  md:min-h-[220px]">
            <h4 className="font-bold mb-4 text-xl md:text-2xl"> Tu registro ha sido exitoso. </h4>
            <p className="mb-12 text-xl">
                Pronto nos pondremos en contacto contigo
                a través de correo electrónico o WhatsApp
                para discutir cómo podemos trabajar juntos
                y llevar tu negocio al siguiente nivel.
            </p>
            <button className="border-2 disabled:!bg-gray-300 disabled:border-gray-300 hover:opacity-95 transition-all duration-300  bg-primary disabled:text-xp-base text-white px-6 py-2 inline-flex justify-center items-center font-hanken italic rounded-full w-full h-[46px] md:h-[56px] min-w-[150px] md:max-w-[200px]" type= 'button' onClick={onClick}>
                Finalizar
            </button>
        </div>
    )
}

export default ThankYou