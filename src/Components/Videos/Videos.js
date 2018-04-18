import React from 'react';

export const Videos = () => {
  return (
    <section>
      <article className="video-frame">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/tk1p3fD-mtg?rel=0&amp;showinfo=0"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </article>
    </section>
  );
};
