import React from 'react';
import styled from 'styled-components';

import { LazyImage } from './LazyImage';
import { getSingleImage } from './img';

export interface Props {
  className?: string;
}

const Logo: React.FC<Props> = ({ className }) => (
  <h1 className={className}>
    <a href="/">
      <LazyImage image={getSingleImage('logo', 'png')} />
      Hosting
    </a>
  </h1>
);

const StyledLogo = styled(Logo)`
  a {
    display: flex;
    align-items: center;
    color: var(--header-elements-color);
    font-weight: 900;
    font-size: 2rem;
    letter-spacing: -0.005em;
    text-transform: uppercase;
    column-gap: 10px;
  }
`;

export { StyledLogo };
