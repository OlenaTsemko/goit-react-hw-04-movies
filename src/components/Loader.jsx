import RingLoader from 'react-spinners/RingLoader';
import { css } from '@emotion/core';

const loader = css`
  display: block;
  margin: 0 auto;
`;

const Loader = () => <RingLoader css={loader} />;

export default Loader;
