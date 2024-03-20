import { getAuthToken } from '@/utils/getToken'
import { destroyCookie, setCookie } from 'nookies'

import React, { useState, useMemo, useCallback, useContext } from 'react'
import { Maybe } from 'yup'

interface AuthContextValue {
  token: Maybe<string>
  signIn: (token: string) => void
  signout: () => void
}

const AUTH_COOKIE = 'token'
export const AuthFormContext = React.createContext({} as AuthContextValue)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [userToken, setUserToken] = useState<AuthContextValue['token']>(() =>
    getAuthToken(),
  )
  const signIn = useCallback<AuthContextValue['signIn']>((token) => {
    setCookie(undefined, AUTH_COOKIE, token, {
      maxAge: 3600 * 24 * 7,
      path: '/',
    })
    setUserToken(token)
  }, [])

  const signout = useCallback<AuthContextValue['signout']>(() => {
    setUserToken(null)
    destroyCookie(undefined, AUTH_COOKIE)
  }, [])

  const value = useMemo<AuthContextValue>(
    () => ({
      token: userToken,
      signIn,
      signout,
    }),
    [userToken, signIn, signout],
  )

  return <AuthFormContext.Provider value={value}>{children}</AuthFormContext.Provider>
}

export function AuthContext() {
    return useContext(AuthFormContext)
  }
  
