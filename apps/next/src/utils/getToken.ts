import { IncomingHttpHeaders } from 'http'
import { parseCookies } from 'nookies'
import { Maybe } from 'yup'

const getAuthToken = (): Maybe<string> => {
  const { AUTH_COOKIE: token } = parseCookies()
  return token
}

const getCookie = (headers: IncomingHttpHeaders): Maybe<HeadersInit> => {
  return headers.cookie ? { Cookie: headers.cookie } : null
}

export { getAuthToken, getCookie }
