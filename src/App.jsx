import Header from "./components/Header/Header";
import React, { Suspense, useEffect, useState } from 'react'
import { appRoutes } from "./routers";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading/Loading";

function App() {
  const [loadData, isLoadData] = useState(true)
  const [innerWidth,setInnerWidth] = useState(window.innerWidth)

  useEffect(() => {
    setTimeout(() => isLoadData(false), 3000)
  }, [])


  return (
    <div className="min-h-screen">
      {/* <Loading /> */}
      <BrowserRouter>
        <Header />
        <Suspense fallback={<Loading />}>
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
