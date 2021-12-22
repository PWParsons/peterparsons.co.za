<script>
  import { onMount } from 'svelte'
  import { fade, fly } from 'svelte/transition'
  import { clickOutside } from '$lib/app'
  import Icon from '$lib/Icon.svelte'
  import Logo from '$lib/Logo.svelte'
  import Navigation from '$lib/Sidebar/Navigation.svelte'
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

<svelte:window
  on:keyup={(e) => (mobileSidebarIsOpen && e.keyCode === 27 ? (mobileSidebarIsOpen = false) : null)}
/>

<div>
  {#if mobileSidebarIsOpen}
    <div
      transition:fade={{ x: -200, duration: 200 }}
      class="fixed inset-0 flex z-40 lg:hidden"
      role="dialog"
      aria-modal="true"
    >
      <div
        transition:fade={{ x: -200, duration: 200 }}
        class="fixed inset-0 bg-slate-600/75 dark:bg-mirage/75"
        aria-hidden="true"
      />
      <div
        transition:fly={{ x: -200, duration: 300 }}
        use:clickOutside={() => (mobileSidebarIsOpen = false)}
        class="relative flex-1 flex flex-col max-w-xs w-full bg-white dark:bg-black-pearl"
      >
        <div class="relative">
          <div class="sticky top-0 z-10 flex-shrink-0 flex items-center py-2 px-1.5 bg-white dark:bg-black-pearl">
            <button
              on:click={() => (mobileSidebarIsOpen = false)}
              type="button"
              class="mr-2 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span class="sr-only">Close sidebar</span>
              <svg
                class="text-slate-500 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <Logo />
          </div>
        </div>
        <div class="flex-1 h-0 overflow-y-auto">
          <Navigation />
        </div>
      </div>
      <div class="flex-shrink-0 w-14" aria-hidden="true" />
    </div>
  {/if}

  <div class="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
    <!-- Desktop Sidebar Start -->
    <div class="flex flex-col flex-grow border-r border-slate-200 dark:border-mirage bg-white dark:bg-black-pearl overflow-y-auto">
      <div class="sticky top-0 z-10 flex items-center flex-shrink-0 p-4 bg-white dark:bg-black-pearl opacity-90">
        <Logo />
      </div>
      <div class="mt-5 flex-grow flex flex-col">
        <Navigation />
      </div>
    </div>
  </div>
  <!-- Desktop Sidebar End -->
  <div class="lg:pl-64 flex flex-col flex-1">
    <!-- Top Bar Start -->
    <div class="sticky top-0 z-10 flex-shrink-0 flex h-14 bg-white dark:bg-black-pearl border-b border-slate-200 dark:border-mirage">
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
              in:fly={{ x: 30, duration: 200 }}
              type="button"
              class="p-1 rounded-full text-slate-400 dark:text-lime-400 hover:text-slate-500 dark:hover:text-lime-300 focus:outline-none focus:ring-0"
            >
              <span class="sr-only">Enable light mode</span>
              <Icon name="sun" />
            </button>
          {:else}
            <button
              on:click={() => toggleDarkMode()}
              in:fly={{ x: 30, duration: 200 }}
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
    <!-- Top Bar End -->

    <!-- Content Start -->
    <div transition:fade={{ duration: 300 }} class="flex overflow-hidden">
      <slot />
    </div>
    <!-- Content End -->
  </div>
</div>
