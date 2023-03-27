<section>
  <div>
    <p>Hi there! I'm a Frontend Developer.</p>
    <p>
      I have one year of experience developing websites using technologies such
      as React, Svelte and Web3.
    </p>
  </div>
  <figure>
    <img src="/images/illustration.webp" alt="" width="400" height="241" />
  </figure>
</section>

<style lang="scss">
  section {
    display: grid;
    margin-block: 4rem;
    row-gap: 3.2rem;

    @media (min-width: 640px) {
      gap: 6rem;
    }

    @media (min-width: 768px) {
      align-items: center;
      grid-template-columns: repeat(2, 1fr);
      margin-block: 6rem;
    }

    @media (min-width: 1024px) {
      margin-block: 10rem;
    }
  }

  p {
    &:first-of-type {
      font-size: 2.2rem;
      font-weight: 500;
      line-height: 1.5;
      margin-bottom: 0.8rem;
    }

    &:last-of-type {
      font-size: 1.8rem;
      line-height: 1.75;
      opacity: 0.8;
    }
  }

  figure {
    display: flex;
    justify-content: center;
  }

  img {
    object-fit: contain;
  }
</style>
