import { useNavigate, Navigate } from "react-router-dom";

import jwt_decode from "jwt-decode";
import { useEffect } from "react";

function RequireAuth({ page }) {
  let auth;
  try {
    auth = JSON.parse(sessionStorage.getItem("auth"))
  } catch (error) {
    return <Navigate to={"/login"} />;
  }

  if (!auth) {
    return <Navigate to={"/login"} />;
  } else {
    const decoded = jwt_decode(auth.token);
    if (!decoded.exp || decoded.exp <= Date.now() / 1000) {
      return <Navigate to={"/login"} />;
    }
  }

  return page;
}

export default RequireAuth;
