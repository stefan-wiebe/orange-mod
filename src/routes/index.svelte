<script lang="ts">
	import { preferences } from '../stores/preferences';
	import dayjs from '../dayjs';
	import Immutable from 'immutable';
	import { get } from 'svelte/store';
	import TextArea, { TextAreaEvents } from '../components/TextArea.svelte';
	import FormLayout from '../components/FormLayout.svelte';
	import Button from '../components/Button.svelte';

	const startingDate = dayjs('2022-01-01');

	$: unsortedEmployees = Immutable.List($preferences.employees);

	$: employees = unsortedEmployees.sort((a, b) => {
		return a.localeCompare(b) * -1;
	});

	$: getEmployeeForDate = (d: dayjs.Dayjs) => {
		return employees.get(d.diff(startingDate, 'weeks') % employees.size);
	};

	$: moderator = getEmployeeForDate(dayjs()) ?? 'Niemand?';

	function updateEmployees(event: CustomEvent<TextAreaEvents['input']>) {
		preferences.update((old) => ({ ...old, employees: event.detail }));
	}

	function handleSort(event: MouseEvent) {
		preferences.update((old) => ({ ...old, employees: employees.toArray() }));
	}
</script>

<div class="py-8">
	Diese Woche moderiert
	<h1 class="text-4xl mb-8">{moderator}</h1>

	<FormLayout>
		<TextArea label="Moderatoren" value={unsortedEmployees.toArray()} on:input={updateEmployees} />
		<div>
			<Button on:click={handleSort}>Sortieren</Button>
		</div>
	</FormLayout>
</div>
