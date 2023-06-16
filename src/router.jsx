import { createBrowserRouter, Navigate } from "react-router-dom";

// Layout
import GuestLayout from "./pages/guestLayout";
import MainLayout from "./pages/mainLayout";

// Auth
import Register from "./pages/auth/register/Register";
import RegisterDewantaraMuda from "./pages/auth/register/RegisterDewantaraMuda";
import RegisterKonselor from "./pages/auth/register/RegisterKonselor";
import Login from "./pages/auth/login/Login";
import LoginDewantaraMuda from "./pages/auth/login/LoginDewantaraMuda";
import LoginKonselor from "./pages/auth/login/LoginKonselor";
import LoginMardika from "./pages/auth/login/LoginMardika";

// Not Found
import NotFound from "./pages/notFound";

// Landing Page
import Beranda from "./pages/landingPage/index";
import Classroom from "./pages/landingPage/classroom/Classroom";
import LiveClass from "./pages/landingPage/liveClass/LiveClass";
import Consultation from "./pages/landingPage/Product/Consultation";
import RankBoard from "./pages/landingPage/rankBoard/RankBoard";
import Article from "./pages/landingPage/article";
import About from "./pages/landingPage/about";
import Contact from "./pages/landingPage/contact";


import PeronalInformation from './pages/PaymentProcess/PeronalInformation'

import Dashboard from "./pages/dashboard/Dashboard";
import CreateMardikaAccount from "./pages/dashboard/dewantaraMudaMenus/dewantaraMudaMenu";
import Profile from "./pages/dashboard/profile";

import ComingSoon from "./pages/ComingSoon";
import ScheduleCounselor from "./pages/PaymentProcess/ScheduleCounselor";


// KONSELOR
import CounselorDashboard from './pages/counselorDashboard/Dashboard'
import AllConseling from './pages/counselorDashboard/AllConseling'
import Schedule from './pages/counselorDashboard/Schedule'


// DEWANTARA MUDA
import DewantaraDashboard from './pages/dewantaraDashboard/Dashboard'
import CreateAccount from './pages/dewantaraDashboard/CreateAccount'
import Tracking from './pages/dewantaraDashboard/Tracking'
import MardikaList from './pages/dewantaraDashboard/MardikaList'
import Evaluate from './pages/dewantaraDashboard/Evaluate'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      // {
      //   path: '/',
      //   element: <Navigate to="/users"/>
      // },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/classroom",
        element: <Classroom />,
      },
      {
        path: "/live-class",
        element: <LiveClass />,
      },
      {
        path: "/konsultasi",
        element: <Consultation />,
      },
      {
        path: "/rank-board",
        element: <RankBoard />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/buat-akun-siswa",
        element: <CreateMardikaAccount />,
      },
      {
        path: "/beli-paket/informasi-personal",
        element: <PeronalInformation />,
      },
      {
        path: "/beli-paket/pilih-jadwal-dan-konselor",
        element: <ScheduleCounselor />,
      },
      {
        path: "/dewantara-muda/tracking-pembelajaran",
        element: <Tracking />,
      },
      {
        path: "/dewantara-muda/tracking-pembelajaran/daftar-siswa",
        element: <MardikaList />,
      },
      {
        path: "/dewantara-muda/tracking-pembelajaran/daftar-siswa/isi-evaluasi",
        element: <Evaluate />,
      },




      // KONSELOR
      {
        path: "/konselor/dashboard",
        element: <CounselorDashboard />,
      },
      {
        path: "/konselor/semua-sesi-konseling",
        element: <AllConseling />,
      },
      {
        path: "/konselor/jadwal-saya",
        element: <Schedule />,
      },


      // DEWANTARA MUDA
      {
        path: "/dewantara-muda/dashboard",
        element: <DewantaraDashboard />,
      },
      {
        path: "/dewantara-muda/buat-akun-mardika",
        element: <CreateAccount />,
      },
      
      // {
      //   path: '/dashboard-konselor',
      //   element: <DashboardKonselor/>
      // },
      // {
      //   path: '/users',
      //   element: <Users/>
      // },
      // {
      //   path: '/users/new',
      //   element: <UserForm key="userCreate" />
      // },
      // {
      //   path: '/users/:id',
      //   element: <UserForm key="userUpdate" />
      // }
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/register/dewantara-muda",
        element: <RegisterDewantaraMuda />,
      },
      {
        path: "/register/konselor",
        element: <RegisterKonselor />,
      },
      {
        path: "/masuk",
        element: <Login />,
      },
      {
        path: "/masuk/dewantara-muda",
        element: <LoginDewantaraMuda />,
      },
      {
        path: "/masuk/konselor",
        element: <LoginKonselor />,
      },
      {
        path: "/masuk/mardika",
        element: <LoginMardika />,
      },
      {
        path: "/beranda",
        element: <Beranda />,
      },      
      {
        path: "/artikel",
        element: <Article />,
      },
      {
        path: "/tentang-kami",
        element: <About />,
      },
      {
        path: "/kontak",
        element: <Contact />,
      },
      {
        path: "/coming-soon",
        element: <ComingSoon />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
