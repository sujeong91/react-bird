// base
import React, { useCallback } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

// screen
import { Button, Form, Input } from 'antd';
import { Loading } from '..';

// skill
import { useInput } from '../../utils';
import { loginRequestAction } from '../../reducers/user';

const Wrapper = styled(Form)`
  .form-wrapper {
    margin-bottom: 12px;
  }
  label {
    display: block;
    margin-bottom: 4px;
  }
  .button-wrapper {
    margin-top: 32px;

    button {
      margin-right: 12px;
    }
  }
`;

const LoginForm = () => {
  const [userId, onChangeUserId] = useInput('');
  const [password, onChangePassword] = useInput('');
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.user);

  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    dispatch(loginRequestAction({
      userId, password,
    }));
  }, [userId, password]);

  return (
    <Wrapper onSubmit={onSubmitForm}>
      <Loading isLoading={isLoading}>
        <div>
          <div className="form-wrapper">
            <label htmlFor="user-id">아이디</label>
            <Input
              id="user-id"
              name="user-id"
              value={userId}
              onChange={onChangeUserId}
              required
            />
          </div>
          <div className="form-wrapper">
            <label htmlFor="user-password">비밀번호</label>
            <Input
              name="user-password"
              value={password}
              onChange={onChangePassword}
              type="password"
              required
            />
          </div>
          <div className="button-wrapper">
            <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
            <Link href="/signup"><a><Button>회원가입</Button></a></Link>
          </div>
        </div>
      </Loading>
    </Wrapper>
  );
};

export default LoginForm;
