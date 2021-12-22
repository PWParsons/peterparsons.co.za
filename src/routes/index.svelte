<script>
  import { MetaTags } from 'svelte-meta-tags'
  import ScrollToTop from '$lib/ScrollToTop.svelte'

  let showScrollToTopButton = false
</script>

<MetaTags
  title="Peter Parsons"
  description="Software designer and developer living in Cape Winelands South Africa."
/>

<main
  on:scroll={() => (showScrollToTopButton = true)}
  class="flex-1 relative z-0 h-screen overflow-y-auto focus:outline-none xl:order-last px-6 lg:px-8 py-12"
>
  <div class="text-lg max-w-prose mx-auto">
    <h1>
      <span
        class="block text-base text-center text-blue-600 dark:text-lime-400 font-semibold tracking-wide uppercase"
        >Introducing</span
      >
      <span
        class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
        >Rocket Launch Your Career</span
      >
    </h1>
  </div>
  <div
    class="mt-6 prose prose-blue dark:prose-dark prose-lg text-slate-500 dark:text-slate-400 prose-a:text-blue-600 dark:prose-a:text-lime-400 prose-headings:text-slate-900 dark:prose-headings:text-white prose-strong:text-slate-500 dark:prose-strong:text-slate-400 mx-auto"
  >
    <p>
      Faucibus commodo massa rhoncus, volutpat. <strong>Dignissim</strong> sed
      <strong>eget risus enim</strong>. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
      praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus
      commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.
      <a href="/">Mattis mauris semper</a> sed amet vitae sed turpis id.
    </p>
    <ul role="list">
      <li>Quis elit egestas venenatis mattis dignissim.</li>
      <li>Cras cras lobortis vitae vivamus ultricies facilisis tempus.</li>
      <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
    </ul>
    <p>
      Quis semper vulputate aliquam venenatis egestas sagittis quisque orci. Donec commodo sit
      viverra aliquam porttitor ultrices gravida eu. Tincidunt leo, elementum mattis elementum ut
      nisl, justo, amet, mattis. Nunc purus, diam commodo tincidunt turpis. Amet, duis sed elit
      interdum dignissim.
    </p>
    <h2>From beginner to expert in 30 days</h2>
    <p>
      Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum
      urna nibh. Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas
      pellentesque id sed tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi.
      Pellentesque nam sed nullam sed diam turpis ipsum eu a sed convallis diam.
    </p>
    <p>
      Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper
      sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus
      varius sit neque erat velit.
    </p>
    <h2>Everything you need to get up and running</h2>
    <p>
      Purus morbi dignissim senectus mattis <a href="/">adipiscing</a>. Amet, massa quam varius orci
      dapibus volutpat cras. In amet eu ridiculus leo sodales cursus tristique. Tincidunt sed tempus
      ut viverra ridiculus non molestie. Gravida quis fringilla amet eget dui tempor dignissim.
      Facilisis auctor venenatis varius nunc, congue erat ac. Cras fermentum convallis quam.
    </p>
    <p>
      Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper
      sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus
      varius sit neque erat velit.
    </p>
  </div>

  <ScrollToTop show={showScrollToTopButton} />
</main>
