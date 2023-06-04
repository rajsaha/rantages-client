<script lang="ts">
    import "../app.css";
    import type { LayoutData } from './$types';
    import Site503 from './site-503/+page.svelte'

    export let data: LayoutData;
</script>

<style>
    div.maintenance-container {
        max-width: 100vw;
        height: 100vh;
        display: grid;
        align-items: center;
        justify-items: center;
        margin: 0;
        background: repeat left -17px top -22px/55px 55px, repeating-linear-gradient(
                to right, transparent,
                transparent 95px,
                #f3d773 100px,
                #f3d773 100px
        ),
        repeating-linear-gradient(
                to bottom, transparent,
                transparent 95px,
                #f3d773 100px,
                #f3d773 100px
        ),
        linear-gradient(0deg, #ffc700, #ffc700);
        overflow-x: hidden;
        cursor: url('arrow.png'), auto;
        position: relative;
        box-sizing: border-box;
    }

    div.container {
        max-width: 100vw;
        height: 100vh;
        overflow-x: hidden;
        position: relative;
        box-sizing: border-box;

    }
</style>

{#if data.maintenance}
    <div class="maintenance-container">
        <Site503 />
    </div>
{:else}
    <div class="container bg-rantages-teal {data.isInFeed ? 'p-0' : 'p-8'}">
        <slot />
    </div>
{/if}
