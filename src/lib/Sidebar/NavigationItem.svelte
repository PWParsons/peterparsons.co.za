<script>
  import Icon from "$lib/Icon.svelte"

  export let isExternal = false
  export let isActive = false
  export let href
</script>

<a
  {href}
  target={isExternal ? '_blank' : undefined}
  rel={isExternal ? 'noopener noreferrer' : undefined}
  class={isActive
    ? 'text-blue-600 dark:text-lime-400 bg-slate-100 dark:bg-madison/50 group flex items-center px-2 py-2 text-sm font-medium rounded-md'
    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-madison/50 hover:text-slate-900 dark:hover:text-slate-300 group flex items-center px-2 py-2 text-sm font-medium rounded-md'}
>
  <slot />

  {#if isExternal}
    <span class="text-slate-500 dark:text-slate-600 group-hover:text-blue-600 dark:group-hover:text-lime-400 mr-1 ml-auto flex-shrink-0 h-3 w-3">
      <Icon name="external-link" />
    </span>
  {/if}
</a>
