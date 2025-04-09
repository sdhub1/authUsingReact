import React from 'react';
import { useForm } from 'react-hook-form';
import { useStore } from '../AuthStore';

export default function Login() {
  const {login} =useStore()
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {console.log(data)
    login()
  }
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
        <br />
      <input type="text" placeholder="email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
      <br />
      <input type="password" placeholder="password" {...register("password", {required: true})} />
<br />
      <input type="submit" />
    </form>
  );
}