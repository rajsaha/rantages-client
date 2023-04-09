import { env } from '$env/dynamic/private';
import type { RequestEvent } from '@sveltejs/kit';
import type { ActionResult } from '@sveltejs/kit';
import type { MaybePromise } from "$app/forms";
import type { ResolveOptions } from "vite";

/**
 * If site is in maintenance mode, disallow non-GET requests.
 * Allow GET requests but return HTTP Code 503.
 * **/

interface HandleEvent {
    event:  RequestEvent<Partial<Record<string, string>>, string | null>,
    resolve: (event: RequestEvent, opts?: ResolveOptions) => MaybePromise<Response>,
}

export async function handle({ event, resolve }: HandleEvent): Promise<Response> {
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
}

