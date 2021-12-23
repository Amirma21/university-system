import React, { useEffect } from "react";
import { Provider, useSession, signIn } from "next-auth/client";

import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'



function MyApp({ Component, pageProps }) {
  return (
    <Provider
      options={{
        clientMaxAge: 0,
        keepAlive: 0,
      }}
      session={pageProps.session}
    >
      {Component.auth ? (
        <Auth>
          <Component {...pageProps} />
        </Auth>
      ) : (
        <Component {...pageProps} />
      )}
    </Provider>
  );
}

function Auth({ children }) {
  const [session, loading] = useSession();
  const isUser = !!session?.user;

  useEffect(() => {
    if (loading) return;
    if (!isUser) signIn();
  }, [isUser, loading]);

  if (isUser) {
    return children;
  }

  return (
    <div w="100vw" h="100vh">
      Loading...
    </div>
  );
}

export default MyApp;
