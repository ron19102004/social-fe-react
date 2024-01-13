import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/app.layout";
import { HomePage, SignInPage, SignUpPage, AuthProvider } from "./pages";
import MainLayout from "./layouts/main.layout";
import { useEffect } from "react";
import { useToast } from "@chakra-ui/react";

const App: React.FC = () => {
  const toast = useToast();

  useEffect(() => {
    const handleOnline = () => {
      toast({
        title: "Mạng đã được khôi phục.",
        status: "success",
        isClosable: true,
        position:'bottom-left',
      });
    };

    const handleOffline = () => {
      toast({
        position:'bottom-left',
        title: "Đã mất kết nối mạng.",
        status: "error",
        isClosable: true
      });
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route
            path="/*"
            element={
              <AppLayout>
                <MainLayout>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                  </Routes>
                </MainLayout>
              </AppLayout>
            }
          />
        </Routes>
      </AuthProvider>
      <Routes>
        <Route
          path="/auth/*"
          element={
            <Routes>
              <Route path="/sign-in" element={<SignInPage />} />
              <Route path="/sign-up" element={<SignUpPage />} />
            </Routes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
