// base
import React from 'react';
import styled from 'styled-components';

// screen
import { Button, Form, Input } from 'antd';

const Wrapper = styled(Form)`
  display: flex;
  margin-bottom: 16px;
  border: 1px solid #d9d9d9;
  padding: 16px;
  border-radius: 4px;

  input {
    top: 0;
  }
  
  button {
    margin-left: 8px;
  }
`;

const NicknameEditForm = () => (
  <Wrapper>
    <Input addonBefore="닉네임" />
    <Button type="primary">수정</Button>
  </Wrapper>
);

export default NicknameEditForm;
