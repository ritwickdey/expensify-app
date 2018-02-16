import { authReducer } from '../../reducers/auth';

test('should set uid for login', () => {
  const uid = '1234-foo-uid';
  const state = authReducer(undefined, {
    type: 'LOGIN',
    uid
  });

  expect(state.uid).toBe(uid);
});

test('should clear uid for logout', () => {
  const uid = '1234-foo-uid';
  const state = authReducer(undefined, {
    type: 'LOGOUT',
    uid
  });

  expect(state.uid).toBeFalsy();
});
