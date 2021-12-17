<script>
    import { onMount } from 'svelte';
    import { fade, fly } from 'svelte/transition';
    import { clickOutside } from "$lib/app";
    import Navigation from "$lib/Navigation.svelte";
    import Logo from "$lib/Logo.svelte";
    import '../app.css';

    let mobileSidebarIsOpen = false;
    let showScrollToTopButton = false;
    let darkMode = true;

    onMount(() => {
        document.addEventListener('scroll', () => {
            showScrollToTopButton = document.documentElement.scrollTop > 135
        })

        darkMode = localStorage.darkMode === 'true';
    });

    function toggleDarkMode() {
        darkMode = !darkMode;
        localStorage.darkMode = darkMode;
        window.updateTheme();
    }

    function scrollToTop() {
        document.documentElement.scrollTop = 0;
    }
</script>

<svelte:window on:keyup={(e) => mobileSidebarIsOpen && e.keyCode === 27 ? mobileSidebarIsOpen = false : null} />

<div>
    {#if mobileSidebarIsOpen}
    <div transition:fade="{{ x: -200, duration: 200 }}" class="fixed inset-0 flex z-40 md:hidden" role="dialog" aria-modal="true">
        <div transition:fade="{{ x: -200, duration: 200 }}" class="fixed inset-0 bg-slate-600 bg-opacity-75" aria-hidden="true"></div>
        <div transition:fly="{{ x: -200, duration: 300 }}" use:clickOutside={() => mobileSidebarIsOpen = false} class="relative flex-1 flex flex-col max-w-xs w-full bg-white dark:bg-black-pearl">
            <div class="sticky top-0 z-10 flex-shrink-0 flex items-center py-2 px-1.5 bg-white dark:bg-black-pearl">
                <button on:click={() => mobileSidebarIsOpen = false} type="button" class="mr-2 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span class="sr-only">Close sidebar</span>
                    <svg class="text-slate-500 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <Logo />
            </div>
            <div class="mt-5 flex-1 h-0 overflow-y-auto">
                <Navigation />
            </div>
        </div>
        <div class="flex-shrink-0 w-14" aria-hidden="true"></div>
    </div>
    {/if}

    <div class="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <div class="flex flex-col flex-grow border-r border-slate-200 dark:border-mirage bg-white dark:bg-black-pearl overflow-y-auto">
            <div class="sticky top-0 z-10 flex items-center flex-shrink-0 p-4 bg-white dark:bg-black-pearl opacity-90">
                <Logo />
            </div>
            <div class="mt-5 flex-grow flex flex-col">
                <Navigation />
            </div>
        </div>
    </div>
    <div class="md:pl-64 flex flex-col flex-1">
        <div class="sticky top-0 z-10 flex-shrink-0 flex h-14 bg-white dark:bg-black-pearl border-b border-slate-200 dark:border-mirage">
            <button on:click={() => mobileSidebarIsOpen = true} type="button" class="px-4 text-slate-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600 md:hidden">
                <span class="sr-only">Open sidebar</span>
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            <div class="flex-1 px-4 flex justify-between">
                <div class="flex-1 flex">
                    <form class="w-full flex md:ml-0" action="#" method="GET">
                        <label for="search-field" class="sr-only">Search</label>
                        <div class="relative w-full text-slate-400 focus-within:text-slate-600 dark:text-slate-400 dark:focus-within:text-slate-300">
                            <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <input id="search-field" class="block w-full h-full pl-8 pr-3 py-2 border-transparent bg-white dark:bg-black-pearl text-slate-900 dark:text-slate-300 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:placeholder-slate-400 dark:focus:placeholder-slate-500 focus:ring-0 focus:border-transparent sm:text-sm" placeholder="Search..." type="search" name="search">
                        </div>
                    </form>
                </div>
                <div class="ml-4 flex items-center md:ml-6">
                    {#if darkMode}
                        <button on:click="{() => toggleDarkMode()}" in:fly="{{ x: 30, duration: 200 }}" type="button" class="p-1 rounded-full text-slate-400 dark:text-lime-400 hover:text-slate-500 dark:hover:text-lime-500 focus:outline-none focus:ring-0">
                            <span class="sr-only">Enable light mode</span>
                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        </button>
                    {:else}
                        <button on:click="{() => toggleDarkMode()}" in:fly="{{ x: 30, duration: 200 }}" type="button" class="p-1 rounded-full text-blue-600 hover:text-blue-700 focus:outline-none focus:ring-0">
                            <span class="sr-only">Enable dark mode</span>
                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>
                        </button>
                    {/if}
                </div>
            </div>
        </div>

        <main class="flex-1">
            <div class="px-4 sm:px-6 lg:px-8 py-6">
                <slot />
            </div>
        </main>
    </div>

    <div class="z-10 fixed right-0 rounded-full bottom-0 mr-5 mb-5 sm:mr-6 sm:mb-6 shadow-2xl">
        {#if showScrollToTopButton}
        <button transition:fade="{{ duration: 200 }}" on:click="{() => scrollToTop()}" type="button" class="flex items-center justify-center bg-blue-600 dark:bg-lime-400 rounded-md transform transition duration-300 hover:scale-105 p-2">
            <span class="sr-only">Scroll to top</span>
            <svg class="text-slate-100 dark:text-mirage h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
            </svg>
        </button>
        {/if}
    </div>
</div>

