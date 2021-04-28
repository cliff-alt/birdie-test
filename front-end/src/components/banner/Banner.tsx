import * as React from 'react';
import Logo from '@App/components/banner/Logo';
import styled from 'styled-components';

const LogoUrl = require('../../assets/images/logo-birdie.svg');

const BannerContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 40px;
  background-color: #533a90;
  display: flex;
  align-items: center;
  padding-left: 10px;
  z-index: 100;
`;

const Banner = () => (
  <BannerContainer>
    <Logo src={LogoUrl} />
  </BannerContainer>
);

export default Banner;
