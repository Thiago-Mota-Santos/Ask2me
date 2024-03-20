"use client"
import * as yup from 'yup';
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-relay'
import { yupResolver } from '@hookform/resolvers/yup';


import { useRouter } from 'next/navigation'

import Link from 'next/link'
import { toast } from '@repo/ui/index';
import { loginMutation$data } from '../../__generated__/loginMutation.graphql';
import { LoginMutation } from '@/components/auth/mutation/login';
import { AuthContext } from '@/context/AuthContext';

const schema = yup.object({
    email: yup.string().email('Invalid email address').required('Required').trim(),
    password: yup.string().required('Required').trim(),
});

const resolver = yupResolver(schema);

type FormValues = yup.InferType<typeof schema>;

export default function Login() {
    const router = useRouter()
    const { register, handleSubmit } = useForm<FormValues>({
        resolver,
});
  const { signIn } = AuthContext()
  const [submit] = useMutation(LoginMutation)

  function handleLogin({ email, password }: FormValues) {
   
    submit({
      variables: {
        email,
        password,
      },
      onError(error) {
        if (error.name === 'TypeError'){
            toast.error("Uh oh! Something went wrong", {
                description: "Connection failed",
            })
        } 
        toast.error("Uh oh! Something went wrong", {
            description: "Login failed",
        })
      },
      onCompleted(response: {} | null) {
        const { userLoginMutation } = response as loginMutation$data;
        const token = userLoginMutation?.token ?? ''
        const username = userLoginMutation?.me?.username

        toast(`Welcome ${username} 🎉`, {
            description: "Create a profile now!"
        })

        signIn(token)
        router.push('/')
      },
    })
  }
  return (
    <main className="mx-auto h-full max-w-md p-6">
      <div className="mt-7 rounded-xl border border-gray-200 bg-white  dark:border-gray-700 dark:bg-gray-800">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Sign in
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Do not have an account yet?
              <Link
                className="ml-[2px] font-medium text-blue-600 decoration-2 hover:underline"
                href="/auth/register"
              >
                Sign up here
              </Link>
            </p>
          </div>

          <div className="mt-5">
            <div className="mb-4 border-t border-solid border-gray-200"></div>

            <form onSubmit={handleSubmit(handleLogin)}>
              <div className="grid gap-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm dark:text-white"
                  >
                    Email address
                  </label>
                  <div className="relative">
                    <input
                      {...register('email')}
                      type="email"
                      id="email"
                      name="email"
                      className="block w-full rounded-md border border-gray-600 px-4 py-3 text-sm focus:shadow-sm-0 focus:outline-none focus:ring-1 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
                      required
                      aria-describedby="email-error"
                    />
                    <div className="pointer-events-none absolute inset-y-0 right-0 hidden items-center pr-3">
                      <svg
                        className="h-5 w-5 text-red-500"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>
                  <p
                    className="mt-2 hidden text-xs text-red-600"
                    id="email-error"
                  >
                    Please include a valid email address so we can get back to
                    you
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="mb-2 block text-sm dark:text-white"
                    >
                      Password
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      {...register('password')}
                      type="password"
                      id="password"
                      name="password"
                      className="block w-full rounded-md border border-gray-600 px-4 py-3 text-sm focus:shadow-sm-0 focus:outline-none focus:ring-1 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
                      required
                      aria-describedby="password-error"
                    />
                    <div className="pointer-events-none absolute inset-y-0 right-0 hidden items-center pr-3">
                      <svg
                        className="h-5 w-5 text-red-500"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <button className="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-brandblue px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800">
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

