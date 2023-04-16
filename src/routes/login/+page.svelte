<script lang="ts">
    import CustomButtonComponent from '$components/custom-button/custom-button.component.svelte';
    import CustomInputComponent from '$components/custom-input/custom-input.component.svelte';
    import {BUTTON_COLORS} from "../../enums/button-colors.enum";
    import { goto } from '$app/navigation';

    function routeToPage(route: string, replaceState: boolean): void {
        goto(`/${route}`, { replaceState })
    }
</script>

<div class="grid gap-4 grid-rows-2 grid-rows-[auto_,1fr] h-full">
    <div class="relative self-center">
        <img src="sparkle.png" alt="sparkle" class="mb-4"/>
        <h1 class="text-4xl font-bold">Your home for freshly baked <a href="https://www.facebook.com/Rantages">memes</a></h1>
        <img src="sparkle.png" alt="sparkle" class="ml-auto mr-[5rem]"/>
    </div>

    <div class="self-end">
        <div class="mb-6">
            <CustomButtonComponent buttonText="Login with Facebook" backgroundColor={BUTTON_COLORS.facebookBlue} textColor="#fff"/>
        </div>
        <div class="mb-4">
            <CustomButtonComponent buttonText="Login with Google" backgroundColor={BUTTON_COLORS.googleRed} textColor="#fff"/>
        </div>
        <p class="font-bold text-center p-2 text-2xl mb-4">or</p>
        <div class="mb-6">
            <CustomInputComponent placeholderText="Continue with Email"/>
        </div>
        <div class="mb-8">
            <CustomButtonComponent
                    buttonText="CONTINUE"
                    backgroundColor={BUTTON_COLORS.rantagesYellow}
                    on:buttonClicked={() => routeToPage("verify-account", false)}
            />
        </div>
        <p class="font-bold text-center p-4">By continuing you agree to your <a href="https://www.google.com">terms</a></p>
    </div>
</div>

