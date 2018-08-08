import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { inject } from 'mobx-react';
import RootStore from 'stores/RootStore';
import css from './style.scss';

interface Props {
  stores: RootStore;
}

@inject('stores')
class Home extends React.Component<Props> {
  public render() {
    const { appStore } = this.props.stores;
    return (
      <>
        <Head>
          <title>Home</title>
          <meta name="description" content="" />
          <meta name="keywords" content="" />
        </Head>
        <article className={css.wrapper}>
          Hello world.
          <p>app store initialized: {appStore.initialized ? 'TRUE' : 'FALSE'}</p>
          <Link href="/about">
            <a>Go to about</a>
          </Link>
        </article>
      </>
    );
  }
}

export default Home;
