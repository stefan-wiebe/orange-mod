<script lang="ts" context="module">
	export interface TextAreaEvents {
		input: string[];
	}
</script>

<script lang="ts">
	import type { WithTarget } from 'src/types/WithTarget';

	import { createEventDispatcher } from 'svelte';

	export let value: string[] = [];

	const dispatch = createEventDispatcher<TextAreaEvents>();

	function handleInput(event: WithTarget<InputEvent, HTMLTextAreaElement>) {
		dispatch('input', event.currentTarget.value.split(/\r?\n/));
	}
</script>

<textarea on:input={handleInput} style="width: 400px; height: 200px;">{value.join('\n')}</textarea>
