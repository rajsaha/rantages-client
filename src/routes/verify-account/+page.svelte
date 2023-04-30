<script lang="ts">
    import CustomButtonComponent from '$components/custom-button/custom-button.component.svelte';
    import CustomInputComponent from '$components/custom-input/custom-input.component.svelte';
    import {BUTTON_COLORS} from "../../enums/button-colors.enum";
    import {goto} from "$app/navigation";
    import type {ValidatorFn} from "../../lib/validators";
    import {Validators} from "../../lib/validators";

    let digit1;
    let digit2;
    let digit3;
    let digit4;


    let errors: { [inputName: string]: any } = {};

    let form: {
        [inputName: string]: {
            validators: ValidatorFn[];
        };
    } = {
        digit1: {
            validators: [Validators.required, Validators.maxLength(1), Validators.numbersOnly],
        },
        digit2: {
            validators: [Validators.required, Validators.maxLength(1), Validators.numbersOnly],
        },
        digit3: {
            validators: [Validators.required, Validators.maxLength(1), Validators.numbersOnly],
        },
        digit4: {
            validators: [Validators.required, Validators.maxLength(1), Validators.numbersOnly],
        },
    };

    function isFormValid(): boolean {
        return !Object.values(errors).some((field) =>
            Object.values(field).some((errorObject) => errorObject.error),
        );
    }

    function validateForm(data: { [inputName: string]: any }): void {
        Object.keys(data).forEach((field) => validateField(field, data[field]));
    }

    function validateField(field, value) {
        form[field]?.validators &&
        form[field].validators.forEach((fn) => {
            const error = fn(value);
            errors[field] = {...errors[field], ...error};
        });
    }

    function onBlur(name: string, value: any) {
        validateField(name, value)
    }

    function isControlValid(controlName: string): boolean {
        const validations = errors[controlName];
        let isValid = true;
        if (validations) {
            Object.keys(validations).some((item) => isValid = validations[item].error);
        }
        return isValid;
    }

    function routeToPage(route: string, replaceState: boolean): void {
        goto(`/${route}`, {replaceState})
    }

    function onSubmit() {
        validateForm({digit1, digit2, digit3, digit4});
        if (isFormValid()) routeToPage('pick-categories', false);
    }
</script>

<div class="grid grid-rows-2 grid-rows-[auto_,1fr] h-full">
    <div class="relative self-center">
        <img src="sparkle.png" alt="sparkle" class="mb-4"/>
        <h1 class="text-4xl font-bold mb-8">Please verify your <a>account</a>.</h1>
        <p class="mb-8 font-bold">A verification code has been sent to omuk@tomuk.com. Please enter the 4 digit code
            below:</p>
        <form on:submit|preventDefault={onSubmit}>
            <div class="grid grid-cols-4 gap-4 mb-6">
                <CustomInputComponent
                        inputType="number"
                        on:blur={() => onBlur('digit1', digit1)}
                        bind:value={digit1}
                        hasError="{isControlValid('digit1') ? errors.digit1 : ''}"
                />
                <CustomInputComponent
                        inputType="number"
                        on:blur={() => onBlur('digit2', digit2)}
                        bind:value={digit2}
                        hasError="{isControlValid('digit2') ? errors.digit2 : ''}"
                />
                <CustomInputComponent
                        inputType="number"
                        on:blur={() => onBlur('digit3', digit3)}
                        bind:value={digit3}
                        hasError="{isControlValid('digit3') ? errors.digit3 : ''}"
                />
                <CustomInputComponent
                        inputType="number"
                        on:blur={() => onBlur('digit4', digit4)}
                        bind:value={digit4}
                        hasError="{isControlValid('digit4') ? errors.digit4 : ''}"
                />
            </div>
            <div class="mb-4">
                <CustomButtonComponent
                        buttonText="CONTINUE"
                        backgroundColor={BUTTON_COLORS.rantagesYellow}
                        buttonType="submit"
                />
            </div>
        </form>
    </div>

    <div class="self-end">
        <p class="font-bold text-center mb-4">Did not get any code?</p>
        <CustomButtonComponent
                buttonText="RESEND CODE"
                backgroundColor={BUTTON_COLORS.googleRed}
                textColor="#fff"
        />
    </div>
</div>
