import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faGoogle from '@fortawesome/fontawesome-free-brands/faGoogle';
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import {connect} from 'react-redux';
import {startLoginWithGoogle, startLoginWithFacebook, startLoginWithTwitter} from '../actions/auth';

export const LoginPage = ({startLoginWithGoogle, startLoginWithFacebook, startLoginWithTwitter}) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expensify</h1>
      <p className="box-layout__text">It's time to get your expenses under control.</p>
      <div className="box-layout__buttons">
        <button
        className="button button--login" 
        onClick={startLoginWithGoogle}>
          <FontAwesomeIcon icon={faGoogle} />
          Login with Google
        </button>
        <button 
          className="button button--login"
          onClick={startLoginWithFacebook}>
            <FontAwesomeIcon icon={faFacebook} />
            Login with Facebook
        </button>
        <button 
          className="button button--login" 
          onClick={startLoginWithTwitter}>
            <FontAwesomeIcon icon={faTwitter} />
            Login with Twitter
        </button>
      </div>
    </div>    
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLoginWithGoogle: () => dispatch(startLoginWithGoogle()),
  startLoginWithFacebook: () => dispatch(startLoginWithFacebook()),
  startLoginWithTwitter: () => dispatch(startLoginWithTwitter())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);