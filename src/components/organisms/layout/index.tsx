import { FC } from "react";
import { LayoutProps } from "./type";
import Header from "../header";
import Footer from "../footer";

const Layout: FC<LayoutProps> = ({
  children
}) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

export default Layout