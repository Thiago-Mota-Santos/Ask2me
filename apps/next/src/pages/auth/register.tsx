"use client"

import * as yup from 'yup';
import Link from "next/link";
import {
  Form,
  FormField,
  FormControl,
  FormMessage,
  FormSubmit,
  FormLabel,
  toast,
} from "@repo/ui/index";
import { Input } from "@repo/ui/input";
import { Button } from "@repo/ui/button";
import { useMutation } from "react-relay";
import { useRouter } from "next/navigation";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { registerMutation$data,  } from '../../__generated__/registerMutation.graphql'
import { RegisterMutation } from '@/components/auth/mutation/register';
import { AuthContext } from '@/context/AuthContext';
import { parseCookies } from 'nookies';
import { GetServerSideProps } from 'next';

const schema = yup.object({
    email: yup.string().email('Invalid email address').required('Required').trim(),
    username: yup.string().required('Required').trim(),
    password: yup.string().required('Required').trim(),
});


const resolver = yupResolver(schema);

type FormValues = yup.InferType<typeof schema>;

export default function Register() {
  const { signIn } = AuthContext()
  const router = useRouter();
  const { register, handleSubmit } = useForm<FormValues>({
    resolver,
  });
  const [request] = useMutation(RegisterMutation);

  function onSubmit({ email, password, username }: FormValues) {
    request({
      variables: {
        email,
        password,
        username,
      },
      onError() {
        toast.error("Uh oh! Something went wrong", {
            description: "User already exists, try again"
        })
      },
      onCompleted(response: {} | null) {
        const { userRegisterMutation } = response as registerMutation$data;
        const token = userRegisterMutation?.token ?? "";
        const name = userRegisterMutation?.me?.username;
        toast(`Welcome ${name}`, {
            description: "Try to login now!",
        })
        signIn(token);
        router.push("/create");
      },
    });
  }

  return (
    <main className="mx-auto w-full max-w-md p-6">
    <div className="shadow-sm mt-7 rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
      <div className="p-4 sm:p-7">
        <div className="text-center">
          <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
            Sign up
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Already have an account?
            <Link
              className="ml-[2px] font-medium text-blue-600 decoration-2 hover:underline"
              href="/auth/login"
            >
              Sign in here
            </Link>
          </p>
        </div>

        <div className="mt-5">
          <div className="mb-4 border-t border-solid border-gray-200" />

          <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-y-4">
              <FormField name="email">
                <FormLabel
                  className="mb-2 text-sm dark:text-white"
                  htmlFor="email"
                >
                  Email address
                </FormLabel>
                <div className="relative">
                  <FormControl asChild>
                    <Input
                      aria-describedby="email-error"
                      className="block w-full rounded-md border border-gray-600 px-4 py-3 text-sm focus:shadow-sm-0 focus:outline-none focus:ring-1 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
                      id="email"
                      required
                      type="email"
                      {...register("email")}
                    />
                  </FormControl>
                  <div className="pointer-events-none absolute inset-y-0 right-0 hidden items-center pr-3">
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 text-red-500"
                      fill="currentColor"
                      height="16"
                      viewBox="0 0 16 16"
                      width="16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                    </svg>
                  </div>
                </div>
                <FormMessage className='text-red-600' match="valueMissing">Digite seu email</FormMessage>
              </FormField>

              <FormField name="username">
                <FormLabel
                  className="mb-2 flex flex-col-reverse  text-sm dark:text-white"
                  htmlFor="username"
                >
                  username
                </FormLabel>

                <div className="relative">
                  <FormControl asChild>
                    <Input
                      aria-describedby="username-error"
                      className="block w-full rounded-md border border-gray-600 px-4 py-3 text-sm focus:shadow-sm-0 focus:outline-none focus:ring-1 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
                      id="username"
                      required
                      type="text"
                      {...register("username")}
                    />
                  </FormControl>

                  <div className="pointer-events-none absolute inset-y-0 right-0 hidden items-center pr-3">
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 text-red-500"
                      fill="currentColor"
                      height="16"
                      viewBox="0 0 16 16"
                      width="16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                    </svg>
                  </div>
                </div>
                <FormMessage className='text-red-600' match="valueMissing">Digite seu nome</FormMessage>
              </FormField>

              <FormField name="password">
                <FormLabel
                  className="mb-2 flex flex-col-reverse  text-sm dark:text-white"
                  htmlFor="password"
                >
                  Password
                </FormLabel>
                <div className="relative">
                  <FormControl asChild>
                    <Input
                      aria-describedby="password-error"
                      className="block w-full rounded-md border border-gray-600 px-4 py-3 text-sm focus:shadow-sm-0 focus:outline-none focus:ring-1 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
                      id="password"
                      required
                      type="password"
                      {...register("password")}
                    />
                  </FormControl>

                  <div className="pointer-events-none absolute inset-y-0 right-0 hidden items-center pr-3">
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 text-red-500"
                      fill="currentColor"
                      height="16"
                      viewBox="0 0 16 16"
                      width="16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                    </svg>
                  </div>
                </div>
              </FormField>

              <FormSubmit asChild>
                <Button
                  className='className="py-3 dark:focus:ring-offset-gray-800" inline-flex h-12 items-center justify-center gap-2 rounded-md border border-transparent bg-brandblue px-4 text-sm font-semibold text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                  type="submit"
                >
                  Sign up
                </Button>
              </FormSubmit>
            </div>
          </Form>
        </div>
      </div>
    </div>
  </main>
  )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { 'token': token } = parseCookies(ctx)
  if (token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}
