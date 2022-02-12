<script lang="ts">
	export let type = 'button';
</script>

<button
	{type}
	on:click
	class="
    py-4 px-7 rounded-md 
    bg-slate-800 text-slate-50 shadow shadow-slate-800/30
    hover:bg-slate-900 hover:shadow-slate-900/30
    transition ease-out"><slot /></button
>
