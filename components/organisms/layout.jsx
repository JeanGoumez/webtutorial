import Navbar from "./navbar";
// import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Navbar />
      <main className="pt-16">{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
