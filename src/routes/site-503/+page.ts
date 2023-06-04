import { beforeNavigate } from '$app/navigation';

beforeNavigate(async ({ cancel }) => {
    cancel();
});
