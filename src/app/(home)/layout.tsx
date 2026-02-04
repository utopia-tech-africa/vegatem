import NavBar from "@/components/nav/nav-bar";
import Footer from "@/components/footer/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
