import Hero from "@/components/Hero";
import StructuredData from "@/components/StructuredData";

export default function Home() {
  return (
    <div>
      <StructuredData type="organization" />
      <StructuredData type="website" />
      <Hero />
    </div>
  );
}
