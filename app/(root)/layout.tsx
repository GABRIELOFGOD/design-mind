import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import SectionContainer from "@/components/ui/section-container";
import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      <Header />
      {children}
      <SectionContainer className="bg-[#111827]">
        <Footer />
      </SectionContainer>
    </div>
  )
}
export default MainLayout;