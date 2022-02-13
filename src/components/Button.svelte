<script lang="ts">
	export let type = 'button';
</script>

<button
	{type}
	on:click
	class="
    flex gap-2
    py-3 px-4 rounded-lg 
    bg-slate-800 text-slate-50 shadow shadow-slate-800/30
    hover:bg-slate-900 hover:shadow-slate-900/30
    dark:bg-slate-50 dark:text-slate-800 dark:shadow-slate-50/30
    dark:hover:bg-slate-200 dark:hover:shadow-slate-200/30
    focus-visible:outline-none
    focus-visible:ring focus-visible:ring-slate-800 focus-visible:ring-opacity-50
    transition ease-out"><slot /></button
>
