<script lang="ts" context="module">
	export interface TextAreaEvents {
		input: string[];
	}
</script>

<script lang="ts">
	import type { WithTarget } from 'src/types/WithTarget';
	import { nanoid } from 'nanoid';

	import { createEventDispatcher } from 'svelte';
	import Label from './Label.svelte';

	export let value: string[] = [];
	export let label: string = '';

	const id = nanoid();

	const dispatch = createEventDispatcher<TextAreaEvents>();

	function handleInput(event: WithTarget<InputEvent, HTMLTextAreaElement>) {
		dispatch('input', event.currentTarget.value.split(/\r?\n/));
	}
</script>

<div>
	<Label for={id}>{label}</Label>
	<textarea
		{id}
		on:input={handleInput}
		class="
	h-48 rounded-lg
	bg-zinc-100 text-zinc-900 border-none
	dark:bg-zinc-800 dark:text-zinc-50 
	shadow-inner shadow-zinc-400/30 dark:shadow-slate-900/50
	">{value.join('\n')}</textarea
	>
</div>
