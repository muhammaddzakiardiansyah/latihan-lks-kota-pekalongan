import { useState } from "react";

const CreateCandidatePage = () => {

    const [data, setData] = useState({
        name_candidate: "",
    })
    return (
        <div className="flex justify-center items-center">
            <div className="w-[30%] h-auto bg-tree">
                <div className="">
                    <label htmlFor="name_candidate">Nama Kandidat</label>
                    <input type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" />
                </div>
            </div>
        </div>
    )
}

export default CreateCandidatePage;