import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SharedUtilDataEntryProps {}

const StyledSharedUtilDataEntry = styled.div`
  color: pink;
`;

export function SharedUtilDataEntry(props: SharedUtilDataEntryProps) {
  return (
    <StyledSharedUtilDataEntry>
      <h1>Welcome to SharedUtilDataEntry!</h1>
    </StyledSharedUtilDataEntry>
  );
}

export default SharedUtilDataEntry;
