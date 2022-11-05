import 'reset-css/sass/_reset.scss';
import '../styles/globals.css'
import type { AppProps } from 'next/app'

import PZLayout from "../components/layouts/main/PZLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PZLayout {...pageProps}>
      <Component {...pageProps} />
    </PZLayout>
  )
}
