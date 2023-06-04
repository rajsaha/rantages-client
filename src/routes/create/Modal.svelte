<script>
    import {BUTTON_COLORS} from "../../enums/button-colors.enum";
    import CustomButtonComponent from '$components/custom-button/custom-button.component.svelte';
    import { getContext } from 'svelte';

    export let showModal;

    let dialog; // HTMLDialogElement

    $: if (dialog && showModal) dialog.showModal();

    const { onSubmit } = getContext('modalSubmit');

    function submit(state) {
        onSubmit(state);
        dialog.close();
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog bind:this={dialog}>
    <div on:click|stopPropagation>
        <slot name="header" />
        <hr />
        <slot />
        <hr />
        <!-- svelte-ignore a11y-autofocus -->
        <div class="grid grid-cols-2 gap-4">
            <form on:submit|preventDefault={() => submit(false)}>
                <CustomButtonComponent
                        buttonText="Cancel"
                        backgroundColor={BUTTON_COLORS.default}
                        buttonType="submit"
                />
            </form>
            <form on:submit|preventDefault={() => submit(true)}>
                <CustomButtonComponent
                        buttonText="OK"
                        backgroundColor={BUTTON_COLORS.rantagesYellow}
                        buttonType="submit"
                />
            </form>
        </div>
    </div>
</dialog>

<style>
    dialog {
        max-width: 32em;
        border-radius: 0.2em;
        border: none;
        padding: 0;
    }
    dialog::backdrop {
        background: rgba(0, 0, 0, 0.3);
    }
    dialog > div {
        padding: 1em;
    }
    dialog[open] {
        animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    @keyframes zoom {
        from {
            transform: scale(0.95);
        }
        to {
            transform: scale(1);
        }
    }
    dialog[open]::backdrop {
        animation: fade 0.2s ease-out;
    }
    @keyframes fade {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    button {
        display: block;
    }
</style>
