<script lang="ts">
    import CustomButtonComponent from '$components/custom-button/custom-button.component.svelte';
    import CustomInputComponent from '$components/custom-input/custom-input.component.svelte';
    import {BUTTON_COLORS} from "../../enums/button-colors.enum";
</script>

<div class="grid gap-4">
    <div class="login-header py-8 relative mb-8">
        <img src="sparkle.png" alt="sparkle" class="mb-4"/>
        <h1 class="text-4xl font-bold">Your home for freshly baked <a href="https://www.facebook.com/Rantages">memes</a></h1>
        <img src="sparkle.png" alt="sparkle" class="absolute bottom-2 right-16"/>
    </div>
    <CustomButtonComponent buttonText="Login with Facebook" backgroundColor={BUTTON_COLORS.facebookBlue} textColor="#fff"/>
    <CustomButtonComponent buttonText="Login with Google" backgroundColor={BUTTON_COLORS.googleRed} textColor="#fff"/>
    <p class="font-bold text-center p-2 text-2xl">or</p>
    <CustomInputComponent />
    <CustomButtonComponent buttonText="CONTINUE" backgroundColor={BUTTON_COLORS.rantagesYellow} />
    <p class="font-bold text-center p-4">By continuing you agree to your <a href="https://www.google.com">terms</a></p>
</div>
