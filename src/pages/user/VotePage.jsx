import Navbar from "../../components/Fragments/Navbar";

const VotePage = () => {

    const dataCandidate = [
        {
            name_candidate: "M Irul",
            slogan: "Semangat Menuju perubahan",
            image: "profile.jpeg",
            serial_number: "01",
        },
        {
            name_candidate: "Jhon Doe",
            slogan: "Aku lapar",
            image: "profile.jpeg",
            serial_number: "02",
        },
        {
            name_candidate: "Susi",
            slogan: "life like larry",
            image: "profile.jpeg",
            serial_number: "03",
        },
        {
            name_candidate: "U X E C",
            slogan: "Kejayaan, Kemenangan, Kekayaan",
            image: "profile.jpeg",
            serial_number: "04",
        },
    ]
  return (
    <>
      <Navbar />
      <div className="container pt-20 mx-auto">
        <h2 className="text-center font-semibold text-3xl mb-10">Daftar Calon Ketua Osis</h2>
        <div className="form w-[70vw] mx-auto">
          <form action="" method="post">
            <div className="grid grid-cols-3 gap-4">
                {dataCandidate.map((item, index) => {
                    return (
                        <div className="border border-second p-3 box-border rounded-lg w-full" key={index}>
                            <img src={`/images/${item.image}`} alt={item.image} className="w-full rounded-lg" />
                            <div className="body mt-5 flex justify-between items-end">
                                <div>
                                <h2 className="text-xl font-semibold text-second">{item.name_candidate}</h2>
                                <p className="font-medium italic text-second">" {item.slogan} "</p>
                                <input type="radio" name={item.name_candidate} id="2" className="w-6 h-6 mt-5" />
                                </div>
                                <h1 className="text-4xl font-bold text-second">{item.serial_number}</h1>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="mt-16">
                <button type="submit" className="px-20 py-2 font-bold text-white bg-primary rounded flex mx-auto hover:scale-105">Kirim</button>
            </div>
          </form>
        </div>
      </div>
      <div className="mb-20"></div>
    </>
  );
};

export default VotePage;
