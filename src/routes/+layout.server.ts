import type { LayoutServerLoad } from './$types';
import { env } from '$env/dynamic/private';

export const load: LayoutServerLoad = async () => {
    switch (env.APP_MODE) {
        case 'staging':
        case 'production':
        case 'development':
            return { maintenance: false };
        case 'maintenance':
            return { maintenance: true };
        default:
            throw new Error('Invalid app mode!');
    }
};
