import css from './DevInfo.module.scss';

function DevInfo() {
  return (
    <>
      <p className={css.info}>
        created by <span className={css.username}>dziubenzo</span>
      </p>
      <a
        href="https://github.com/dziubenzo/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Developer's GitHub page, opens in new tab"
      >
        <img className={css.logo} src="./github-mark.svg" alt="GitHub Logo" />
      </a>
    </>
  );
}

export default DevInfo;
