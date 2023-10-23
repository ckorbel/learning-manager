"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";

interface LoginFormState {
  email: string;
  password: string;
}

const PageContainer = styled.div`
  background-color: #f9fafb;

  .input-container {
    padding: 12px;
  }

  .escape-form-container,
  .signin-container {
    padding-left: 12px;
    padding-right: 12px;
    margin-bottom: 12px;
  }
`;

const FormContainerStyled = styled.div`
  padding: 20px;
  border-radius: 5px;
  background-color: white;
  padding-top: 0px;
`;

const InputSyled = styled.input`
  border-radius: 5px;
`;

function LoginPage() {
  const router = useRouter();
  const [showPassword, toggleShowPassword] = useState<boolean>(false);
  const [loginFormData, setLoginForm] = useState<LoginFormState>({
    email: "",
    password: "",
  });

  function handlePasswordDisplay(): void {
    toggleShowPassword((prevState) => !prevState);
  }

  function handleFormUpdate(event: React.ChangeEvent<HTMLInputElement>): void {
    setLoginForm({
      ...loginFormData,
      [event.target.name]: event.target.value,
    });
  }

  function handleLogin(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    // future api call

    // TODO: some validation redirect to homepage
    router.push("/homepage");
  }

  return (
    <>
      <PageContainer className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <FormContainerStyled>
            <form className="mt-8 space-y-6" onSubmit={handleLogin}>
              <input type="hidden" name="remember" value="true" />
              <div className="-space-y-px rounded-md">
                <div className="input-container" style={{ paddingTop: "32px" }}>
                  <label>Email address</label>
                  <InputSyled
                    id="email"
                    name="email"
                    type="text"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Email"
                    onChange={handleFormUpdate}
                    value={loginFormData.email}
                  />
                </div>
                <div className="input-container">
                  <label>Password</label>
                  <InputSyled
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Password"
                    onChange={handleFormUpdate}
                    value={loginFormData.password}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between escape-form-container">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    onClick={handlePasswordDisplay}
                    value={showPassword ? "checked" : "notChecked"}
                  />
                  <label className="ml-2 block text-sm text-gray-900">
                    Show Password
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div className="signin-container">
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
                  Sign in
                </button>
              </div>
            </form>
          </FormContainerStyled>
        </div>
      </PageContainer>
    </>
  );
}

export default LoginPage;
