<script context="module" lang="ts">
  export const prerender = true;
</script>

<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>GSDC Portfolio Workshop</title>
</svelte:head>

<section>
  <div class="header-text">
    Please swap this file (<b>src/routes/+page.svelte</b>) out for one of the templates:
    <ul>
      <li><a href={`${base}/template1`}>src/routes/template1/+page.svelte</a></li>
      <li><a href={`${base}/template2`}>src/routes/template2/+page.svelte</a></li>
      <li><a href={`${base}/template3`}>src/routes/template3/+page.svelte</a></li>
      <li><a href={`${base}/template4`}>src/routes/template4/+page.svelte</a></li>
    </ul>
  </div>
</section>
