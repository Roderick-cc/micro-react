import { Button, Result } from 'antd';
import React from 'react';
import { history } from 'umi';

export default (): React.ReactNode => {
  return (
    <div>

      <div onClick={() => { history.push('/welcome') }}>123123</div>

      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" onClick={() => history.push('/')}>
            Back Home
          </Button>
        }
      />
    </div>

  )

}

