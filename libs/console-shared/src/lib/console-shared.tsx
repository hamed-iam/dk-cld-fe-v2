import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ConsoleSharedProps {}

const StyledConsoleShared = styled.div`
  color: pink;
`;

export function ConsoleShared(props: ConsoleSharedProps) {
  return (
    <StyledConsoleShared>
      <h1>Welcome to ConsoleShared!</h1>
    </StyledConsoleShared>
  );
}

export default ConsoleShared;
