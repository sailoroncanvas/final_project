import React, { useState } from 'react';
import { TextField } from '../components/TextField';

export const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <div className="m-4">
      <div className="text-4xl font-bold mb-10 font-lobster mt-32 text-center text-yellow-200">Signup Page</div>
      <div>
        <TextField label="이름" placeholder="이름을 입력해주세요."
          value={name}
          onChange={(event) => {
            setEmail(event.target.value);

          }} />

        <div className="mb-4"></div>
        <TextField label="이메일" placeholder="이메일을 입력해주세요."
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);

          }} />
        <div className="mb-4"></div>
        <TextField label="비밀번호" placeholder="비밀번호를 입력해주세요."
          value={password}
          onChange={(event) => {
            setEmail(event.target.value);

          }} />
        <div className="mb-4"></div>
        <TextField label="전화번호" placeholder="전화번호를 입력해주세요."
          value={phone}
          onChange={(event) => {
            setEmail(event.target.value);

          }} />
      </div>
      <div>
        <div className="border-2 border-yellow-700 rounded-full text-gray-800 text-center py-4 font-semibold mt-7 bg-yellow-300">
          회원가입
        </div>
      </div>
    </div>
  );
};
