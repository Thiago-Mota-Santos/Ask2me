"use server"
import { cookies } from 'next/headers'
 
export default async function getCookie(key: string) {
  const cookieStore = cookies()
  const cookie = cookieStore.get(key)

  return cookie
}