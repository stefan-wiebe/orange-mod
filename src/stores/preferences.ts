import { writable } from 'svelte-local-storage-store';
import { get } from 'svelte/store';

export interface Preferences {
	employees: string[];
	dark: boolean;
	skips: number;
}

export const preferences = writable<Preferences>('preferences', {
	employees: [],
	dark: window.matchMedia('(prefers-color-scheme: dark)').matches,
	skips: 0
});

if (get(preferences).skips === undefined) {
	preferences.update((old) => ({ ...old, skips: 0 }));
}
