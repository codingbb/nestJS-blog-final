import Footer from "../components/footer";
import Navigation from "../components/navigation";
import "../styles/global.css";
import { AuthProvider } from "./util/AuthContext";

export const metadata = {
  title: "Home",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Navigation />
          <div id="wrap">{children}</div>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
