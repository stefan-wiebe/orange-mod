import { writable } from 'svelte-local-storage-store';

export interface Preferences {
	employees: string[];
	dark: boolean;
}

export const preferences = writable<Preferences>('preferences', {
	employees: [],
	dark: window.matchMedia('(prefers-color-scheme: dark)').matches
});
