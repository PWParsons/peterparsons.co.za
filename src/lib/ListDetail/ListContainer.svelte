<script>
  import { fly } from 'svelte/transition'
</script>

<aside transition:fly={{ x: -200, duration: 200 }} class="relative xl:order-first flex flex-col flex-shrink-0 w-full md:w-96 bg-white dark:bg-black-pearl border-r border-slate-200 dark:border-mirage overflow-y-auto">
  <div class="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
    <div class="h-full border-2 border-slate-300 dark:border-slate-600 border-dashed rounded-lg">
    </div>
  </div>
</aside>