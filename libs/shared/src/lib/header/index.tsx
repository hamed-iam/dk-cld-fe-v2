import styled from 'styled-components';
import { Breadcrumb, Layout, Menu } from 'antd';
import { useForm } from "react-hook-form";
import { Input } from '@nx-dkcloud/shared/util-data-entry';


const { Header, Content, Footer } = Layout;

/* eslint-disable-next-line */
export interface HeaderProps {}

const StyledHeader = styled.div`
  color: pink;
`;

export function HeaderCmp(props: HeaderProps) {
  console.log(props)

  const { handleSubmit, control, setValue } = useForm({
    defaultValues: {input: "",},
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <StyledHeader>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            items={new Array(15).fill(null).map((_, index) => {
              const key = index + 1;
              return {
                key,
                label: `nav ${key}`,
              };
            })}
          />
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-content"
            style={{ background: 'red' }}
          >
            Content
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="Input"
          control={control}
          name="input"
        />
        <input type="submit" />
      </form>
    </StyledHeader>
  );
}

export default HeaderCmp;
