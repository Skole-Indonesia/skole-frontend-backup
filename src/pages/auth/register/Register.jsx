import React from "react";
import Auth from "../../../components/auth/Auth";

const Register = () => {
  return (
    <Auth
      redirectDewantaraMuda="/register/dewantara-muda"
      redirectKonselor="/register/konselor"
      description="Sudah punya akun? "
      redirect="/masuk"
      redirectName="Masuk"
    />
  );
};

export default Register;
