import React from 'react';

export const Videos = () => {
  return (
    <section>
      <article className="video-frame">
        <iframe
          title='Calming Video'
          width="560"
          height="315"
          // eslint-disable-next-line
          src="https://www.youtube-nocookie.com/embed/tk1p3fD-mtg?rel=0&amp;showinfo=0"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </article>
    </section>
  );
};
