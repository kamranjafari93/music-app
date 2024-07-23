"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { ReactNode } from "react";
import store from "@/store";
import { Provider } from "react-redux";
import ErrorBoundary from "@/components/Error/ErrorBoundary";

const queryClient = new QueryClient();

interface ClientProviderProps {
  children: ReactNode;
}

const ClientProvider = ({ children }: ClientProviderProps) => {
  return (
    <>
      <ErrorBoundary>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </Provider>
      </ErrorBoundary>
    </>
  );
};

export default ClientProvider;
