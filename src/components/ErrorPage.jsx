import { useRouteError, useNavigate } from 'react-router-dom';
import css from './ErrorPage.module.scss';
import { useEffect, useState } from 'react';

function ErrorPage() {
  const [counter, setCounter] = useState(3);
  const error = useRouteError();
  const navigate = useNavigate();

  useEffect(() => {
    const navigateToHome = setTimeout(() => {
      navigate('/');
    }, 3000);
    return () => {
      clearTimeout(navigateToHome);
    };
  }, [navigate]);

  useEffect(() => {
    const countToZero = setInterval(() => {
      setCounter((counter) => counter - 1);
    }, 1000);
    return () => {
      clearInterval(countToZero);
    };
  }, []);

  return (
    <>
      <div className={css.wrapper}>
        <h1 className={css.code}>{error.status}</h1>
        <h1 className={css.message}>{error.statusText}</h1>
      </div>
      <p className={css.redirectMessage}>Redirecting to Home in {counter}...</p>
    </>
  );
}

export default ErrorPage;
