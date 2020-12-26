import Div from 'components/atoms/Div';
import { authService, dbService, firebaseInstance } from 'fbase';
import React, { useState } from 'react';
import useGetUserObject from 'Hooks/useGetUserObject';
import { useHistory } from 'react-router-dom';

interface Props {
  name_kr: string;
  name_en: string;
  email: string;
  point: number;
  loginWith: string;
}

const MyDetails: React.FunctionComponent<Props> = ({ name_kr, name_en, email, point }: Props) => {
  const [engNameEditMode, setEngNameEditMode] = useState(false);
  const [engName, setEngName] = useState('');
  const [passwordEditMode, setPasswordEditMode] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [deleteMode, setDeleteMode] = useState(false);
  const [password, setPassword] = useState('');

  const userObj = useGetUserObject();
  const history = useHistory();

  const onEngNameEditMode = () => setEngNameEditMode((prev) => !prev);
  const onPasswordEditMode = () => {
    if (userObj.loginWith === ('facebook' || 'google')) {
      alert('페이스북/구글 로그인을 한 경우 비밀번호 변경이 불가능합니다.');
    } else if (userObj.loginWith === 'email') {
      setPasswordEditMode((prev) => !prev);
    }
  };
  const onDeleteMode = async () => {
    if (userObj.loginWith === 'google') {
      const provider = new firebaseInstance.auth.GoogleAuthProvider();
      await authService.currentUser?.reauthenticateWithPopup(provider);
      await dbService
        .collection('users')
        .doc('deleted')
        .collection('user-who-left')
        .doc(`${userObj.email}`)
        .set(userObj);
      await dbService.collection('users').doc(`${userObj.email}`).delete();
      await authService.currentUser?.delete();
      history.push('/');
    } else if (userObj.loginWith === 'facebook') {
      const provider = new firebaseInstance.auth.FacebookAuthProvider();
      await authService.currentUser?.reauthenticateWithPopup(provider);
      await dbService
        .collection('users')
        .doc('deleted')
        .collection('user-who-left')
        .doc(`${userObj.email}`)
        .set(userObj);
      await dbService.collection('users').doc(`${userObj.email}`).delete();
      await authService.currentUser?.delete();
      history.push('/');
    } else if (userObj.loginWith === 'email') {
      setDeleteMode((prev) => !prev);
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;
    if (name === 'engName') {
      setEngName(value);
    } else if (name === 'newPassword') {
      setNewPassword(value);
    } else if (name === 'oldPassword') {
      setOldPassword(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const onEngNameChange = async () => {
    if (engName.length === 0) {
      await dbService.collection('users').doc(`${email}`).update({ userEngName: '영문 이름을 적어주세요' });
      onEngNameEditMode();
      window.location.replace('/mypage'); // 새로고침
    } else {
      await dbService.collection('users').doc(`${email}`).update({ userEngName: engName });
      onEngNameEditMode();
      window.location.replace('/mypage'); // 새로고침
    }
  };
  const doesPasswordIsCorrect = () => {
    const cPassword = /^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    return cPassword.test(newPassword);
  };
  const renderCorrectPwFeedbackMessage = () => {
    if (newPassword) {
      if (!doesPasswordIsCorrect()) {
        return <div className="invalid-feedback">비밀번호는 8자 이상, 숫자/특수문자를 포함해야합니다.</div>;
      }
    }
  };
  const confirmPasswordClassName = () => {
    if (newPassword) {
      return doesPasswordIsCorrect() ? 'is-valid' : 'is-invalid';
    }
  };
  const onPasswordChange = async () => {
    try {
      const cred = await firebaseInstance.auth.EmailAuthProvider.credential(userObj.email, oldPassword);
      await authService.currentUser?.reauthenticateWithCredential(cred);
      await authService.currentUser?.updatePassword(newPassword);
      onPasswordEditMode();
    } catch (err) {
      if (err) {
        alert(err.message);
      }
    }
  };
  // Delete User
  const onDeleteUser = async () => {
    try {
      const cred = await firebaseInstance.auth.EmailAuthProvider.credential(userObj.email, password);
      await authService.currentUser?.reauthenticateWithCredential(cred);
      await dbService
        .collection('users')
        .doc('deleted')
        .collection('user-who-left')
        .doc(`${userObj.email}`)
        .set(userObj);
      await dbService.collection('users').doc(`${userObj.email}`).delete();
      await authService.currentUser?.delete();
      onDeleteMode();
      history.push('/');
    } catch (err) {
      if (err) {
        alert(err.message);
      }
    }
  };

  return (
    <Div className="MyDetails_form">
      <div></div>
      <Div className="MyDetails">
        <Div className="myDetails_title" text="나의 정보"></Div>
        <Div className="myDetails_box">
          <Div className="myDetails_row">
            <span className="myDetails_subtitle">한글이름</span>
            <span className="myDetails_info">{name_kr}</span>
          </Div>
          <Div className="myDetails_row">
            <span className="myDetails_subtitle">영문이름</span>
            {engNameEditMode ? (
              <input
                name="engName"
                onChange={onChange}
                className="myDetails_info_editMode"
                placeholder="영문 이름을 적어주세요."
                required
              ></input>
            ) : (
              <span className="myDetails_info">{name_en}</span>
            )}
            {engNameEditMode ? (
              <button className="myDetails_btn" onClick={onEngNameChange}>
                확인
              </button>
            ) : (
              <button className="myDetails_btn" onClick={onEngNameEditMode}>
                수정
              </button>
            )}
          </Div>
          <Div className="myDetails_row">
            <span className="myDetails_subtitle">이메일</span>
            <span className="myDetails_info">{email}</span>
          </Div>
          <Div className="myDetails_row">
            <span className="myDetails_subtitle">적립금</span>
            <span className="myDetails_info">{point}</span>
            <button className="myDetails_btn">상세보기</button>
          </Div>
          <Div className="myDetails_row">
            <span className="myDetails_subtitle">비밀번호 변경</span>
            {passwordEditMode ? (
              <>
                <input
                  name="oldPassword"
                  type="password"
                  onChange={onChange}
                  className={`myDetails_info_editMode ${confirmPasswordClassName()}`}
                  placeholder="이전 비밀번호를 확인해주세요"
                  required
                />
                <input
                  name="newPassword"
                  type="password"
                  onChange={onChange}
                  className={`myDetails_info_editMode ${confirmPasswordClassName()}`}
                  placeholder="새로운 비밀번호을 적어주세요."
                  required
                ></input>
              </>
            ) : (
              <span className="myDetails_info">{}</span>
            )}

            {passwordEditMode ? (
              <>
                <button className="myDetails_btn" onClick={onPasswordChange}>
                  확인
                </button>
                {renderCorrectPwFeedbackMessage()}
              </>
            ) : (
              <button className="myDetails_btn" onClick={onPasswordEditMode}>
                수정
              </button>
            )}
          </Div>
        </Div>
        {deleteMode ? (
          <>
            <input
              className="myDetails_input_deleteMode"
              name="password"
              type="password"
              onChange={onChange}
              placeholder="비밀번호을 적어주세요."
              required
            ></input>
            <button className="myDatails_withdrawal_btn" onClick={onDeleteUser}>{`탈퇴하기 >`}</button>
          </>
        ) : (
          <button className="myDatails_withdrawal_btn" onClick={onDeleteMode}>{`회원탈퇴 >`}</button>
        )}
      </Div>
      <div></div>
    </Div>
  );
};

export default MyDetails;
