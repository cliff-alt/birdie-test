import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { RootState } from '@App/store/reducers';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Banner from '@App/components/banner/Banner';
import { requestEvents } from '@App/store/actions/event';
import { CareEvent } from '@App/api/event';
import { CareEventList } from '@App/components/events/CareEventList';

interface AppProps {
  events: CareEvent[];
  eventsLoading: boolean;
  requestEvents: (page?: number) => void;
}

interface AppState {
  page: number;
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 55px 0 0 0;
    background-color: #f3f3f3;
    font-family: sans-serif;
  }
`;

const LoadMoreEvents = styled.button`
  border-radius: 45px;
  border: 1px solid #f1e5ac;
  background-color: #fff8d6;
  padding: 15px;
  width: 100%;
  margin-top: 15px;

  &:hover {
    cursor: pointer;
  }
`;

class App extends React.Component<AppProps, AppState> {
  public constructor(props: AppProps) {
    super(props);
    this.state = {
      page: 0,
    };
    this.props.requestEvents();
  }

  getMoreEvents() {
    this.props.requestEvents(this.state.page + 1);
    this.setState({ ...this.state, page: this.state.page + 1 });
  }

  public render() {
    return (
      <>
        <GlobalStyle />
        <Banner />
        {this.props.eventsLoading && this.props.events.length <= 0 ? (
          <div>Loading...</div>
        ) : (
          <>
            <CareEventList events={this.props.events} />
            <LoadMoreEvents onClick={() => this.getMoreEvents()}>
              {this.props.eventsLoading ? 'Loading...' : 'Get More Events'}
            </LoadMoreEvents>
          </>
        )}
      </>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  events: state.eventData.events,
  eventsLoading: state.eventData.loading,
});

const mapDispatchToProps = (dispatch: Dispatch<RootState>) => ({
  requestEvents: (page = 0) => dispatch(requestEvents(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
