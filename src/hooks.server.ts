import { env } from '$env/dynamic/private';
import type { Handle } from '@sveltejs/kit';
import type { ActionResult } from '@sveltejs/kit';

/**
 * If site is in maintenance mode, disallow non-GET requests.
 * Allow GET requests but return HTTP Code 503.
 * **/
export const handle: Handle = async ({ event, resolve }) => {
    if (env.APP_MODE !== 'maintenance') return resolve(event);

    if (event.request.method !== 'GET') {
        const error = { status: 503, statusText: 'Maintenance mode' };
        const actionResult: ActionResult = { type: 'error', error };
        return new Response(JSON.stringify(actionResult), {
            ...error,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    const response = await resolve(event);

    return new Response(response.body, {
        headers: response.headers,
        status: 503,
        statusText: 'Maintenance mode'
    });
};
