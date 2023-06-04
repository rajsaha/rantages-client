<script lang="ts">
    import CustomButtonComponent from '$components/custom-button/custom-button.component.svelte';
    import {BUTTON_COLORS} from "../../enums/button-colors.enum";
    import {goto} from "$app/navigation";

    function routeToPage(route: string, replaceState: boolean): void {
        goto(`/${route}`, { replaceState })
    }
</script>

<div class="grid grid-rows-2 grid-rows-[1fr_,auto] h-full">
    <div class="place-self-center">
        <img src="sparkle.png" alt="sparkle" class="mb-4"/>
        <h1 class="text-4xl font-bold mb-8">You are all <a>set</a></h1>
        <img src="sparkle.png" alt="sparkle" class="mb-4 float-right"/>
    </div>

    <div class="self-end">
        <CustomButtonComponent
                buttonText="CONTINUE"
                backgroundColor={BUTTON_COLORS.rantagesYellow}
                on:buttonClicked={() => routeToPage("feed/new", false)}
        />
    </div>
</div>
