import { deserialize, object, serializable } from 'serializr';
import { AppStore } from './internal';

let store: RootStore = null;

export default class RootStore {
  @serializable(object(AppStore))
  public readonly appStore: AppStore;

  constructor() {
    this.appStore = new AppStore(this);
  }
}

export function initStore(state = {}) {
  let result = store;
  if (typeof window === 'undefined' && typeof global !== 'undefined') {
    result = deserialize(RootStore, state);
  } else {
    if (store === null) {
      result = deserialize(RootStore, state);
      store = result;
    }
  }
  result.appStore.rootStore = result;
  return result;
}
