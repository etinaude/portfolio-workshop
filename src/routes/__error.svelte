<script context="module">
  /** @type {import('@sveltejs/kit').Load} */
</script>

<script lang="ts">
  import { base } from '$app/paths';
</script>

<section>
  <h1>Oh no! That page doesn't exist</h1>
  <h3>Please click here to go back to the home page</h3>

  <a class="button more-projects-btn" href={base}> 🡠 Back to home</a>
</section>

<style lang="scss">
  h1 {
    margin-top: 20%;
  }
</style>
