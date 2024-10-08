// "use client";

import Footer from "../components/footer";
import Navigation from "../components/navigation";
import "../styles/global.css";
// import { AuthProvider } from "./util/AuthContext";
import "react-quill/dist/quill.snow.css";
import ClientProviders from "./util/ClientProviders";

// 클라이언트 컴포넌트에서 metadata를 사용할 수 없음
export const metadata = {
  title: "Home",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientProviders>
          <Navigation />
          <div id="wrap">{children}</div>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
