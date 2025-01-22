import Nav from "@/components/Nav";
import SideBar from "@/components/sidebar/SideBar";
import "./globals.css";
import Home from "./page";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <div className="layout">
          <Nav />
          <div className="content-area">
            <SideBar />
            <main className="main-content">{children}</main>
            {/* <div className="home-content-area">
              <main>{children}</main>
            </div> */}
          </div>
        </div>
      </body>
    </html>
  );
}
