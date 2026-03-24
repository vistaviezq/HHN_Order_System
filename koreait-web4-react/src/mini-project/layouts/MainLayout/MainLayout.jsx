/** @jsxImportSource @emotion/react */
import * as s from "./styles";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

export default function MainLayout() {
  return (
    <div css={s.layout}>
      <Header />
      <main css={s.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
