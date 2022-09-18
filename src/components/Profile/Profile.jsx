import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useAuth } from "../../context/AuthContext";
import { useMode } from "../../context/ModeContext";
import { handleToast } from "../../utils/toastUtils";
import "./Profile.css";
export const Profile = () => {
  const { user, logoutHandler } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    handleToast("Logout successful");
    setTimeout(() => {
      logoutHandler();
      navigate("/explore");
    }, 1500);
  };
  const { mode } = useMode();

  return (
    <>
      {/* <div className="profile" id={mode ? "dark" : ""}>
        <div className="profile-header">
          <h2>PROFILE</h2>
        </div>
        <div className="profile-body">
          <p>
            <span className="material-symbols-outlined">account_circle</span>
            {user ? user.firstName + " " + user.lastName : ""}
          </p>
          <p>
            <span className="material-symbols-outlined">mail</span>
             {user ? user.firstName + " " + user.lastName : ""}
          </p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
      <ToastContainer /> */}
    </>
  );
};
