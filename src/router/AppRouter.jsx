import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../pages/mainLayout/MainLayout";
import { FormattedMessage } from "react-intl";

const Gallery = React.lazy(() => import("simpsons/Gallery"));
const CharacterList = React.lazy(() => import("rickandmorty/CharacterList"));

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={
              <Suspense fallback={<FormattedMessage id="loading" />}>
                <Gallery FormattedMessage={FormattedMessage} />
              </Suspense>
            }
          />
          <Route
            path="/simpsons"
            element={
              <Suspense fallback={<FormattedMessage id="loading" />}>
                <Gallery FormattedMessage={FormattedMessage} />
              </Suspense>
            }
          />
          <Route
            path="/rickandmorty"
            element={
              <Suspense fallback={<FormattedMessage id="loading" />}>
                <CharacterList FormattedMessage={FormattedMessage} />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
