import TopNav from "@/components/TopNav";
import WhySection from "@/components/WhySection";
import GlobalFooter from "@/components/GlobalFooter";

export default function WhyPage() {
  return (
    <>
      <TopNav />
      <main className="pt-16">
        <WhySection />
      </main>
      <GlobalFooter />
    </>
  );
}
