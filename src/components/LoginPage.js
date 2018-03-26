import React from 'react';
import {connect} from 'react-redux';
import {startLoginWithGoogle, startLoginWithFacebook, startLoginWithTwitter} from '../actions/auth';

export const LoginPage = ({startLoginWithGoogle, startLoginWithFacebook, startLoginWithTwitter}) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expensify</h1>
      <p className="box-layout__text">It's time to get your expenses under control.</p>
      <button className="button" onClick={startLoginWithGoogle}>Login with Google</button>
      <button className="button" onClick={startLoginWithFacebook}>Login with Facebook</button>
      <button className="button" onClick={startLoginWithTwitter}>Login with Twitter</button>
    </div>    
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLoginWithGoogle: () => dispatch(startLoginWithGoogle()),
  startLoginWithFacebook: () => dispatch(startLoginWithFacebook()),
  startLoginWithTwitter: () => dispatch(startLoginWithTwitter())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);