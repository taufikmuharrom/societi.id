import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import { appRoutes } from "./routers";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {


  return (
    <div className="min-h-screen">
      <BrowserRouter>
        <Header />
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
      </BrowserRouter>
      {/* <div className="h-[100rem] mx-auto lg:max-w-7xl md:items-center md:px-8">


      </div> */}
    </div>
  )
}

export default App
