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

function maxLength(length: number) {
    return function (value: string): ValidatorResult {
        if (value == null || value.length > length) {
            return {
                maxLength: {
                    error: true,
                    value: length,
                    message: `Field maximum length is ${length}`,
                },
            };
        }
        return { maxLength: { error: false } };
    };
}

function numbersOnly(value: string) {
    const numbersOnlyRegex = /^[0-9]*$/;
    const isNumbersOnly = numbersOnlyRegex.test(value);
    if (!isNumbersOnly) {
        return {
            numbersOnly: {
                error: true,
                value,
                message: `This field accepts numbers only`,
            },
        };
    }
    return { numbersOnly: { error: false } };
}

export const Validators = {
    validEmail,
    required,
    maxLength,
    numbersOnly
};
