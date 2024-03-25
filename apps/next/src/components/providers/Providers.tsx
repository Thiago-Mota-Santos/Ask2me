import React from 'react'
import { RelayEnvironmentProvider, useRelayEnvironment } from 'react-relay'

type ProvidersProps = { children: React.ReactNode }

const Providers = ({ children }: ProvidersProps) => {
  const environment = useRelayEnvironment()

  return (
    <RelayEnvironmentProvider environment={environment}>
      {children}
    </RelayEnvironmentProvider>
  )
}

export default Providers
