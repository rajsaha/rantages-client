<script lang="ts">
    import Post from "../../../components/post/post.component.svelte";
    import PostComponent from "$components/post/post.component.svelte";

    let today = new Date();
    let todayString = `${today.getUTCFullYear()}-${today.getUTCMonth()}-${today.getDay()} 00:00:00Z`;

    let posts: Post[] = [
        {
            id: 1,
            username: 'TheGoatLord',
            createdAt: todayString,
            caption: 'What the fuck did you just fucking say about me, you little bitch? I’ll have you know I graduated top of my class in the Navy Seals, and I’ve been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills.',
            imageUrl: '/post.png',
            upVotes: 100
        },
        {
            id: 2,
            username: 'TheGoatLord',
            createdAt: todayString,
            caption: 'What the fuck did you just fucking say about me, you little bitch? I’ll have you know I graduated top of my class in the Navy Seals, and I’ve been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills.',
            imageUrl: '/post.png',
            upVotes: 100
        },
        {
            id: 3,
            username: 'TheGoatLord',
            createdAt: todayString,
            caption: 'What the fuck did you just fucking say about me, you little bitch? I’ll have you know I graduated top of my class in the Navy Seals, and I’ve been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills.',
            imageUrl: '/post.png',
            upVotes: 100
        },
        {
            id: 4,
            username: 'TheGoatLord',
            createdAt: todayString,
            caption: 'What the fuck did you just fucking say about me, you little bitch? I’ll have you know I graduated top of my class in the Navy Seals, and I’ve been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills.',
            imageUrl: '/post.png',
            upVotes: 100
        }
    ]
</script>

{#each posts as post}
    <PostComponent post="{post}"/>
{/each}
