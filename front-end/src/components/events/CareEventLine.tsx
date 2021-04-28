import { CareEvent } from '@App/api/event';
import * as React from 'react';
import styled from 'styled-components';
import * as moment from 'moment';
import { useState } from 'react';

type CareEventLineProps = {
  careEvent: CareEvent;
};

const CareEventLineItem = styled.li`
  margin: 10px 0;
  display: flex;
  align-items: center;
`;

const Timestamp = styled.div`
  padding: 3px 5px;
  color: #fff;
  background-color: #54c5c1;
  border-radius: 3px;
  font-size: 14px;
`;

const CareEventDetail = styled.div`
  border-radius: 5px;
  background-color: white;
  padding: 15px;
  margin-left: 15px;
  flex-grow: 1;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 10px 10px 10px 0;
    border-color: transparent #ffffff;
    display: block;
    width: 0;
    z-index: 1;
    margin-top: -10px;
    left: -10px;
    top: 50%;
  }
`;

const CareEventType = styled.div`
  text-transform: capitalize;
  font-weight: bold;
  color: #444;
`;

const CareEventExtra = styled.div`
  padding-top: 8px;
`;

const CareEventReveal = styled.button`
  background: #fff;
  border: 1px solid #eee;
  padding: 3px 7px;
  border-radius: 3px;

  &:hover {
    cursor: pointer;
  }
`;

export const CareEventLine = ({ careEvent }: CareEventLineProps) => {
  const [reveal, setReveal] = useState(!careEvent.sensitive);

  return (
    <CareEventLineItem>
      <Timestamp>{moment(careEvent.timestamp).format('DD/MM/yyyy')}</Timestamp>
      <CareEventDetail>
        <CareEventType>{careEvent.type}</CareEventType>
        {careEvent.displayText ? (
          <CareEventExtra>
            {reveal ? (
              careEvent.displayText
            ) : (
              <CareEventReveal onClick={() => setReveal(true)}>
                Reveal Sensitive Information
              </CareEventReveal>
            )}
          </CareEventExtra>
        ) : null}
      </CareEventDetail>
    </CareEventLineItem>
  );
};
