import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { replaceAt } from 'react-query/types/core/utils';
import { TextField } from '../components/TextField';

export const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const {replace} = useHistory();

  const register = () => {
    axios
      .post('http://localhost:1337/api/auth/local/register', {
        username: name,
        email: email,
        password: password,
        phone: phone,
      })
      .then((response) => {
        // Handle success.
        console.log('Well done!');
        console.log('User profile', response.data.user);
        console.log('User token', response.data.jwt);
        localStorage.setItem('token', response.data.jwt);
        replace("/home");
      })
      .catch((error) => {
        // Handle error.
        console.log('An error occurred:', error.response);
      });
  }


  return (

    <div className="m-4">
      <div className="text-4xl font-bold mb-10 font-lobster mt-32 text-center text-yellow-200">Signup Page</div>
      <div>
        <TextField label="이름" placeholder="이름을 입력해주세요."
          value={name}
          onChange={(event) => {
            setName(event.target.value);

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
            setPassword(event.target.value);

          }} />
        <div className="mb-4"></div>
        <TextField label="전화번호" placeholder="전화번호를 입력해주세요."
          value={phone}
          onChange={(event) => {
            setPhone(event.target.value);

          }} />
      </div>
      <div>
        <div className="border-2 border-yellow-700 rounded-full text-xl text-center py-4 font-semibold mt-7 bg-yellow-300 font-lobster text-white" onClick={() => {
          register();
        }}>
          Sign-in
        </div>
      </div>
    </div>
  );
};
