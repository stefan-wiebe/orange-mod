import { writable } from 'svelte-local-storage-store';

export interface Preferences {
	employees: string[];
}

export const preferences = writable<Preferences>('preferences', {
	employees: []
});
