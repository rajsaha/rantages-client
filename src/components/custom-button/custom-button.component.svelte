<script lang="ts">
    import type { BUTTON_COLORS } from "../../enums/button-colors.enum";
    import { createEventDispatcher } from 'svelte';

    export let buttonText: string;
    export let buttonType = 'button';
    export let backgroundColor: BUTTON_COLORS = BUTTON_COLORS.default;
    export let textColor = '#000';

    const dispatch = createEventDispatcher();
</script>

<style>
    button {
        @apply border-2 p-4 w-full rounded-lg border-solid;
    }

    button:active {
        border-color: transparent;
        box-shadow: none;
        transform: scale(0.98);
    }
</style>


<button
        class="rounded-lg border-solid border-[#000] shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] font-bold {backgroundColor} text-[20px] transition-shadow ease-in-out duration-100"
        style="color: {textColor}"
        type="{buttonType}"
        on:click="{() => dispatch('buttonClicked')}"
        >{buttonText}
</button>
