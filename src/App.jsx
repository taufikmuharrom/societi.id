import Header from "./components/Header/Header";
import React, { Suspense } from 'react'
import { appRoutes } from "./routers";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from "./components/Footer/Footer";

function App() {

  const loading = (
    <div className="fixed w-full h-full left-0 top-0 flex justify-center items-center font-semibold text-lg">
      Loading...
    </div>
  )

  return (
    <div className="min-h-screen">
      <BrowserRouter>
        <Header />
        <Suspense fallback={loading}>
          <Routes>
            {appRoutes.map((route, idx) => {
              return (
                route.component && (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    element={<route.component />}
                  />
                )
              )
            })}
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default React.memo(App) 
