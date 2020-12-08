import { authService } from 'fbase';
import React, { useState } from 'react';

const AuthForm: React.FunctionComponent = (): React.ReactElement => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      let data;
      if (newAccount) {
        // create account
        data = await authService.createUserWithEmailAndPassword(email, password);
      } else {
        // Log In
        data = await authService.signInWithEmailAndPassword(email, password);
      }
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };

  const toggleAccount = () => setNewAccount((prev) => !prev);

  return (
    <>
      <form onSubmit={onSubmit}>
        <input name="email" type="text" placeholder="이메일" required value={email} onChange={onChange} />
        <input
          name="password"
          type="password"
          placeholder="비밀번호(8자이상)"
          required
          value={password}
          onChange={onChange}
        />
        <input type="submit" value={newAccount ? '회원가입' : '로그인'} />
        {error && <span className="authError">{error}</span>}
      </form>
      <span onClick={toggleAccount} className="authSwitch">
        {newAccount ? '로그인' : '회원가입'}
      </span>
    </>
  );
};

export default AuthForm;
