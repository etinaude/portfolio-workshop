<script lang="ts">
  export let title: string;
  export let description: string;
  export let image_url: string;

  export let follow_url: string = "https://github.com";
</script>

<div class="flip-card">
  <a class="inner" href={follow_url} target="_blank" rel="noopener">
    <div class="front">
      <div class="img">
        <img src={"images/" + image_url} alt="project" />
      </div>
    </div>

    <div class="back">
      <h3>{title}</h3>

      <caption>{description}</caption>
    </div>
  </a>
</div>

<style lang="scss">
  @import "./../content/theme.scss";

  * {
    cursor: pointer;
  }

  .flip-card {
    width: 400px;
    height: 400px;

    overflow: hidden;
    border-radius: 5px;
    display: flex;
    text-align: center;
    cursor: pointer;
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);

    perspective: 1000px;

    .inner {
      // display: flex;
      // flex-direction: column;
      // align-items: center;

      position: relative;
      width: 100%;
      height: 100%;
      text-align: center;
      transition: transform 0.8s;
      transform-style: preserve-3d;
    }

    &:hover {
      .inner {
        transform: rotateY(180deg);
      }
    }

    .front,
    .back {
      position: absolute;
      width: 100%;
      height: 100%;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
    }

    .front {
      background-color: var(--background-tint-color);

      .img {
        position: relative;
        width: 100%;
        aspect-ratio: 1;

        img {
          width: 100%;
          aspect-ratio: 1;
          object-fit: cover;
          position: absolute;
          left: 0;
        }
      }
    }

    .back {
      background-color: var(--background-tint-color);
      transform: rotateY(180deg);
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      h3 {
        color: var(--accent-color);
        margin-bottom: 8px;
      }

      caption {
        padding: 10px 30px;
      }
    }
  }

  @media (max-width: 1100px) {
    .card {
      width: calc(50% - 20px);
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
  }
</style>
