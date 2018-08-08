import { action, observable } from 'mobx';
import { serializable } from 'serializr';
import { RootStore } from './internal';

export default class AppStore {
  public rootStore: RootStore;
  @observable
  @serializable
  public initialized: boolean = false;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @action
  public async loadInitialData() {
    await new Promise(resolve => setTimeout(() => resolve(), 300));
    this.initialized = true;
  }
}
