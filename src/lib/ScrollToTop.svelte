<script>
  import { fade } from 'svelte/transition'
  import Icon from '$lib/Icon.svelte'

  export let show = false

  function scrollToTop() {
    console.log('scroll to top...')
  }
</script>

{#if show}
  <div class="z-10 fixed right-0 rounded-full bottom-0 mr-5 mb-5 sm:mr-6 sm:mb-6 shadow-2xl">
    <button
      transition:fade={{ duration: 200 }}
      on:click={() => scrollToTop()}
      type="button"
      class="flex items-center justify-center bg-blue-600 dark:bg-lime-400 rounded-md transform transition duration-300 hover:scale-105 p-2"
    >
      <span class="sr-only">Scroll to top</span>
      <span class="text-slate-100 dark:text-mirage">
        <Icon name="chevron-up" />
      </span>
    </button>
  </div>
{/if}
