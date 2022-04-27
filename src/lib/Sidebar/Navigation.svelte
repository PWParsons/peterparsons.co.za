<script>
  import { page } from '$app/stores'
  import NavigationItem from '$lib/Sidebar/NavigationItem.svelte'
  import Icon from '$lib/Icon.svelte'

  const links = [
    {
      href: '/',
      label: 'Home',
      icon: 'home',
      isActive: $page.url.pathname === '/',
      isExternal: false,
    },
    'Writings',
    {
      href: '/writings',
      label: 'Javascript',
      icon: 'home',
      isActive: $page.url.pathname === '/writings',
      isExternal: false,
    },
    {
      href: '/',
      label: 'PHP',
      icon: 'home',
      isActive: false,
      isExternal: false,
    },
    {
      href: '/',
      label: 'Server Stuff',
      icon: 'home',
      isActive: false,
      isExternal: false,
    },
    'Projects',
    {
      href: '/',
      label: 'Tusk',
      icon: 'home',
      isActive: false,
      isExternal: false,
    },
    'Online',
    {
      href: 'https://twitter.com/',
      label: 'Twitter',
      icon: 'home',
      isActive: false,
      isExternal: true,
    },
    {
      href: 'https://github.com/',
      label: 'Github',
      icon: 'home',
      isActive: false,
      isExternal: true,
    },
  ]
</script>

<nav class="mt-5 flex-1 px-2 space-y-8 bg-white dark:bg-black-pearl" aria-label="Sidebar">
  <div class="space-y-2">
    {#each links as link, i}
      {#if typeof link === 'string'}
        <h3
          class="pt-6 pb-2 px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider"
          id="{link}-headline"
        >
          {link}
        </h3>
      {:else}
        <NavigationItem isExternal={link.isExternal} href={link.href} isActive={link.isActive}>
          <span class="text-slate-400 dark:text-slate-500 mr-3 flex-shrink-0 h-5 w-5">
            <Icon name={link.icon} />
          </span>
          {link.label}
        </NavigationItem>
      {/if}
    {/each}
  </div>
</nav>
