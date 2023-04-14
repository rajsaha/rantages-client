<script lang="ts">
    import CustomButtonComponent from '$components/custom-button/custom-button.component.svelte';
    import CategoryComponent from '$components/category/category.component.svelte';
    import {BUTTON_COLORS} from "../../enums/button-colors.enum";
    import {CATEGORIES} from "../../enums/categories.enum";
    import {CATEGORY_COLORS} from "../../enums/category-colors.enum";
</script>

<div class="grid grid-rows-2 grid-rows-[auto_,1fr] h-full">
    <div class="relative self-center">
        <img src="sparkle.png" alt="sparkle" class="mb-4"/>
        <h1 class="text-4xl font-bold mb-8">Please pick any two <a>categories.</a></h1>

        <div class="grid grid-cols-2 grid-rows-2 gap-8 mb-6 content-center">
            <CategoryComponent
                    categoryImage="{CATEGORIES.WITTY}"
                    categoryBackgroundColor="{CATEGORY_COLORS.WITTY_BLUE}"
                    categoryText="Witty"
            />
            <CategoryComponent
                    categoryImage="{CATEGORIES.AESTHETIC}"
                    categoryBackgroundColor="{CATEGORY_COLORS.AESTHETIC_ORANGE}"
                    categoryText="Aesthetic"
            />
            <CategoryComponent
                    categoryImage="{CATEGORIES.INSPIRING}"
                    categoryBackgroundColor="{CATEGORY_COLORS.INSPIRING_PURPLE}"
                    categoryText="Inspiring"
            />
            <CategoryComponent
                    categoryImage="{CATEGORIES.RELATABLE}"
                    categoryBackgroundColor="{CATEGORY_COLORS.RELATABLE_GREEN}"
                    categoryText="Relatable"
            />
        </div>
    </div>

    <div class="self-end">
        <CustomButtonComponent buttonText="CONTINUE" backgroundColor={BUTTON_COLORS.rantagesYellow} />
    </div>
</div>
