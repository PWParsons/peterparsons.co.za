<script>
  import { fade } from 'svelte/transition'
  import ListContainer from '$lib/ListDetail/ListContainer.svelte'
</script>

<ListContainer />

<div transition:fade={{ duration: 200 }}>
  <slot />
</div>
