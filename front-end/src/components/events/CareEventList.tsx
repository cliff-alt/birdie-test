import styled from 'styled-components';
import { CareEvent } from '@App/api/event';
import * as React from 'react';
import { CareEventLine } from '@App/components/events/CareEventLine';

type CareEventListProps = {
  events: CareEvent[];
};

const CareEventListWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative;

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: -10px;
    bottom: -30px;
    left: 40px;
    border-left: 2px dashed #ddd;
    z-index: -1;
  }
`;

export const CareEventList = ({ events }: CareEventListProps) => (
  <CareEventListWrapper>
    {events.map(event => (
      <CareEventLine key={event.id} careEvent={event} />
    ))}
  </CareEventListWrapper>
);
