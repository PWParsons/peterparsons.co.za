<script>
  import { fade } from 'svelte/transition'
  import ListContainer from "$lib/ListDetail/ListContainer.svelte";
</script>

<ListContainer>

</ListContainer>

<div transition:fade={{ x: -200, duration: 200 }}>
  <slot />
</div>
