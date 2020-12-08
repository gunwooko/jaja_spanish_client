import { authService, firebaseInstance } from 'fbase';
import React from 'react';

const SocialLogIn: React.FunctionComponent = () => {
  const onSocialClick = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const {
      currentTarget: { name },
    } = event;

    console.log(name);

    let provider: any;
    if (name === 'google') {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === 'facebook') {
      provider = new firebaseInstance.auth.FacebookAuthProvider();
    }
    const data = await authService.signInWithPopup(provider);
    console.log(data.operationType);
  };

  return (
    <div className="authBtns">
      <button onClick={onSocialClick} name="google" className="authBtn">
        Continue with Google
        {/* <FontAwesomeIcon icon={faGoogle} /> */}
      </button>
      <button onClick={onSocialClick} name="facebook" className="authBtn">
        Continue with Facebook
        {/* <FontAwesomeIcon icon={faGithub} /> */}
      </button>
    </div>
  );
};

export default SocialLogIn;
