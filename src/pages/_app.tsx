import { Provider } from 'mobx-react';
import { NextContext, NextStatelessComponent } from 'next';
import App, { Container } from 'next/app';
import { RouterProps } from 'next/router';
import React from 'react';
import { serialize } from 'serializr';
import 'styles/style.scss';
import RootStore, { initStore } from '../stores/RootStore';

interface MyNextContext {
  Component: NextStatelessComponent;
  router: RouterProps;
  ctx: NextContext;
}

class MyApp extends App {
  public static async getInitialProps({ Component, ctx }: MyNextContext) {
    let pageProps = {};
    const rootStore = initStore();
    await rootStore.appStore.loadInitialData();
    if (Component.getInitialProps) {
      (ctx as NextContext & { stores: RootStore }).stores = rootStore;
      pageProps = await Component.getInitialProps(ctx);
    }
    return { Component, pageProps, serializedStore: serialize(rootStore) };
  }

  public props: any;
  public store: RootStore;

  constructor(props: any) {
    super(props);
    this.store = initStore(this.props.serializedStore);
  }

  public render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Provider stores={this.store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default MyApp;
