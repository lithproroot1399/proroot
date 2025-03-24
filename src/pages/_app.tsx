import { SessionProvider } from 'next-auth/react'

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export default function MyApp({ Component, pageProps }: any) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
