import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { ThemeContextPrivider } from "../../contexts/ThemeContext";
import Header from "./Header";
import Footer from "./Footer";

const Inner = ({ children }) => {

  const {darkTheme} = useContext(ThemeContext)
  const layoutVersion = "Layout Version 2.0"
  return (
    <div className="container" data-theme={darkTheme ? "dark" : "light"}>
      <Header layoutVersion={layoutVersion}/>
      {children}
      <br />
      <Footer />
    </div>
  );
};


const Layout = (props) => {
  return (
    <ThemeContextPrivider>
    <Inner {...props} />
  </ThemeContextPrivider>
 )
}
export default Layout;
