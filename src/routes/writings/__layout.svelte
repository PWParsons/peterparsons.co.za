<script>
  import ListContainer from '$lib/ListDetail/ListContainer.svelte'
  import TopBar from '$lib/TopBar.svelte'
</script>

<ListContainer />

<div class="w-full relative max-h-screen overflow-y-auto">
  <TopBar/>

  <div class="p-12 px-6">
    <slot />
  </div>
</div>
