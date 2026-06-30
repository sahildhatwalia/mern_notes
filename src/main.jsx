import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Searcprovider from './Searchcontext.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
// import { ContentProvider } from '../src/hooks/ContentApi/ContextCreate.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ContentProvider> */}
    <Provider store={store}>
    <Searcprovider>
    <App />
    </Searcprovider>
    {/* </ContentProvider> */}
    </Provider>
  </StrictMode>
)


