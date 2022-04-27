<script>
  import ListContainer from '$lib/ListDetail/ListContainer.svelte'
  import TopBar from '$lib/TopBar.svelte'
</script>

<ListContainer />

<div class="w-full">
  <TopBar/>

  <slot />
</div>
