<script>
  import { MetaTags } from 'svelte-meta-tags'
  import ScrollToTop from '$lib/ScrollToTop.svelte'
  import TopBar from '$lib/TopBar.svelte'

  let showScrollToTopButton = false
</script>

<MetaTags
  title="Peter Parsons"
  description="Software designer and developer living in Cape Winelands South Africa."
/>

<div class="w-full">
  <TopBar/>

  <main
  on:scroll={(e) => showScrollToTopButton = e.target.scrollTop > 140}
  class="flex-1 relative z-0 h-screen overflow-y-auto focus:outline-none xl:order-last px-6 lg:px-8 py-12"
>

  <ScrollToTop show={showScrollToTopButton} />
</main>
</div>
