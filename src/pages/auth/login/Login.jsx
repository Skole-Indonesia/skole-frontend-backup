import React from "react";
import Auth from "../../../components/auth/Auth";

const index = () => {
  return (
    <Auth
      redirectDewantaraMuda="/masuk/dewantara-muda"
      redirectKonselor="/masuk/konselor"
      redirectMardika="/masuk/mardika"
      description="Belum punya akun? "
      redirect="/register"
      redirectName="Daftar"
    />
  );
};

export default index;
