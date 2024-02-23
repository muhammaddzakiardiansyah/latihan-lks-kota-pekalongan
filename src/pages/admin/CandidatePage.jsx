import Navbar from "../../components/Fragments/Navbar"

const CandidatePage = () => {

    const dataCandidate = [
        {
          id: "123-abc-000",
          name_candidate: "M Irul",
          slogan: "Semangat Menuju perubahan",
          image: "profile.jpeg",
          serial_number: "01",
        },
        {
          id: "456-abc-000",
          name_candidate: "Jhon Doe",
          slogan: "Aku lapar",
          image: "profile.jpeg",
          serial_number: "02",
        },
        {
          id: "789-abc-000",
          name_candidate: "Susi",
          slogan: "life like larry",
          image: "profile.jpeg",
          serial_number: "03",
        },
        {
          id: "101112-abc-000",
          name_candidate: "U X E C",
          slogan: "Kejayaan, Kemenangan, Kekayaan",
          image: "profile.jpeg",
          serial_number: "04",
        },
      ];

    return (
        <>
        <Navbar />
        <div className="mt-5 mx-auto w-[80%] flex justify-end">
         <a href="#" className="px-8 py-2 rounded bg-primary">Tambah Kandidat</a>
        </div>
        <table className="border w-[80%] mx-auto mt-20">
            <thead>
                <tr>
                    <th>No.</th>
                    <th className="p-2">Profile Kandidat</th>
                    <th className="p-2">Nama Kandidat</th>
                    <th className="p-2">ID Kandidat</th>
                    <th className="p-2">Slogan Kandidat</th>
                    <th>Alat</th>
                </tr>
            </thead>
            <tbody>
                {dataCandidate.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td className="p-2">{index + 1}</td>
                            <td className="p-2">{item.image}</td>
                            <td className="p-2">{item.name_candidate}</td>
                            <td className="p-2">{item.id}</td>
                            <td className="p-2">{item.slogan}</td>
                            <td className="p-2 flex gap-x-2 justify-center">
                                <button className="px-8 py-2 rounded bg-red-400">Hapus</button>
                                <button className="px-8 py-2 rounded bg-yellow-400">Edit</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </>
    )
}

export default CandidatePage