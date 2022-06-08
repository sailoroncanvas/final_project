import React from 'react';
import { TextField } from '../components/TextField';

export const SignupPage = () => {
  return (
    <div className="m-4">
      <div className="text-2xl font-bold mb-10">회원가입</div>
      <div>
        <TextField label="닉네임" placeholder="닉네임을 입력해주세요." />
        <div className="mb-4"></div>
        <TextField label="이메일" placeholder="이메일을 입력해주세요." />
        <div className="mb-4"></div>
        <TextField label="비밀번호" placeholder="비밀번호를 입력해주세요." />
        <div className="mb-4"></div>
        <TextField label="전화번호" placeholder="전화번호를 입력해주세요." />
      </div>
      <div>
        <div className="border-2 border-gray-800 rounded-md text-gray-800 text-center py-4 font-semibold mt-7">
          회원가입
        </div>
      </div>
    </div>
  );
};
