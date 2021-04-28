import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { RootState } from '@App/store/reducers';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Banner from '@App/components/banner/Banner';
import { requestEvents } from '@App/store/actions/event';
import { CareEvent } from '@App/api/event';
import { CareEventList } from '@App/components/events/CareEventList';
import { Summary } from '@App/api/summary';
import { requestSummary } from '@App/store/actions/summary';
import { SummaryArea } from '@App/components/summary/SummaryArea';

interface AppProps {
  events: CareEvent[];
  eventsLoading: boolean;
  requestEvents: (page?: number) => void;
  summary: Summary;
  summaryLoading: boolean;
  requestSummary: () => void;
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

const AppContainer = styled.div`
  padding: 0 25px;
  max-width: 800px;
  margin: 0 auto;
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
    this.props.requestSummary();
  }

  getMoreEvents() {
    this.props.requestEvents(this.state.page + 1);
    this.setState({ ...this.state, page: this.state.page + 1 });
  }

  public render() {
    const { events, eventsLoading, summary, summaryLoading } = this.props;
    return (
      <>
        <GlobalStyle />
        <Banner />
        <AppContainer>
          {summaryLoading || !summary ? (
            <div>Loading Summary...</div>
          ) : (
            <SummaryArea summary={summary} />
          )}

          {eventsLoading && events.length <= 0 ? (
            <div>Loading Events...</div>
          ) : (
            <>
              <CareEventList events={events} />
              <LoadMoreEvents onClick={() => this.getMoreEvents()}>
                {eventsLoading ? 'Loading...' : 'Get More Events'}
              </LoadMoreEvents>
            </>
          )}
        </AppContainer>
      </>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  events: state.eventData.events,
  eventsLoading: state.eventData.loading,
  summary: state.summaryData.summary,
  summaryLoading: state.summaryData.loading,
});

const mapDispatchToProps = (dispatch: Dispatch<RootState>) => ({
  requestEvents: (page = 0) => dispatch(requestEvents(page)),
  requestSummary: () => dispatch(requestSummary()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
