<script lang="ts">
    import {CATEGORIES} from "../../enums/categories.enum";
    import {CATEGORY_COLORS} from "../../enums/category-colors.enum";
    import {createEventDispatcher} from "svelte";

    export let categoryBackgroundColor = CATEGORY_COLORS.WITTY_BLUE;
    export let categoryImage = CATEGORIES.WITTY;
    export let categoryText = 'Category';
    export let categoryId = 0;
    export let selectedCategories: string[] = [];
    let categorySelected = false;

    const dispatch = createEventDispatcher();

    function selectCategory(categoryId: string): void {
        dispatch('categorySelected', categoryId);
        const isCategoryPresent = selectedCategories.findIndex((category) => category === categoryId);
        categorySelected = isCategoryPresent > -1;
    }
</script>

<div class="relative category rounded-lg border-solid border-[#000] shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] font-bold text-[20px] transition-shadow ease-in-out duration-100 cursor-pointer" on:click={() => selectCategory(categoryId)}>
    <div class="image-container">
        <img src="{categoryImage}" class="block w-full object-fill" alt="categoryImage"/>
    </div>
    {#if categorySelected}
        <img src="selectedCategory.png" class="absolute -right-8 -top-8" alt="selectedIcon"/>
    {/if}
    <p class="p-4 text-center {categoryBackgroundColor} rounded-b">{categoryText}</p>
</div>

<style>
    .image-container {
        clip-path: inset(0 0 0 0 round 0.5rem 0.5rem 0 0);
    }

    .category:active {
        border-color: transparent;
        box-shadow: none;
        transform: scale(0.98);
    }
</style>
