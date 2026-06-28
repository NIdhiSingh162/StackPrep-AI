import { Navigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

function ProtectedRoute({ children }: Props) {
  const token = localStorage.getItem("token");

  return token ? <>{children}</> : <Navigate to="/" />;
}

export default ProtectedRoute;