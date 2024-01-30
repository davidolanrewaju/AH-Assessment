import CurrencyConverter from "../../components/WeatherDisplay/WeatherDisplay";
import Footer from "../../components/Footer/Footer";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import Login from "../../components/Login/Login";
import Nav from "../../components/Nav/Nav";
import "./LoginPage.css";
function LoginPage() {
  return (
    <>
      <Nav />
      <CurrencyConverter/>
      <div className="login-view">
        <Login />
        <ImageSlider />
      </div>
      <Footer/>
    </>
  );
}

export default LoginPage;
