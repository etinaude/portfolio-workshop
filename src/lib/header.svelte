<script lang="ts">
  import { base } from '$app/paths';
  import { page } from "$app/stores";

  export let entries = {"Home": '', "Projects": '/projects', "Contact": '#cta'};
</script>

<header>
  <nav>
    <ul>
      {#each Object.entries(entries) as [entryKey, entryValue]}
        <li class:active={$page.url.pathname === base + entryValue}>
          <a sveltekit:prefetch href={entryValue}>{entryKey}</a>
        </li>
      {/each}
    </ul>
  </nav>
</header>

<style lang="scss">
  @import "./../content/theme.scss";

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100vw;
    background: var(--background-tint-color);
    height: 50px;
    z-index: 1000;
  }

  nav {
    display: flex;
    justify-content: center;
    position: absolute;
    height: 100%;

    a {
      display: flex;
      height: 100%;
      align-items: center;
      padding: 0 1em;
      font-weight: 700;
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      text-decoration: none;
      transition: color 0.2s linear;
      color: var(--accent-color);
    }
  }

  ul {
    position: relative;
    padding: 0;
    margin: 0;
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    background-size: contain;

    li {
      position: relative;
      height: 100%;
      &.active::before {
        --size: 6px;
        content: "";
        width: 0;
        height: 0;
        position: absolute;
        top: 0;
        left: calc(50% - var(--size));
        border: var(--size) solid transparent;
        border-top: var(--size) solid var(--accent-color);
      }
    }
  }

  a:hover {
    color: var(--accent-tint-color);
  }

  @media (max-width: 800px) {
    nav {
      left: 0;
      transform: none;
    }
  }
</style>
