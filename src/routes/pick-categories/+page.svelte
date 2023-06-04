<script lang="ts">
    import CustomButtonComponent from '$components/custom-button/custom-button.component.svelte';
    import CategoryComponent from '$components/category/category.component.svelte';
    import {BUTTON_COLORS} from "../../enums/button-colors.enum";
    import {CATEGORIES} from "../../enums/categories.enum";
    import {CATEGORY_COLORS} from "../../enums/category-colors.enum";
    import {goto} from "$app/navigation";

    let selectedCategories: [string, string] = [];

    function addCategory(categoryId: string): void {
        const isCategoryPresent = selectedCategories.findIndex((category) => category === categoryId);
        const isAtMaxCategories = selectedCategories.length === 2;

        if (isCategoryPresent > -1) {
            selectedCategories.splice(isCategoryPresent, 1);
            return;
        }

        if (!isAtMaxCategories) selectedCategories.push(categoryId);
    }

    function updateSelectedCategories(categories): void {
        selectedCategories = categories;
    }

    function routeToPage(route: string, replaceState: boolean): void {
        if (selectedCategories.length === 2) goto(`/${route}`, { replaceState })
    }
</script>

<div class="grid grid-rows-2 grid-rows-[auto_,1fr] h-full">
    <div class="relative self-center">
        <img src="sparkle.png" alt="sparkle" class="mb-4"/>
        <h1 class="text-4xl font-bold mb-8">Please pick any two <a>categories.</a></h1>

        <div class="grid grid-cols-2 grid-rows-2 gap-8 mb-6 content-center">
            {#key selectedCategories}
                <CategoryComponent
                        categoryImage="{CATEGORIES.WITTY}"
                        categoryBackgroundColor="{CATEGORY_COLORS.WITTY_BLUE}"
                        categoryText="Witty"
                        categoryId="0"
                        selectedCategories="{selectedCategories}"
                        on:categorySelected="{(event) => addCategory(event.detail)}"
                        on:updatedSelectedCategories="{(event) => updateSelectedCategories(event.detail)}"
                />
                <CategoryComponent
                        categoryImage="{CATEGORIES.AESTHETIC}"
                        categoryBackgroundColor="{CATEGORY_COLORS.AESTHETIC_ORANGE}"
                        categoryText="Aesthetic"
                        categoryId="1"
                        selectedCategories="{selectedCategories}"
                        on:categorySelected="{(event) => addCategory(event.detail)}"
                        on:updatedSelectedCategories="{(event) => updateSelectedCategories(event.detail)}"
                />
                <CategoryComponent
                        categoryImage="{CATEGORIES.INSPIRING}"
                        categoryBackgroundColor="{CATEGORY_COLORS.INSPIRING_PURPLE}"
                        categoryText="Inspiring"
                        categoryId="2"
                        selectedCategories="{selectedCategories}"
                        on:categorySelected="{(event) => addCategory(event.detail)}"
                        on:updatedSelectedCategories="{(event) => updateSelectedCategories(event.detail)}"
                />
                <CategoryComponent
                        categoryImage="{CATEGORIES.RELATABLE}"
                        categoryBackgroundColor="{CATEGORY_COLORS.RELATABLE_GREEN}"
                        categoryText="Relatable"
                        categoryId="3"
                        selectedCategories="{selectedCategories}"
                        on:categorySelected="{(event) => addCategory(event.detail)}"
                        on:updatedSelectedCategories="{(event) => updateSelectedCategories(event.detail)}"
                />
            {/key}
        </div>
    </div>

    <div class="self-end">
        <CustomButtonComponent
                buttonText="CONTINUE"
                backgroundColor={BUTTON_COLORS.rantagesYellow}
                on:buttonClicked={() => routeToPage("all-set", false)}
        />
    </div>
</div>
