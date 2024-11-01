import AuthLayout from "./_auth/AuthLayout";
import SignInForm from "./_auth/forms/SignInForm";
import SignUpForm from "./_auth/forms/SignUpForm";
import { Home } from "./_root/pages";
import RootLayout from "./_root/RootLayout";
import "./globals.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <main className="flex h-screen">
        <Routes>
          {/* public routes */}
          <Route element={<AuthLayout />}>
            <Route path="/sign-in" element={<SignInForm />} />
            <Route path="/sign-up" element={<SignUpForm />} />
          </Route>

          {/* private routes */}
          <Route element={<RootLayout />}>
            <Route path="/" element={<Home />} />
          </Route>

          {/* catch-all route for 404s */}
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
