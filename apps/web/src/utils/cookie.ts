"use server"
import { cookies } from 'next/headers'
import { destroyCookie, setCookie } from 'nookies'

export async function getCookie(key: string) {
  const cookieStore = cookies()
  const cookie = cookieStore.get(key)

  return cookie
}

export async function createToken(key: string) {
  setCookie(undefined, 'token', key, {
    maxAge: 3600 * 24 * 7,
    path: '/',
  })
}

export async function logout () {
  destroyCookie(undefined, 'token')
}