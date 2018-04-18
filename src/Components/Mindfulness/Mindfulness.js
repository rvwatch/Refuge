import React from 'react';

export const Mindfulness = () => {
  return (
    <section>
      <article className="video-frame">
        <iframe
          title="guided meditation"
          width="560"
          height="315"
          // eslint-disable-next-line
          src="https://www.youtube-nocookie.com/embed/sz-cNBAK7Qs?rel=0&amp;showinfo=0"
          // eslint-disable-next-line
          frameBorder="0"
          allow="autoplay; encrypted-media"
          // eslint-disable-next-line
          allowFullScreen
        />
      </article>
    </section>
  );
};
