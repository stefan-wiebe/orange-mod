<script lang="ts">
	import { onMount } from 'svelte';
	import { MoonIcon, SunIcon } from 'svelte-feather-icons';

	import '../app.css';
	import { preferences } from '../stores/preferences';

	onMount(() => {
		preferences.subscribe(({ dark }) => {
			if (dark) {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
		});
	});
</script>

<div class="container mx-auto">
	<div
		on:click={() =>
			preferences.update((preferences) => ({ ...preferences, dark: !preferences.dark }))}
	>
		{#if $preferences?.dark}
			<MoonIcon size="24" class="text-white" />
		{:else}
			<SunIcon size="24" class="text-zinc-900" />
		{/if}
	</div>
	<slot />
</div>

<svelte:head>
	<script>
		{
			const preferences = JSON.parse(localStorage.getItem('preferences')) ?? {};

			if (preferences.dark) {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
		}
	</script>
</svelte:head>

<style global lang="postcss">
	body {
		@apply bg-zinc-50 text-zinc-900;
		@apply dark:bg-zinc-900 dark:text-zinc-50;
	}
</style>
