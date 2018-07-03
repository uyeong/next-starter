import { Action, loadInitialData } from 'actions/initialize';
import { NextContext, NextStatelessComponent } from 'next';
import withRedux from 'next-redux-wrapper';
import App, { Container } from 'next/app';
import { RouterProps } from 'next/router';
import React from 'react';
import { Provider } from 'react-redux';
import { initStore, State } from 'reducers';
import { Store } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import 'styles/style.scss';

interface MyNextContext {
  Component: NextStatelessComponent;
  router: RouterProps;
  ctx: { store: Store<State> } & NextContext;
}

class MyApp extends App {
  public static async getInitialProps({ Component, ctx }: MyNextContext) {
    const store = ctx.store;
    let pageProps = {};
    await (store.dispatch as ThunkDispatch<State, void, Action>)(loadInitialData());
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { Component, pageProps };
  }

  public props: any;

  public render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(initStore)(MyApp);
