import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/auth/LoginPage";
import SignUpPage from "./pages/auth/SignUpPage";
import toast, { Toaster } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "./lib/axios";
import ProtectedLayout from "./components/ProtectedLayout";

import NotificationsPage from "./pages/NotificationsPage";
import NetworkPage from "./pages/NetworkPage";
import PostPage from "./pages/PostPage";
import ProfilePage from "./pages/ProfilePage";
import FreeResources from "./pages/FreeResources";
import EventPage from "./pages/EventPage";
import ChatPage from "./pages/ChatPage";
import AllProducts from "./pages/AllProducts";
import Fashion from "./pages/Fashion";
import Courses from "./pages/Courses"; // Renamed from Courses.jsx to CoursesPage.jsx
import Entertainment from "./pages/Entertainment";
import Technology from "./pages/Technology";
import PersonalCare from "./pages/PersonalCare";

function App() {
  const { data: authUser, isLoading } = useQuery({
    queryKey: ["authUser"],
    queryFn: async () => {
      try {
        const res = await axiosInstance.get("/auth/me");
        return res.data;
      } catch (err) {
        if (err.response && err.response.status === 401) {
          return null;
        }
        toast.error(err.response?.data?.message || "Something went wrong");
      }
    },
  });

  if (isLoading) return null;

  return (
    <Layout>
      <Routes>
        {/* Public or Auth-Controlled Routes */}
        <Route
          path="/"
          element={authUser ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/signup"
          element={!authUser ? <SignUpPage /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={!authUser ? <LoginPage /> : <Navigate to="/" />}
        />

        {/* Protected Routes */}
        <Route
          path="/notifications"
          element={authUser ? <NotificationsPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/network"
          element={authUser ? <NetworkPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/post/:postId"
          element={authUser ? <PostPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/profile/:username"
          element={authUser ? <ProfilePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/events"
          element={authUser ? <EventPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/chat"
          element={authUser ? <ChatPage /> : <Navigate to="/login" />}
        />

        {/* Nested Protected Routes for Resources */}
        <Route
          path="/resources"
          element={authUser ? <ProtectedLayout /> : <Navigate to="/login" />}
        >
          <Route index element={<FreeResources />} />
          <Route path="home" element={<FreeResources />} />
          <Route path="all" element={<AllProducts />} />
          <Route path="fashion" element={<Fashion />} />
          <Route path="courses" element={<Courses />} /> {/* ✅ Fixed */}
          <Route path="entertainment" element={<Entertainment />} />
          <Route path="technology" element={<Technology />} />
          <Route path="personalcare" element={<PersonalCare />} />
        </Route>
      </Routes>

      <Toaster />
    </Layout>
  );
}

export default App;
