<script context="module" lang="ts">
  export const prerender = true;
</script>

<script lang="ts">
  import { assets, base } from '$app/paths';
  import { page } from "$app/stores";
  import { fade } from "svelte/transition";

  import Card from "$lib/card.svelte";
  import projectsImport from "$lib/../content/projects.json";
  import info from "$lib/../content/general-info.json";
  import experience from "$lib/../content/experience.json";
  import Header from "$lib/header.svelte";

  const projects = projectsImport.slice(0, 3);
</script>

<svelte:head>
  <title>{info.firstName} {info.lastName}</title>
</svelte:head>

<Header entries={{ "Home": "#", "Projects": "#projects", "Experience": "#experience", "Contact": "#cta" }} />

{#if $page.url.hash === "#projects"}
  <section id="projects" transition:fade>
    <h2>Projects</h2>

    <div class="flex-row">
      {#each projects as project}
        <Card
          title={project.title}
          description={project.description}
          image_url={project.image_url}
          follow_url={project.follow_url}
        />
      {/each}
    </div>

    <a class="button more-projects-btn" href={`${base}/projects`}> More Projects →</a>
  </section>


{:else if $page.url.hash === "#experience"}
  <section id="Experience" transition:fade>
    <h2>Experience</h2>

    <div class="flex-row experience-grid">
      {#each experience as experience}
        <Card
          title={experience.title}
          description={experience.description}
          image_url={experience.image_url}
          follow_url={experience.follow_url}
        />
      {/each}
    </div>
  </section>

{:else if $page.url.hash === "#cta"}
  <section id="cta" transition:fade>
    <h1>Contact Me</h1>

    <div class="contacts">
      {#each info.contacts as contact}
        <p>
          {contact.type}: <a href={contact.url}>{contact.displayText}</a>
        </p>
      {/each}
    </div>
  </section>

{:else}
  <section
    id="about"
    style="--imageUrl: url({`${assets}/images/${info.heroImage}`});"
    transition:fade
  >
    <div class="header-text">
      <h1>{info.firstName} {info.lastName}</h1>
      <h2>{info.tagLine}</h2>
    </div>
  </section>
{/if}

<style>
    section {
        position: absolute;
        width: 100%;
    }

    .experience-grid {
        justify-content: center;
        gap: 50px;
    }
</style>

