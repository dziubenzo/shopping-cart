import { useEffect, useState } from 'react';
import useFetch from '../helpers.jsx';
import css from './Home.module.scss';

function Home() {
  // Fetch data from Today in History API
  const { data, error, loading } = useFetch(
    'http://history.muffinlabs.com/date',
  );

  // Random event
  const [randomEvent, setRandomEvent] = useState(null);

  // Get random event once data are fetched
  useEffect(() => {
    if (data && !randomEvent) {
      const events = data.data.Events;
      const event = events[Math.floor(Math.random() * events.length)];
      event.date = data.date;
      setRandomEvent(event);
    }
  }, [data, randomEvent]);

  return (
    <>
      <h1 className={css.title}>Add Some Fake Products to Cart!</h1>
      <div className={css.wrapperQuote}>
        <blockquote className={css.textQuote}>
          &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
          repudiandae ab at doloribus facere numquam consectetur molestiae
          voluptatum placeat, consequuntur laudantium, perferendis optio beatae
          error, aliquam quod iusto non necessitatibus perspiciatis expedita
          dolores eligendi cupiditate accusamus. Doloremque est temporibus
          laboriosam dolorem? Delectus similique assumenda repellat consectetur.
          Incidunt hic recusandae eius?&quot;
        </blockquote>
        <p className={css.quoteAuthor}>– Dr Lorem Ipsum</p>
      </div>
      <div className={css.onThisDay}>
        {loading && <p>Loading &apos;On This Day&apos; data...</p>}
        {error && <p>{error.message}</p>}
        {data && randomEvent && (
          <>
            <h1 className={css.title}>On This Date...</h1>
            <p className={css.year}>
              {randomEvent.date}, {randomEvent.year}
            </p>
            <p className={css.event}>{randomEvent.text}</p>
          </>
        )}
      </div>
    </>
  );
}

export default Home;
