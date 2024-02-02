export const validateForm = async (trigger: any, step: number) => {
    let isValid = true
    if (step === 1) {
        isValid = await trigger(['firstName', 'lastName'])
    }
    if (step === 2) {
        isValid = await trigger(['email', 'phone'])
    }

    if (step === 3) {
        isValid = await trigger(['acct_name'])
    }
    return isValid
}