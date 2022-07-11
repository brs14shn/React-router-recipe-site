import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const username = JSON.parse(sessionStorage.getItem("username"));

  return username ? <Outlet /> : <Navigate to="/home" />;
};
export default PrivateRouter;
