import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter as MainRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      {/* <ThemeProvider theme={defaultTheme}> */}
        <MainRouter>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </MainRouter>
      {/* </ThemeProvider> */}
    {/* </Provider> */}
  </React.StrictMode>
)
