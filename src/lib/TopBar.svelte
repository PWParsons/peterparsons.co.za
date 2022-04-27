<script>
  import { onMount } from 'svelte'
  import Icon from '$lib/Icon.svelte'
  import '../app.css'

  let mobileSidebarIsOpen = false
  let darkMode = true

  onMount(() => {
    darkMode = localStorage.darkMode === 'true'
  })

  function toggleDarkMode() {
    darkMode = !darkMode
    localStorage.darkMode = darkMode
    window.updateTheme()
  }
</script>

<div class="sticky top-0 z-10 flex h-14 bg-white dark:bg-black-pearl border-b border-slate-200 dark:border-mirage">
  <button
    on:click={() => (mobileSidebarIsOpen = true)}
    type="button"
    class="px-4 text-slate-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600 lg:hidden"
  >
    <span class="sr-only">Open sidebar</span>
    <svg
      class="h-5 w-5"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  </button>

  <div class="flex-1 px-4 flex justify-end">
    <div class="flex">
      <button
        type="button"
        class="p-1 rounded-full text-slate-400 dark:text-slate-500 hover:text-slate-500 dark:hover:text-slate-400 focus:outline-none focus:ring-0"
      >
        <span class="sr-only">Search</span>
        <Icon name="search" />
      </button>
    </div>
    <div class="ml-4 flex items-center">
      {#if darkMode}
        <button
          on:click={() => toggleDarkMode()}
          type="button"
          class="p-1 rounded-full text-slate-400 dark:text-lime-400 hover:text-slate-500 dark:hover:text-lime-300 focus:outline-none focus:ring-0"
        >
          <span class="sr-only">Enable light mode</span>
          <Icon name="sun" />
        </button>
      {:else}
        <button
          on:click={() => toggleDarkMode()}
          type="button"
          class="p-1 rounded-full text-blue-600 hover:text-blue-700 focus:outline-none focus:ring-0"
        >
          <span class="sr-only">Enable dark mode</span>
          <Icon name="moon" />
        </button>
      {/if}
    </div>
  </div>
</div>