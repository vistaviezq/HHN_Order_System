import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { css, Global } from "@emotion/react";
import { ToastContainer } from "react-toastify";

const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  #root {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const queryClient = new QueryClient();

export default function Main() {
  return (
    <QueryClientProvider client={queryClient}>
      <Global styles={globalStyle}/>
      <ToastContainer 
        position="top-right"
        theme="light"
        autoClose={2500}
        closeOnClick
        pauseOnHover
        newestOnTop
      />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </QueryClientProvider>
  )
}
