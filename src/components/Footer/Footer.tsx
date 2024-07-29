'use client';
import classes from './Footer.module.css';

type Props = {
  site?: 'imprint' | 'privacy';
};

export const Footer = ({ site }: Props) => {
  return (
    <footer className={classes.root}>
      <div className={classes.inner}>
        {site && <a href='/'>Home</a>}
        {site !== 'imprint' && <a href='/imprint'>Impressum</a>}
        {site !== 'privacy' && <a href='/privacy'>Datenschutz</a>}
      </div>
    </footer>
  );
};
