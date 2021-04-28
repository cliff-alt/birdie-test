import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import initialState from '@App/store/reducers/initialState';
import { requestEvents } from '@App/store/actions/event';
import { requestSummary } from '@App/store/actions/summary';

const mockStore = configureStore([]);

describe('App Component', () => {
  let store: MockStoreEnhanced;

  beforeEach(() => {
    store = mockStore(initialState);
    store.dispatch = jest.fn();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      div
    );
  });

  it('fetches the first page of events and the summary on load', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      div
    );

    expect(store.dispatch).toHaveBeenCalledTimes(2);
    expect(store.dispatch).toHaveBeenCalledWith(requestEvents());
    expect(store.dispatch).toHaveBeenCalledWith(requestSummary());
  });
});
