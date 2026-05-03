"use client";

import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

const Login = () => {
  return (
    <div className="border mx-auto w-full max-w-md py-10 mt-10 px-6 rounded-lg shadow">
      <h1 className="text-center text-2xl font-bold mb-6">Login</h1>
      <form>
        <div>
          <Form className="flex flex-col gap-4">
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
            >
              <Label>Email</Label>
              <Input placeholder="john@example.com" />
              <FieldError />
            </TextField>
            <TextField
              isRequired
              minLength={8}
              name="password"
              type="password"
              validate={(value) => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }
                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }
                if (!/[0-9]/.test(value)) {
                  return "Password must contain at least one number";
                }
                return null;
              }}
            >
              <Label>Password</Label>
              <Input placeholder="Enter your password" />
              <Description>
                Must be at least 8 characters with 1 uppercase and 1 number
              </Description>
              <FieldError />
            </TextField>
            <div>
              <Button
                type="submit"
                className="bg-emerald-900 w-full text-center text-white"
              >
                Login
              </Button>
            </div>
          </Form>
        </div>
      </form>
    </div>
  );
};

export default Login;
