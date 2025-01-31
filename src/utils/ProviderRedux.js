import React from 'react'
import { Provider } from 'react-redux'
import Store from '../redux/store/Store'
function ProviderRedux({children}) {
  return (
    <Provider store={Store}>
      {children}
    </Provider>
  )
}

export default ProviderRedux
