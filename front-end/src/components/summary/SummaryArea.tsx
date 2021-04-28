import styled from 'styled-components';
import * as React from 'react';
import { Summary } from '@App/api/summary';
import * as moment from 'moment';

type SummaryAreaProps = {
  summary: Summary;
};

const SummaryWrapper = styled.div`
  background-color: white;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 25px;
`;

const SummaryAvatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border: 1px solid #ddd;
  background-color: #eee;
  font-family: monospace;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #aaa;
  font-size: 12px !important;
`;

const SummaryInfo = styled.div`
  text-align: center;
  font-size: 16px;
  text-transform: capitalize;

  > div {
    font-size: 18px;
    color: #555;
    margin-bottom: 10px;
  }
`;

export const SummaryArea = ({ summary }: SummaryAreaProps) => (
  <SummaryWrapper>
    <SummaryInfo>
      <SummaryAvatar>Profile Image</SummaryAvatar>
      Tom Nook
    </SummaryInfo>
    <SummaryInfo>
      <div>Latest Mood</div>
      {summary.latestMood}
    </SummaryInfo>
    <SummaryInfo>
      <div>Time Since Last Check-in</div>
      {moment(summary.mostRecentCheckIn).fromNow()}
    </SummaryInfo>
  </SummaryWrapper>
);
