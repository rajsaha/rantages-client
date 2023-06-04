<script lang="ts">
    import CustomButtonComponent from '$components/custom-button/custom-button.component.svelte';
    import CustomInputComponent from '$components/custom-input/custom-input.component.svelte';
    import {BUTTON_COLORS} from "../../enums/button-colors.enum";
    import {goto} from '$app/navigation';
    import type {ValidatorFn} from "../../lib/validators";
    import {Validators} from "../../lib/validators";

    let email;

    let errors: { [inputName: string]: any } = {};

    let form: {
        [inputName: string]: {
            validators: ValidatorFn[];
        };
    } = {
        email: {
            validators: [Validators.required, Validators.validEmail],
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
            errors[field] = { ...errors[field], ...error };
        });
    }

    function onBlur(name: string, value: any){
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
        validateForm({email});
        if (isFormValid()) routeToPage('verify-account', false);
    }
</script>

<div class="grid gap-4 grid-rows-2 grid-rows-[auto_,1fr] h-full">
    <div class="relative self-center">
        <img src="sparkle.png" alt="sparkle" class="mb-4"/>
        <h1 class="text-4xl font-bold">Your home for freshly baked <a href="https://www.facebook.com/Rantages">memes</a>
        </h1>
        <img src="sparkle.png" alt="sparkle" class="ml-auto mr-[5rem]"/>
    </div>

    <div class="self-end">
        <div class="mb-6">
            <CustomButtonComponent buttonText="Login with Facebook" backgroundColor={BUTTON_COLORS.facebookBlue}
                                   textColor="#fff"/>
        </div>
        <div class="mb-4">
            <CustomButtonComponent buttonText="Login with Google" backgroundColor={BUTTON_COLORS.googleRed}
                                   textColor="#fff"/>
        </div>
        <p class="font-bold text-center p-2 text-2xl mb-4">or</p>
        <form on:submit|preventDefault={onSubmit}>
            <div class="mb-6 relative">
                <CustomInputComponent
                        placeholderText="Continue with Email"
                        bind:value={email}
                        hasError="{isControlValid('email') ? errors.email : ''}"
                        on:blur={() => onBlur('email', email)}
                />
                <div class="{ Object.keys(errors).length > 0 ? 'mt-2' : '' }">
                    {#if errors?.email?.required?.error}
                        <p class="error-message">Email is required</p>
                    {/if}
                    {#if errors?.email?.validEmail?.error}
                        <p class="error-message">Email format is incorrect</p>
                    {/if}
                </div>
            </div>
            <div class="mb-8">
                <CustomButtonComponent
                        buttonText="CONTINUE"
                        backgroundColor={BUTTON_COLORS.rantagesYellow}
                        buttonType="submit"
                />
            </div>
        </form>
        <p class="font-bold text-center p-4">By continuing you agree to your <a href="https://www.google.com">terms</a>
        </p>
    </div>
</div>

