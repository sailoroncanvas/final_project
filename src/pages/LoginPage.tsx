import React, { useState } from 'react';
import { TextField } from '../components/TextField';
import { useHistory } from 'react-router-dom';

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { push, replace } = useHistory();


  const checkUser = () => {
    if (email === "" || password === "") {
      alert("아이디와 비밀번호를 입력해주세요");
    }
  }




  return (
    <div className="m-4">
      <div className="text-4xl font-bold mb-10 text-center mt-32 font-lobster text-cyan-300">Login</div>
      <div>
        <div className="mb-4">
          <TextField
            placeholder="이메일을 입력해주세요."
            label="이메일"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>

        <TextField
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요."
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)} />
      </div>

      <div className="mt-10">
        <div
          className="bg-cyan-800 text-white text-center py-4 rounded-full"
          onClick={() => {
            checkUser();
          }}
        >
          로그인
        </div>
        <div className="text-center py-4 text-color-gray-800 border-gray-800 border mt-2 rounded-full">
          회원가입
        </div>
      </div>
    </div>
  );
};
