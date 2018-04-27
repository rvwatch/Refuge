import React from 'react';
import {Link} from 'react-router-dom';

export const Videos = () => {
  return (
    <section>
      <header className='excercise-nav'>
        <Link to='/' className='prev'>dashboard</Link>
        <Link to='/mindfulness' className='next'>meditate</Link>
      </header>
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
