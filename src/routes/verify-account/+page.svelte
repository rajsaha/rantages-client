<script lang="ts">
    import CustomButtonComponent from '$components/custom-button/custom-button.component.svelte';
    import CustomInputComponent from '$components/custom-input/custom-input.component.svelte';
    import {BUTTON_COLORS} from "../../enums/button-colors.enum";
</script>

<div class="grid grid-rows-2 grid-rows-[auto_,1fr] h-full">
    <div class="relative self-center">
        <img src="sparkle.png" alt="sparkle" class="mb-4"/>
        <h1 class="text-4xl font-bold mb-8">Please verify your <a>account</a>.</h1>
        <p class="mb-8 font-bold">A verification code has been sent to omuk@tomuk.com. Please enter the 4 digit code below:</p>

        <div class="grid grid-cols-4 gap-4 mb-6">
            <CustomInputComponent inputType="number" />
            <CustomInputComponent inputType="number" />
            <CustomInputComponent inputType="number" />
            <CustomInputComponent inputType="number" />
        </div>
        <div class="mb-4">
            <CustomButtonComponent buttonText="CONTINUE" backgroundColor={BUTTON_COLORS.rantagesYellow} />
        </div>
    </div>

    <div class="self-end">
        <p class="font-bold text-center mb-4">Did not get any code?</p>
        <CustomButtonComponent buttonText="RESEND CODE" backgroundColor={BUTTON_COLORS.googleRed} textColor="#fff" />
    </div>
</div>
