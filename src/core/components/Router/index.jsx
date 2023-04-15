import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { actions, selectors } from '../LoginUser/store';
import { actions as alertActions } from '../Alert/store';
import Home from '../../../home/screen';
import SignIn from '../../../auth/components/SignIn';
import SignUp from '../../../auth/components/SignUp';
import RecoilButton from '../../../recoil/Button';

const Router = () => {
  const currentUser = selectors.useCurrentUser()
  const showError = alertActions.useDangerShow()
  const getCurrentUser = actions.useGetCurrentUser(showError)
  console.log(currentUser)

  useEffect(() => {
    getCurrentUser()
  }, [getCurrentUser])

  // ログインしてない時はsigninにリダイレクトさせる
  if (!currentUser) {
    console.log("currentUser~~~~~~~~~")
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* 上で宣言しているローティング以外にアクセスした場合はsigninにリダイレクトさせる */}
          <Route path="*" element={<Navigate to="/signin" replace />} />
        </Routes>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/recoil" element={<RecoilButton />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;