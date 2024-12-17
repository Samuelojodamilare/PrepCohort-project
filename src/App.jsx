import React, { Suspense, lazy } from "react";
import { ApolloProvider } from "@apollo/client";
import ApolloClientInstance from "./services/graphqlClient";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { Route, Routes } from "react-router-dom";
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
      <Header />
      <Routes>
        <Route index path="/" element={<PageOne />} />
        <Route path="/schools" element={<PageTwo />} />
      </Routes>
      {/* <Suspense fallback={<p>Loading section...</p>}>
        </Suspense> */}
      <Footer />
    </ApolloProvider>
  );
}

export default App;
