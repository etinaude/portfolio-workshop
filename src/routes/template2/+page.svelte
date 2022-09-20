<script context="module" lang="ts">
  export const prerender = true;
</script>

<script lang="ts">
  import FlipCard from "$lib/flipCard.svelte";
  import projects from "$lib/../content/projects.json";
  import info from "$lib/../content/general-info.json";
</script>

<svelte:head>
  <title>{info.firstName} {info.lastName} | Portfolio</title>
</svelte:head>

<section id="about">
  <div class="header-text">
    <div class="left">
      <h3>👋 Hello, I'm</h3>
      <h1>{info.firstName} {info.lastName}</h1>
      <h2>{info.tagLine}</h2>
    </div>

    <div class="contacts">
      {#each info.contacts as contact}
        <p>
          <a href={contact.url} target="_blank"> ➼ {contact.type}</a>
        </p>
      {/each}
    </div>
   
  </div>

  <div class="scroll">
    <div class="down">Find out more ⇣⇣⇣</div>
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

<div class="contact-section">
  <h4>{info.firstName} {info.lastName} - 2022</h4>
  <div class="contact-items">
    {#each info.contacts as contact}
        <a href={contact.url} target="_blank">{contact.type}</a>
    {/each}
  </div>
</div>

<style lang="scss">
  #about {
    background: linear-gradient(150deg, var(--text-color), var(--accent-tint-color), var(--background-color));
    background-size: 380% 380%;
    animation: gradient 13s ease infinite;
    height: 100vh;

    @keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
  }

  .header-text {
    display: flex;
    gap: calc(1rem + 10vmax);
    justify-content: center;
    
    
    h1, h3, h2 {
      text-align: left;
      cursor: text;
      padding: 0;
      margin: 0;
      font-weight: 800;
    }

    h1 {
      text-shadow: 3px 3px 0px var(--accent-tint-color);
      font-size: 6rem;
    }

    h2 {
      margin-top: 3rem;
      color: var(--text-color);
    }
  }

  .contacts {
    display: flex;
    flex-direction: column;
    text-align: right;
    margin-top: 1.4rem;
    font-size: 1.3rem;
  }

  a:hover {
      color: var(--accent-tint-color);
  }

  h2 {
    text-align: center;
    text-shadow: 3px 3px 0px var(--accent-tint-color);
    font-weight: 800;
  }

  .grid {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5vmax;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding-bottom: 5rem;
    background-image: linear-gradient(var(--background-color), var(--accent-tint-color));
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

  .contact-section {
    text-align: center;
    padding-bottom: 1rem;

    .contact-items {
      display: flex;
      gap: 2rem;
      justify-content: center;
    }
  }
  

  @media only screen and (max-width: 600px) {
  .header-text {
    flex-direction: column;
    gap: 0;
    margin-left: 10vw;
  }

  .contacts {
    text-align: left;
  }

  .scroll {
    display: none;
  }
  
}
</style>
