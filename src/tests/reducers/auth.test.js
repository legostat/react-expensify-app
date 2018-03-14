import authReducer from '../../reducers/auth';

test('should set user uid', () => {
  const uid = "sdfdsf134324dfdsdfdsfds";
  const action = {
    type: 'LOGIN',
    uid
  }
  const state = authReducer({}, action);
  expect(state).toEqual({uid});
});

test('should remove user uid', () => {
  let state = {
    uid: "sdfdsf134324dfdsdfdsfds"
  };
  const action = {
    type: 'LOGOUT'
  };
  state = authReducer(state, action);
  expect(state).toEqual({});
});