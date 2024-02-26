import axios from "axios";
import { useState } from "react";

const CreateCandidatePage = () => {
  const [data, setData] = useState({
    name_candidate: "",
    profile: "",
    slogan: "",
    candidate_number: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name_candidate", data.name_candidate);
    formData.append("profile", data.profile);
    formData.append("slogan", data.slogan);
    formData.append("candidate_number", data.candidate_number);
    axios({
      method: "POST",
      url: "http://localhost:3001/api/v1/candidate",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[50%] h-auto bg-tree p-5">
        <form onSubmit={handleSubmit}>
          <div className="my-2">
            <label
              htmlFor="name_candidate"
              className="block font-medium text-white mb-2"
            >
              Nama Kandidat
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-info w-full max-w-xs"
              onChange={(e) => setData(prevState => ({ ...prevState, name_candidate: e.target.value }))}
            />
          </div>
          <div className="my-2">
            <label
              htmlFor="name_candidate"
              className="block font-medium text-white mb-2"
            >
              Profile
            </label>
            <input
              type="file"
              className="file-input file-input-bordered file-input-info w-full max-w-xs"
              onChange={(e) => setData(prevState => ({ ...prevState, profile: e.target.files[0] }))}
            />
          </div>
          <div className="my-2">
            <label
              htmlFor="name_candidate"
              className="block font-medium text-white mb-2"
            >
              Slogan
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-info w-full max-w-xs"
              onChange={(e) => setData(prevState => ({ ...prevState, slogan: e.target.value }))}
            />
          </div>
          <div className="my-2">
            <label
              htmlFor="name_candidate"
              className="block font-medium text-white mb-2"
            >
              Nomor urut
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-info w-full max-w-xs"
              onChange={(e) => setData(prevState => ({ ...prevState, candidate_number: e.target.value }))}
            />
          </div>
          <button className="px-8 py-2 bg-primary rounded mt-10 block mx-auto mb-8">
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateCandidatePage;
