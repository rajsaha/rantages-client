<script lang="ts">
    import {getEventsAction} from "../../lib/utils";
    import { current_component } from "svelte/internal";
    export let placeholderText = '';
    export let inputName = '';
    export let inputType = 'text';
    export let value = '';
    export let hasError = false;
    const events = getEventsAction(current_component);
    import { onMount } from "svelte";

    let inputElement;
    onMount(() => {
        inputElement.type = inputType;
    });
</script>

<style>
    input {
        @apply border-2 p-4 w-full rounded-lg border-solid text-center;
    }

    input:not(:focus) {
        border: 2px solid;
    }

    input:focus {
        outline: none;
        border: 2px solid;
    }

    input::placeholder {
        color: #DEDEDE;
        text-align: center;
        font-weight: bold;
    }

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input {
        -moz-appearance: textfield;
    }
</style>

<input
        class="shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] text-[20px]"
        style="border-color: { hasError ? '#EE4326' : '#000' }"
        placeholder="{placeholderText}"
        name="{inputName}"
        bind:this={inputElement}
        bind:value={value}
        use:events
/>


