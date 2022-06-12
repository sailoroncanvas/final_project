import React from 'react';
import { TextField } from '../components/TextField';

export const SignupPage = () => {
  return (
    <div className="m-4">
      <div className="text-4xl font-bold mb-10 font-lobster mt-32 text-center text-yellow-200">Signup Page</div>
      <div>
        <TextField label="아이디" placeholder="아이디를 입력해주세요." />
        <div className="mb-4"></div>
        <TextField label="이메일" placeholder="이메일을 입력해주세요." />
        <div className="mb-4"></div>
        <TextField label="비밀번호" placeholder="비밀번호를 입력해주세요." />
        <div className="mb-4"></div>
        <TextField label="전화번호" placeholder="전화번호를 입력해주세요." />
      </div>
      <div>
        <div className="border-2 border-yellow-700 rounded-full text-gray-800 text-center py-4 font-semibold mt-7 bg-yellow-300">
          회원가입
        </div>
      </div>
    </div>
  );
};
