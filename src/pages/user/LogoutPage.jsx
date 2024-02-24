import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const LogoutPage = () => {
    const navigate = useNavigate();
    localStorage.removeItem("token");
    localStorage.removeItem("full_name");
    localStorage.removeItem("role");
    localStorage.removeItem("user_id");
    Swal.fire({
        title: 'Success Logout',
        icon: 'success',
        timer: 1000
    });
    setTimeout(() => {
        navigate('/data-perhitungan-suara');
    }, 1000);
}

export default LogoutPage;