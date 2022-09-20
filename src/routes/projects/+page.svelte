<script context="module" lang="ts">
  export const prerender = true;
</script>

<script lang="ts">
  import Card from "$lib/card.svelte";
	import Header from "$lib/header.svelte";
  import projectsImport from "../../content/projects.json";

  const largeProjects = projectsImport.slice(0, 6);
  const smallProjects = projectsImport.slice(6);
</script>

<svelte:head>
  <title>Etienne Naude</title>
  <meta name="description" content="Etienne Naude projects" />
</svelte:head>


<Header />

<section id="projects">
  <h2>Projects</h2>

  <div class="flex-row">
    {#each largeProjects as project}
      <Card
        title={project.title}
        description={project.description}
        image_url={project.image_url}
        follow_url={project.follow_url}
      />
    {/each}
  </div>

  <h2>More Projects</h2>

  <div class="flex-row">
    {#each smallProjects as project}
      <Card
        title={project.title}
        description={project.description}
        image_url={project.image_url}
        follow_url={project.follow_url}
        small="true"
      />
    {/each}
  </div>
</section>

<style lang="scss">
  .flex-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1200px;
  }

  // Mobile
  @media (max-width: 700px) {
    section {
      padding: 3em;
    }

    h2 {
      margin-top: 2em;
    }
  }

  @media (max-width: 500px) {
    section {
      padding: 1em;
    }

    h2 {
      margin-top: 1em;
    }
  }

  // Large displays
  @media (min-width: 1900px) {
    h2 {
      margin-top: 3em;
    }
  }
</style>
