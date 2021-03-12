import Div from 'components/atoms/Div';
import getTodayUtil from 'containers/Utilities/getToday';
import { authService, dbService, firebaseInstance } from 'fbase';
import React from 'react';

const SocialLogIn: React.FunctionComponent = () => {
  const onSocialClick = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    try {
      const {
        currentTarget: { name },
      } = event;

      console.log(name);

      // eslint-disable-next-line
      let provider: any;
      if (name === 'google') {
        provider = new firebaseInstance.auth.GoogleAuthProvider();
      } else if (name === 'facebook') {
        provider = new firebaseInstance.auth.FacebookAuthProvider();
      }

      const data = await authService.signInWithPopup(provider);
      console.log(data.operationType);

      // eslint-disable-next-line
      const alreadyUsed: any[] = [];
      await dbService
        .collection('users')
        .doc(`${data.user?.email}`)
        .get()
        .then((eachField) => {
          alreadyUsed.push(eachField.data());
        });

      if (!alreadyUsed[0]) {
        // 우선 해당 유저가 이미 가입 되어 있는지 확인한다. 없으면 유저정보 저장하기
        const hoy = getTodayUtil();
        dbService.collection('users').doc(`${data.user?.email}`).set({
          userName: data.user?.displayName,
          email: data.user?.email,
          createdAt: hoy,
          userEngName: '영문 이름을 적어주세요.',
          point: 0,
          loginWith: name,
          userId: data.user?.uid,
        });
      }
    } catch (err) {
      console.error(err.message);
      alert(err.message);
    }
  };

  return (
    <Div className="authBtns">
      <button onClick={onSocialClick} name="facebook" className="authBtn_facebook">
        <i className="fab fa-facebook-f"></i>
        페이스북으로 로그인
      </button>
      <button onClick={onSocialClick} name="google" className="authBtn_google">
        <img src="https://img.icons8.com/fluent/48/000000/google-logo.png" />
        구글로 로그인
      </button>
    </Div>
  );
};

export default SocialLogIn;
