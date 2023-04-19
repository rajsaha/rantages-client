<script lang="ts">
    import Post from "../../../components/post/post.component.svelte";
    import PostComponent from "$components/post/post.component.svelte";

    let today = new Date();
    let todayString = `${today.getUTCFullYear()}-${today.getUTCMonth()}-${today.getDay()} 00:00:00Z`;

    let posts: Post[] = [
        {
            id: 1,
            username: 'TheCowLord',
            createdAt: todayString,
            caption: 'Moo moo',
            imageUrl: '/post.png',
            upVotes: 100
        },
    ]
</script>

{#each posts as post}
    <PostComponent post="{post}"/>
{/each}
