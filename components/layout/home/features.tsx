import { BubblesIcon, CodeXmlIcon, LucideIcon, PaletteIcon } from "lucide-react";
import SectionHeader from "../section-header";
import { Card } from "@/components/ui/card";

interface FeatureType {
  id: number;
  title: string;
  desc: string;
  icon: LucideIcon;
}

const Features = () => {
  const features: FeatureType[] = [
    {
      id: 1,
      title: "AI Architecture",
      desc: "Describe your product, and our AI generates a complete application map, including pages, user flows, database schemas, and component logic.",
      icon: BubblesIcon
    },
    {
      id: 2,
      title: "Instant UI",
      desc: "Generate a bespoke design system and high-fidelity page layouts based on your architecture. Customize styles, themes, and components with ease.",
      icon: PaletteIcon
    },
    {
      id: 3,
      title: "Code Export",
      desc: "Export production-ready code for your entire application. Compatible with React, Vue, and Svelte, with more frameworks coming soon.",
      icon: CodeXmlIcon
    }
  ];
  
  return (
    <div className="mx-auto w-[90%] md:w-[75%] flex flex-col gap-10 justify-center items-center py-10 md:py-20">
      <SectionHeader
        title="From Concept to Code, Instantly"
        sub="DesignMind streamlines your entire workflow with powerful AI-driven features."
      />

      <div className="justify-between flex gap-5 w-full flex-wrap ">
        {features.map(({ id, icon: Icon, desc, title }) => (
          <Card
            key={id}
            className="w-full md:w-[30%] px-4 bg-[#f9fafb]"
          >
            <div className="rounded-md bg-primary/20 h-12 w-12 flex justify-center items-center">
              {<Icon size={30} />}
            </div>

            <p className="text-2xl font-semibold">{title}</p>
            <p className="text-foreground/70 text-lg">{desc}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}
export default Features;