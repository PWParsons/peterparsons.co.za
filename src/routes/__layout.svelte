<script>
    import { clickOutside } from "$lib/app";
    import Navigation from "$lib/Navigation.svelte";
    import '../app.css';

    let mobileSidebarIsOpen = false;
</script>

<svelte:window on:keyup={(e) => mobileSidebarIsOpen && e.keyCode !== 27 ? mobileSidebarIsOpen = false : null} />

<div>
    <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
    {#if mobileSidebarIsOpen}
    <div class="fixed inset-0 flex z-40 md:hidden" role="dialog" aria-modal="true">
        <!--
          Off-canvas menu overlay, show/hide based on off-canvas menu state.

          Entering: "transition-opacity ease-linear duration-300"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "transition-opacity ease-linear duration-300"
            From: "opacity-100"
            To: "opacity-0"
        -->
        <div class="fixed inset-0 bg-slate-600 bg-opacity-75" aria-hidden="true"></div>

        <!--
          Off-canvas menu, show/hide based on off-canvas menu state.

          Entering: "transition ease-in-out duration-300 transform"
            From: "-translate-x-full"
            To: "translate-x-0"
          Leaving: "transition ease-in-out duration-300 transform"
            From: "translate-x-0"
            To: "-translate-x-full"
        -->
        <div use:clickOutside={() => mobileSidebarIsOpen = false} class="relative flex-1 flex flex-col max-w-xs w-full bg-white">
            <!--
              Close button, show/hide based on off-canvas menu state.

              Entering: "ease-in-out duration-300"
                From: "opacity-0"
                To: "opacity-100"
              Leaving: "ease-in-out duration-300"
                From: "opacity-100"
                To: "opacity-0"
            -->
            <div class="sticky top-0 z-10 flex-shrink-0 flex items-center p-2 bg-white">
                <button on:click={() => mobileSidebarIsOpen = false} type="button" class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span class="sr-only">Close sidebar</span>
                    <!-- Heroicon name: outline/x -->
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <p class="font-bold text-slate-900">Peter Parsons</p>
            </div>
            <div class="mt-5 flex-1 h-0 overflow-y-auto">
                <Navigation />
            </div>
        </div>

        <div class="flex-shrink-0 w-14" aria-hidden="true">
            <!-- Dummy element to force sidebar to shrink to fit close icon -->
        </div>
    </div>
    {/if}

    <!-- Static sidebar for desktop -->
    <div class="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div class="flex flex-col flex-grow border-r border-slate-200 bg-white overflow-y-auto">
            <div class="sticky top-0 z-10 flex items-center flex-shrink-0 p-4 bg-white opacity-90">
                <p class="font-bold text-slate-900">Peter Parsons</p>
            </div>
            <div class="mt-5 flex-grow flex flex-col">
                <Navigation />
            </div>
        </div>
    </div>
    <div class="md:pl-64 flex flex-col flex-1">
        <div class="sticky top-0 z-10 flex-shrink-0 flex h-14 bg-white border-b border-slate-200">
            <button on:click={() => mobileSidebarIsOpen = true} type="button" class="px-4 text-slate-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden">
                <span class="sr-only">Open sidebar</span>
                <!-- Heroicon name: outline/menu -->
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </div>

        <main class="flex-1">
            <div class="py-6">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                    <h1 class="text-2xl font-semibold text-slate-900">Dashboard</h1>
                </div>
                <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                    <!-- Replace with your content -->
                    <div class="py-4">
                        <slot />
                    </div>
                    <!-- /End replace -->
                </div>
            </div>
        </main>
    </div>
</div>

