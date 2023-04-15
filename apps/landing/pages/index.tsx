import { Button } from 'antd';
import styled from 'styled-components';
import { Header} from '@nx-dkcloud/shared';
import { Input } from '@nx-dkcloud/shared/util-data-entry';
import { useForm } from "react-hook-form";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import {useTranslation} from 'next-i18next'

const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  const {t} = useTranslation('common')
  const { handleSubmit, control, setValue } = useForm({
    defaultValues: {input: "",},
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <StyledPage>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> {t('h1')} </span>
              Welcome landing !
            </h1>
          </div>

          <Button type="primary" size="large">
            Button
          </Button>
          <Header />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder="Input"
            control={control}
            name="input"
          />
          <input type="submit" />
        </form>
      </div>
    </StyledPage>
  );
}


export async function getStaticProps({ locale }) {
  console.log('this is locale ==========>',locale)
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
      ])),
      // Will be passed to the page component as props
    },
  }
}

export default Index;
