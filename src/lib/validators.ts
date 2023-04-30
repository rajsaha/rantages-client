export interface ValidatorResult {
    [validatorName: string]: {[key:string]:any} & {
        error: boolean;
        message?: string;
    };
}

export type ValidatorFn = (value: any) => ValidatorResult;

function required(value: string): ValidatorResult {
    if (value === '' || value == null) {
        return { required: { error: true, message: 'Field is required' } };
    }
    return { required: { error: false } };
}

function validEmail(email: string) {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const isEmailValid = emailRegex.test(email);
    if (!isEmailValid) {
        return {
            validEmail: {
                error: true,
                value: email,
                message: `Email format invalid`,
            },
        };
    }
    return { validEmail: { error: false } };
}

export const Validators = {
    validEmail,
    required
};
