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
      {/* navbar end */}
      <div className="w-full h-px bg-line mt-3"></div>
      {/* content start*/}
      <div className="pl-10 h-3/5 flex items-center justify-center flex-col">
        <p className="text-4xl text-content">Birlikte Geleceğe!</p>
        <div className="text-2xl text-white">
          <p>
            Etkinliklerimizden haberdar olmak bizleri takip edin! Sizleri
            sektördeki isimlerle buluşturalım, etkinliklerimizle birbirimizi
            daha iyi tanıyalım.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
