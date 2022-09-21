<script context="module" lang="ts">
  export const prerender = true;
</script>

<script lang="ts">
  import FlipCard from "$lib/flipCard.svelte";
  import projects from "$lib/../content/projects.json";
  import info from "$lib/../content/general-info.json";
</script>

<svelte:head>
  <title>{info.firstName} {info.lastName}</title>
</svelte:head>

<section id="about">
  <div class="header-text">
    <h1>{info.firstName} {info.lastName}</h1>
    <h2>{info.tagLine}</h2>

    <div class="contacts">
      {#each info.contacts as contact}
        <p>
          {contact.type}: <a href={contact.url}>{contact.displayText}</a>
        </p>
      {/each}
    </div>
  </div>

  <div class="scroll">
    <div class="down">⌄</div>
    Scroll to see some projects
    <div class="down">⌄</div>
  </div>
</section>

<h2>Projects</h2>

<div class="grid">
  {#each projects as project}
    <FlipCard
      title={project.title}
      description={project.description}
      image_url={project.image_url}
      follow_url={project.follow_url}
    />
  {/each}
</div>

<style lang="scss">
  h2 {
    text-align: center;
    font-weight: 400;
  }

  .grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }

  .scroll {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    font-size: 1.5rem;
    color: #fff;
    margin-bottom: 1rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    line-height: 1em;

    .down {
      margin: 0 0.5rem;
      font-size: larger;
      height: 1.5rem;
      animation: bounce 1s infinite;
    }

    @keyframes bounce {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
      100% {
        transform: translateY(0);
      }
    }
  }
</style>
