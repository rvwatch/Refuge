import React from 'react';
import {Link} from 'react-router-dom';

export const Sound = () => {
  return (
    <section>
      <header className='excercise-nav'>
        <Link to='/mindfulness' className='prev'>meditate</Link>
        <Link to='/journal' className='next'>journal</Link>
      </header>
      <article className="video-frame">
        <iframe
          title='calming sound-track'
          width="560"
          height="315"
          // eslint-disable-next-line
          src="https://www.youtube-nocookie.com/embed/1dFvc42g8CA?rel=0&amp;showinfo=0"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </article>
    </section>
  );
};
