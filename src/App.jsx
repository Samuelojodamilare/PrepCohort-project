import React, { Suspense, lazy, useEffect, useState } from "react";
import { ApolloProvider } from "@apollo/client";
import ApolloClientInstance from "./services/graphqlClient";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
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
  const [RouterComponent, setRouterComponent] = useState(null);
  const [RoutesComponent, setRoutesComponent] = useState(null);

  useEffect(() => {
    const loadComponents = async () => {
      // Dynamically import Router based on the environment
      const { StaticRouter } = await import("react-router-dom");
      const { BrowserRouter } = await import("react-router-dom");
      const { Routes, Route } = await import("react-router-dom");

      if (typeof window === "undefined") {
        setRouterComponent(() => StaticRouter);
      } else {
        setRouterComponent(() => BrowserRouter);
      }

      setRoutesComponent(() => ({ Routes, Route }));
    };

    loadComponents();
  }, []);

  if (!RouterComponent || !RoutesComponent) {
    // Render loading state until all components are loaded
    return <p>Loading...</p>;
  }

  const { Routes, Route } = RoutesComponent;

  return (
    <ApolloProvider client={ApolloClientInstance}>
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
    </ApolloProvider>
  );
}

export default App;
