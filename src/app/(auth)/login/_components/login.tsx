"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoginForm, loginFormSchema } from "@/validations/auth-validation";
import React, { startTransition, useActionState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  INITIAL_LOGIN_FORM,
  INITIAL_STATE_LOGIN_FORM,
} from "@/constants/auth-constant";
import { login } from "../action";
import { Loader2 } from "lucide-react";

export const Login = () => {
  const form = useForm<LoginForm>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: INITIAL_LOGIN_FORM,
  });

  const [loginState, loginAction, isPendingLogin] = useActionState(
    login,
    INITIAL_STATE_LOGIN_FORM
  );

  const onSubmit = form.handleSubmit(async (data) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    startTransition(() => {
      loginAction(formData);
    });
  });

  useEffect(() => {
    if (loginState?.status === "error") {
      startTransition(() => {
        loginAction(null);
      });
    }
  }, [loginState]);

  return (
    <>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Welcome</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            Login to access Saewargi POS
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={onSubmit} action="" className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field: { ...rest } }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...rest}
                        type="email"
                        placeholder="Enter your email"
                        autoComplete="off"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field: { ...rest } }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        {...rest}
                        type="password"
                        placeholder="Enter your password"
                        autoComplete="off"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full mt-4">
                {isPendingLogin ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  "Login"
                )}
              </Button>
              
              <FormDescription className="text-sm text-muted-foreground mt-2">
                Don't have an account?{" "}
                <a href="/register" className="text-primary">
                  Register here
                </a>
                .
              </FormDescription>
              <FormMessage />
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
};
