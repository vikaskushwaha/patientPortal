
import Navbar from "@/components/navbar";
import "./globals.css";
import { UserProvider } from "@/context/authProvider";
import Footer from "@/components/footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <UserProvider>
          <div className="flex-grow ">{children}</div>
        </UserProvider>
        <Footer />
      </body>
    </html>
  );
}
