<script lang="ts">
  export let title: string;
  export let description: string;
  export let image_url: string;

  export let follow_url: string = "https://github.com";

  export let small: string = "false";
</script>

<div class="card tilt {small == 'true' ? 'small' : ''}">
  <a href={follow_url} target="_blank" rel="noopener">
    <div class="img">
      <img src={"src/content/images/" + image_url} alt="project" />
    </div>

    <h3>{title}</h3>

    <caption>{description}</caption>

    <div class="read-more">read more →</div>
  </a>
</div>

<style lang="scss">
  @import "./../content/theme.scss";

  .card {
    width: 30%;
    margin-bottom: 60px;
    overflow: hidden;
    border-radius: 5px;
    background-color: var(--background-tint-color);
    display: flex;
    text-align: center;
    cursor: pointer;
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);

    &:hover {
      transform: scale(1.05);
    }

    * {
      cursor: pointer;
    }

    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      overflow: hidden;
      text-decoration: none;
      height: 100%;
      padding-bottom: 20px;
      margin-bottom: auto;
      box-sizing: border-box;
      width: 100%;
    }

    .img {
      position: relative;
      width: 100%;
      aspect-ratio: 1;
    }
  }

  h3 {
    color: var(--accent-color);
    margin-bottom: 8px;
  }

  caption {
    padding: 0px 30px;
  }

  .read-more {
    margin-top: 10px;
    color: var(--accent-color);
    font-size: 0.9em;
    display: none;
  }

  img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    position: absolute;
    left: 0;
  }

  .card.small {
    width: 23%;
    .read-more {
      display: none;
    }

    h3 {
      color: var(--accent-color);
      margin-bottom: 8px;
      font-size: 1.2em;
    }

    caption {
      padding: 0px 10px;
    }
  }

  @media (max-width: 1100px) {
    .card {
      width: calc(50% - 20px);
    }

    .card.small {
      width: calc(33% - 20px);
    }
  }

  @media (max-width: 700px) {
    .card {
      width: 100%;
      img,
      .img {
        aspect-ratio: 3/2;
      }
    }

    .card.small {
      width: calc(50% - 20px);

      img,
      .img {
        aspect-ratio: 1;
      }
    }

    @media (max-width: 450px) {
      .card.small {
        width: 100%;
        img,
        .img {
          aspect-ratio: 3/2;
        }
      }
    }
  }
</style>
