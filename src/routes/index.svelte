<script lang="ts">
	import { preferences } from '../stores/preferences';
	import dayjs from '../dayjs';
	import Immutable from 'immutable';
	import { get } from 'svelte/store';
	import TextArea, { TextAreaEvents } from '../components/TextArea.svelte';

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

<h1>
	<div>
		<h1>{moderator}</h1>
	</div>

	<TextArea value={unsortedEmployees.toArray()} on:input={updateEmployees} />
	<button type="button" on:click={handleSort}>Sortieren</button>
</h1>
