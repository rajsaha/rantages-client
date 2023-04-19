import type { LayoutServerLoad } from './$types';
import { env } from '$env/dynamic/private';

export const load: LayoutServerLoad = async ({ route }) => {
    switch (env.APP_MODE) {
        case 'staging':
        case 'production':
        case 'development':
            return {
                maintenance: false,
                isInFeed: route.id.includes('feed')
            };
        case 'maintenance':
            return { maintenance: true };
        default:
            return { maintenance: true };
    }
};
