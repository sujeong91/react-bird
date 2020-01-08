// base
import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import { useSelector } from 'react-redux';

// screen
import {
  Form, Input, Checkbox, Button,
} from 'antd';

// skills
import { useInput } from '../utils';

const Wrapper = styled(Form)`
  .title {
    font-size: 28px;
  }
  .form-wrapper {
    margin-bottom: 12px;
  }
  label {
    margin-bottom: 4px;
    display: block;
  }
  .error {
    color: red;
  }
  .term {
    padding-top: 20px;
    label {
      margin: 0;
    }
  }
  .button-wrapper {
    margin-top: 32px;
  }
`;

const Signup = () => {
  const [passwordCheck, setPasswordCheck] = useState('');
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);

  const [userId, onChangeUserId] = useInput('');
  const [nick, onChangeNick] = useInput('');
  const [password, onChangePassword] = useInput('');

  const { me } = useSelector((state) => state.user);

  useEffect(() => {
    if (me) {
      alert('로그인했으니 메인페이지로 이동합니다.');
      Router.push('/');
    }
  }, [me && me.id]);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    // console.log({
    //   userId,
    //   nick,
    //   password,
    //   passwordCheck,
    //   term,
    // });
    return false;
  }, [password, passwordCheck, term]);

  const onChangePasswordCheck = useCallback((e) => {
    setPasswordError(e.target.value !== password);
    setPasswordCheck(e.target.value);
  }, [password]);

  const onChangeTerm = useCallback((e) => {
    setTermError(false);
    setTerm(e.target.checked);
  }, []);

  return (
    <Wrapper onSubmit={onSubmit}>
      <p className="title">회원가입</p>
      <div className="form-wrapper">
        <label>아이디</label>
        <Input name="user-id" value={userId} required onChange={onChangeUserId} />
      </div>
      <div className="form-wrapper">
        <label>닉네임</label>
        <Input name="user-nick" value={nick} required onChange={onChangeNick} />
      </div>
      <div className="form-wrapper">
        <label>비밀번호</label>
        <Input name="user-password" type="password" value={password} required onChange={onChangePassword} />
      </div>
      <div className="form-wrapper">
        <label>비밀번호체크</label>
        <Input
          name="user-password-check"
          type="password"
          value={passwordCheck}
          required
          onChange={onChangePasswordCheck}
        />
        {passwordError && <div className="error">비밀번호가 일치하지 않습니다.</div>}
      </div>
      <div className="term">
        <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>react-bird의 이용약관에 동의합니다.</Checkbox>
        {termError && <div className="error">약관에 동의하셔야 합니다.</div>}
      </div>
      <div className="button-wrapper">
        <Button type="primary" htmlType="submit">가입하기</Button>
      </div>
    </Wrapper>
  );
};

export default Signup;
