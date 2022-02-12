<script lang="ts">
	let _for: string = '';

	export { _for as for };
</script>

<label for={_for} class="block mb-2"><slot /></label>
