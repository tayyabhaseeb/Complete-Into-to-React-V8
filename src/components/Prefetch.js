// Prefetch.js
import React, { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import fetchAll from "./fetchData/fetchAll";

const Prefetch = () => {
  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.prefetchQuery(["search"], fetchAll);
  }, [queryClient]);

  return null;
};

export default Prefetch;
