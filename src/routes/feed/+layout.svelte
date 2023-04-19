<div class="grid grid-rows-[min-content_,1fr_min-content] h-full bg-rantages-teal">
    <div class="feed-filters px-6 pt-10 pb-4 font-bold overflow-auto whitespace-nowrap inline-grid grid-flow-row-dense gap-x-4 justify-items-center">
        <a href="/feed/new" class:active={$page.url.pathname==='/feed/new'}>New</a>
        <a href="/feed/trending" class:active={$page.url.pathname==='/feed/trending'}>Trending</a>
        <a href="/feed/top-rated" class:active={$page.url.pathname==='/feed/top-rated'}>Top Rated</a>
        <a href="/feed/local" class:active={$page.url.pathname==='/feed/local'}>Local</a>
    </div>
    <div class="feed p-6 bg-[#fff] overflow-y-auto">
        <slot></slot>
    </div>
    <div class="bottom-navigation p-4 inline-grid grid-cols-5 gap-x-4">
        <img src="/feed_profile.png"  alt="profile icon"/>
        <img src="/feed_apps.png"  alt="profile icon"/>
        <img src="/feed_home.png"  alt="profile icon"/>
        <img src="/feed_search.png"  alt="profile icon"/>
        <img src="/feed_settings.png"  alt="profile icon"/>
    </div>
</div>

<style>
    a {
        box-shadow: none;
    }

    .active {
        box-shadow: inset 0 -0.5em 0 0 #F7FF1D;
        transition: box-shadow 0.1s ease-in-out;
    }

    a:hover {
        box-shadow: inset 0 -0.7em 0 0 #F7FF1D;
    }

    .feed-filters {
        grid-auto-flow: column;
    }

    .feed-filters a {
        @apply mr-4;
    }
</style>

<script lang="ts">
    import { page } from '$app/stores';
</script>
