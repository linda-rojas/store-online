import { FC } from "react";
import { PropsWithChildren } from "react";
import { Header } from "../components/header/page";
import { Footer } from "../components/footer/page";
import InfoContacto from "../components/infoContacto/infoContacto";

const PanelLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        {children}
        <InfoContacto />
      </main>
      <Footer />
    </>
  );
};

export default PanelLayout;
