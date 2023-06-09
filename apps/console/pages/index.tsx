import { Button } from 'antd';
import styled from 'styled-components';

const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  return (
    <StyledPage>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome console !
            </h1>
          </div>

          <Button type='primary' size='large'>Button</Button>
        </div>
      </div>
    </StyledPage>
  );
}

export default Index;
