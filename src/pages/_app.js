import { Auth } from '@supabase/ui'
import { supabase } from '../lib/supabase'
import '../styles/globals.css'
import '../styles/table.css'

export default function MyApp({ Component, pageProps }) {
  return (
    // <main className={'dark'}>
    <main>
      <Auth.UserContextProvider supabaseClient={supabase}>
        <Component {...pageProps} />
      </Auth.UserContextProvider>
    </main>
  )
}
