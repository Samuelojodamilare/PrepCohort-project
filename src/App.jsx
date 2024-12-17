import React, { Suspense, lazy } from "react";
import { ApolloProvider } from "@apollo/client";
import ApolloClientInstance from "./services/graphqlClient";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
<<<<<<< HEAD
=======
import { Route, Routes } from "react-router-dom";
>>>>>>> new-branch
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";

// Lazy load pages
// const PageOne = lazy(() => import("./pages/PageOne"));
// const PageTwo = lazy(() => import("./pages/PageTwo"));

const ErrorBoundary = ({ children }) => {
  try {
    return <>{children}</>;
  } catch (error) {
    return <p>Something went wrong!</p>;
  }
};

function App({ location }) {
  return (
    <ApolloProvider client={ApolloClientInstance}>
<<<<<<< HEAD
      <RouterComponent location={location} context={{}}>
        <Header />
        <Routes>
          <Route path="/" element={<PageOne />} />
          <Route path="/schools" element={<PageTwo />} />
        </Routes>
        {/* <Suspense fallback={<p>Loading section...</p>}>   
        </Suspense> */}
        <Footer />
      </RouterComponent>
=======
      <Header />
      <Routes>
        <Route index path="/" element={<PageOne />} />
        <Route path="/schools" element={<PageTwo />} />
      </Routes>
      {/* <Suspense fallback={<p>Loading section...</p>}>
        </Suspense> */}
      <Footer />
>>>>>>> new-branch
    </ApolloProvider>
  );
}

export default App;
