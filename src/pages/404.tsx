import React from 'react';
import { Result, Button } from 'antd';
import router from 'umi/router';

const NoFoundPage = () => (
  <div
    style={{
      marginTop: '80px',
    }}
  >
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={() => router.push('/')}>
          Back Home
        </Button>
      }
    />
  </div>
);

export default NoFoundPage;
