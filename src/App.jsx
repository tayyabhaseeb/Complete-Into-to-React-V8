import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";

import SearchParams from "./components/SearchParams";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Details from "./components/Details";

import {
  QueryClient,
  QueryClientProvider,
  useQueryClient,
} from "@tanstack/react-query";

// import fetchAll from "./fetchData/fetchAll";

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        cacheTime: Infinity,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));

//  const queryClient = useQueryClient();

//   useEffect(() => {
//     queryClient.prefetchQuery(['data'], fetchData);
//   }, [queryClient]);

//   return <DataComponent />;
// };
