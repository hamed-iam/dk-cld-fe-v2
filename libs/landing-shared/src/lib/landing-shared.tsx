import styled from 'styled-components';

/* eslint-disable-next-line */
export interface LandingSharedProps {}

const StyledLandingShared = styled.div`
  color: pink;
`;

export function LandingShared(props: LandingSharedProps) {
  return (
    <StyledLandingShared>
      <h1>Welcome to LandingShared!</h1>
    </StyledLandingShared>
  );
}

export default LandingShared;
