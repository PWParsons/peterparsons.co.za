<script>
    export let externalLink = false;
    export let link = '/';
</script>

{#if externalLink}
    <a href={link} target="_blank" rel="external" class="text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-madison dark:hover:bg-opacity-50 hover:text-slate-900 dark:hover:text-slate-300 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
        <slot />
        <svg class="text-slate-500 dark:text-slate-600 group-hover:text-blue-600 dark:group-hover:text-lime-400 mr-1 ml-auto flex-shrink-0 w-3 h-3" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.00195 6.32617V0.824219C9.00195 0.490234 8.79102 0.267578 8.45117 0.267578L2.94922 0.279297C2.62109 0.279297 2.41016 0.519531 2.41016 0.794922C2.41016 1.07031 2.65039 1.30469 2.92578 1.30469H4.66602L7.45508 1.19922L6.39453 2.13672L1.16211 7.38086C1.05664 7.48633 0.998047 7.61523 0.998047 7.73828C0.998047 8.01367 1.24414 8.27734 1.53125 8.27734C1.66602 8.27734 1.78906 8.22461 1.89453 8.11914L7.13281 2.875L8.07617 1.81445L7.96484 4.48047V6.34961C7.96484 6.61914 8.19922 6.86523 8.48633 6.86523C8.76172 6.86523 9.00195 6.63672 9.00195 6.32617Z" fill="currentColor"></path>
        </svg>
    </a>
{:else}
    <a href={link} class="text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-madison dark:hover:bg-opacity-50 hover:text-slate-900 dark:hover:text-slate-300 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
        <slot />
    </a>
{/if}