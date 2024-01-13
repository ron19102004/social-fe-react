import HeaderMobile from "../components/header-mobile.component";
import Header from "../components/header.component";

interface IProps {
  children: React.ReactNode;
}
const AppLayout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Header />
      <HeaderMobile />
      <main className="bg-color1 md:pt-20 pt-28">{children}</main>
    </>
  );
};
export default AppLayout;
