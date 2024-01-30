import ImageSlider from "../../components/ImageSlider/ImageSlider";
import Login from "../../components/Login/Login";
import Nav from "../../components/Nav/Nav";
import "./LoginPage.css";
function LoginPage() {
  return (
    <>
      <Nav />
      <div className="login-view">
        <Login />
        <ImageSlider />
      </div>
    </>
  );
}

export default LoginPage;
