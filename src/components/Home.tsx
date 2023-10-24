function Home() {
  return (
    <div className="bg-background font-mono w-screen h-screen pt-6" id="home">
      {/* navbar start */}
      <div className="flex justify-between pl-10 font-bold">
        {/* logo + title */}
        <div className="flex items-center">
          <img className=" w-20 h-20 rounded-full" src="logo.png" />
          <h1 className=" text-base text-navbar pl-6">
            Bilgisayar
            <br /> Mühendisliği
            <br /> Topluluğu
          </h1>
        </div>
        {/* navbar items */}
        <div className="text-navbar text-lg w-3/6 flex items-center justify-evenly">
          <div>
            <a href="#home">Anasayfa</a>
          </div>
          <div>
            <a href="#about">Hakkımızda</a>
          </div>
          <div>
            <a href="#announcements">Duyurular</a>
          </div>
          <div>
            <a href="#contact">İletişim</a>
          </div>
        </div>
      </div>
      <div className="w-full h-px bg-line mt-4"></div>
      {/* content start*/}
      <div className=" h-3/5 flex items-center justify-center flex-col">
        <p className="text-5xl text-content">Gazi Üniversitesi</p>
        <div className="mt-4">
          <p className="text-2xl text-white">
            Bilgisayar Mühendisliği Topluluğu
          </p>
        </div>
      </div>
      {/* buttons start*/}
      <div className="flex justify-center">
        <button className=" w-36 h-12 mr-4 text-content hover:bg-sky-300 hover:text-line hover:scale-[115%] transition ease-in-out delay-150 border-solid border-2 border-line bg-line rounded-2xl text-xl font-semibold px-3 py-2">
          Üye Ol
        </button>
        <button className=" w-36 h-12 text-line hover:bg-sky-300 hover:text-content hover:scale-[115%] transition ease-in-out delay-150 border-solid border-2 border-content bg-content rounded-2xl text-xl font-semibold px-3 py-2">
          Giriş Yap
        </button>
      </div>
    </div>
  );
}

export default Home;
