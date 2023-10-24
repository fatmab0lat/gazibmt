import React from "react";

function Home() {
  return (
    <div className="bg-background font-mono w-screen h-screen pt-6">
      {/* navbar start */}
      <div className="flex justify-between pl-10 font-bold">
        {/* logo + title */}
        <div className="flex items-center">
          <img className=" w-24 h-24 rounded-full" src="logo.png" />
          <h1 className=" text-xl text-navbar pl-6">
            Bilgisayar
            <br /> Mühendisliği
            <br /> Topluluğu
          </h1>
        </div>
        {/* navbar items */}
        <div className="text-navbar text-lg w-3/6 flex items-center justify-evenly">
          <div>Anasayfa</div>
          <div>Hakkında</div>
          <div>Duyurular</div>
          <div>İletişim</div>
        </div>
      </div>
      <div className="w-full h-px bg-line mt-3"></div>
      {/* content start*/}
      <div className="pl-10 h-3/5 flex items-center justify-center flex-col">
        <p className="text-5xl text-content">Gazi Üniversitesi</p>
        <div className="mt-4">
          <p className="text-2xl text-white">
            Bilgisayar Mühendisliği Topluluğu
          </p>
        </div>
      </div>
      {/* buttons start*/}
      <div className="pl-10 flex justify-center">
        <button className=" w-36 h-12 mr-4 text-content hover:bg-content hover:text-line hover:scale-110 transition ease-in-out delay-150 border-solid border-2 border-line bg-line rounded-2xl text-xl font-semibold pr-3 pl-3 pt-2 pb-2">
          Üye Ol
        </button>
        <button className=" w-36 h-12 text-line hover:bg-line hover:text-content hover:scale-110 transition ease-in-out delay-150 border-solid border-2 border-line bg-content rounded-2xl text-xl font-semibold pr-3 pl-3 pt-2 pb-2">
          Giriş Yap
        </button>
      </div>
    </div>
  );
}

export default Home;
