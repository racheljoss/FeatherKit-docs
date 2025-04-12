<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import { ModeWatcher } from 'mode-watcher';
	import { Toaster } from '$lib/components/ui/sonner';
	export const prerender = true;
</script>

<Toaster />
<ModeWatcher />
<div class="h-dvh">
	{@render children()}
</div>
