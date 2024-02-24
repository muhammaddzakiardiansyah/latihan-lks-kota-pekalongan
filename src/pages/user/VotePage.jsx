import { useEffect, useState } from "react";
import Navbar from "../../components/Fragments/Navbar";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const VotePage = () => {

  const [selectedCandidate, setSelectedCandidate] = useState({
    user_id: "",
    vote: "",
  });
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
 
  const user_id = localStorage.getItem("user_id") ?? ' ';
  const navigate = useNavigate();

  const handleCandidateSelection = (itemId) => {
    setSelectedCandidate({
      user_id: user_id,
      vote: itemId,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(selectedCandidate.user_id == '' && selectedCandidate.vote == '') {
      Swal.fire({
        title: "Gagal memilih!",
        text: 'Kamu belum memilih loo',
        icon: 'error',
        timer: 1500,
        showConfirmButton: false,
      });
    } else {
      axios({
        method: 'POST',
        url: 'http://localhost:3001/api/v1/votes',
        data: selectedCandidate
      }).then((res) => {
        Swal.fire({
          title: "Berhasil!",
          text: 'Terimakasih telah menggunakan suaramu!',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false,
        });
        setTimeout(() => {
          navigate('/data-perhitungan-suara');
        }, 1500);
      }).catch((err) => {
        Swal.fire({
          title: "Gagal memilih!",
          text: 'Sepertinya kamu telah menggunakan hak suaramu',
          icon: 'error',
          timer: 2000,
          showConfirmButton: false,
        });
        setTimeout(() => {
          navigate('/data-perhitungan-suara');
        }, 2000);
      })
    }
  };
  
  useEffect(() => {
    setLoading(true);
    axios({
      method: 'GET',
      url: 'http://localhost:3001/api/v1/candidate',
    }).then((res) => setData(res.data.body.data))
    .catch((err) => console.log(err))
    .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    document.title = 'Vara ● Pemilihan'
  }, []);

  return (
    <>
      <Navbar />
      <div className="container pt-20 mx-auto">
        <h2 className="text-center font-semibold text-3xl mb-10">
          Daftar Calon Ketua Osis
        </h2>
        <div className="form w-[70vw] mx-auto">
          <form onSubmit={handleSubmit}>
            <div className={`grid ${data.length >= 3 ? 'grid-cols-3' : 'grid-cols-2'} gap-4 justify-center items-center`}>
              {data.map((item, index) => (
                <div
                  className="border border-second p-3 box-border rounded-lg w-full"
                  key={index}
                >
                  <img
                    src={`http://localhost:3001/images/uploads/${item.profile}`}
                    alt={item.profile}
                    className="w-full h-80 rounded-lg"
                  />
                  <div className="body mt-5 flex justify-between items-end">
                    <div>
                      <h2 className="text-xl font-semibold text-second">
                        {item.name_candidate}
                      </h2>
                      <p className="font-medium italic text-second">
                        " {item.slogan} "
                      </p>
                      <input
                        type="radio"
                        name="vote"
                        id="vote"
                        className="w-6 h-6 mt-5"
                        onChange={() => handleCandidateSelection(item.id)}
                      />
                    </div>
                    <h1 className="text-4xl font-bold text-second">
                      {item.candidate_number}
                    </h1>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-16">
              <button className="px-20 py-2 font-bold text-white bg-primary rounded flex mx-auto hover:scale-105">
                Kirim
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="mb-20"></div>
    </>
  );
};

export default VotePage;
