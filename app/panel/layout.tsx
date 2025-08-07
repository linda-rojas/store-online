import { FC } from "react";
import { PropsWithChildren } from "react";
import { Header } from "../components/header/page";
import { Footer } from "../components/footer/page";


const PanelLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
      <div className="">
        <aside className="">
          <Header />
        </aside>
        <section>
          {children}
        </section>
          <Footer />
      </div>
  );
}

export default PanelLayout;