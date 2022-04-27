<script>
  import { clickOutside } from '$lib/app'
  import Logo from '$lib/Logo.svelte'
  import Navigation from '$lib/Sidebar/Navigation.svelte'
  import '../app.css'

  let mobileSidebarIsOpen = false
</script>

<svelte:window
  on:keyup={(e) => (mobileSidebarIsOpen && e.keyCode === 27 ? (mobileSidebarIsOpen = false) : null)}
/>

<div>
  {#if mobileSidebarIsOpen}
    <div
      class="fixed inset-0 flex z-40 lg:hidden"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="fixed inset-0 bg-slate-600/75 dark:bg-mirage/75"
        aria-hidden="true"
      />
      <div
        use:clickOutside={() => (mobileSidebarIsOpen = false)}
        class="relative flex-1 flex flex-col max-w-xs w-full bg-white dark:bg-black-pearl"
      >
        <div class="relative">
          <div
            class="sticky top-0 z-10 flex-shrink-0 flex items-center py-2 px-1.5 bg-white dark:bg-black-pearl"
          >
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
    <div
      class="flex flex-col flex-grow border-r border-slate-200 dark:border-mirage bg-white dark:bg-black-pearl overflow-y-auto"
    >
      <div
        class="sticky top-0 z-10 flex items-center flex-shrink-0 p-4 bg-white dark:bg-black-pearl opacity-90"
      >
        <Logo />
      </div>
      <div class="flex-grow flex flex-col">
        <Navigation />
      </div>
    </div>
  </div>
  <!-- Desktop Sidebar End -->
  <div class="lg:pl-64 flex flex-col flex-1">
    <!-- Content Start -->
    <div class="flex overflow-hidden">
      <slot />
    </div>
    <!-- Content End -->
  </div>
</div>
