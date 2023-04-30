<div class="post mb-8">
    <div class="header grid gap-1 mb-4">
        <span class="font-bold self-center">{post.username}</span>
        <span class="self-center">&#x2022;</span>
        <span class="text-[#CDCDCD] text-xs self-center">{dayjs().to(dayjs(post.createdAt))}</span>
        <img class="self-center justify-self-end" src="/options.png" alt="options icon" />
    </div>
    <p class="mb-4">{post.caption}</p>
    <img src="{post.imageUrl}"  alt="post" class="ml-auto mr-auto"/>
</div>

<script lang="ts">
    import dayjs from 'dayjs';
    import relativeTime from 'dayjs/plugin/relativeTime';
    dayjs.extend(relativeTime);
    export interface Post {
        id: number;
        username: string;
        createdAt: string;
        caption: string;
        imageUrl: string;
        upVotes: number;
    }


    
    export let post: Post;
</script>

<style>
    .post .header {
        grid-template-columns: min-content 10px auto auto;
    }
</style>
