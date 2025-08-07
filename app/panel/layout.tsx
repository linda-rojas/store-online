import { FC } from "react";
import { PropsWithChildren } from "react";
import { Header } from "../components/header/page";
import { Foooter } from "../components/footer/page";


const PanelLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
      <div className="">
        <aside className="">
          <Header />
        </aside>
        <section>
          {children}
        </section>
          <Foooter />
      </div>
  );
}

export default PanelLayout;