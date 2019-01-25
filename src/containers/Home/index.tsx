import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import css from './style.scss';

class Home extends React.Component {
  public render() {
    return (
      <>
        <Head>
          <title>Home</title>
          <meta name="description" content="" />
          <meta name="keywords" content="" />
        </Head>
        <article className={css.wrapper}>
          Hello world.
          <br />
          <Link href="/about">
            <a>Go to about</a>
          </Link>
        </article>
      </>
    );
  }
}

export default Home;
