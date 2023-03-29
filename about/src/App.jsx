import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Header from "home/Header";
import Footer from "home/Footer";
const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header/>
    <div class="text-center">
      <img
        src="https://avatars.githubusercontent.com/u/1812628?v=4"
        class="rounded-full w-32 mb-4 mx-auto"
        alt="Avatar"
      />
      <h5 class="text-xl font-medium leading-tight mb-2">Asım Sinan Yüksel</h5>
      <p class="text-gray-500">Yazılım Mühendisliği Dersi Micro-frontends Örneği</p>
    </div>
    <Footer/>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));