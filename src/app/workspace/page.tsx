import SidebarNav from "@/components/SidebarNav";
import CompanionPanel from "./components/CompanionPanel";
import PipelineOverview from "./components/PipelineOverview";
import QuickAccessPanel from "./components/QuickAccessPanel";
import NotesAndPrompts from "./components/NotesAndPrompts";

export default function Workspace() {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <SidebarNav />
      
      <main className="flex-1 p-10">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gold mb-4">Enterprise Command Center</h1>
          <p className="text-gray-400">
            Welcome to your AI-powered control room. Let's get cookin'.
          </p>
        </div>

        {/* ✅ QUICK ACTIONS MODULE */}
        <QuickAccessPanel />

        {/* ✅ MY BUSINESS MODULE */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-4">📁 My Business</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-900 border border-gold rounded-lg p-6 shadow-md hover:bg-gray-800 transition">
              <h3 className="text-lg font-bold text-gold mb-2">📈 CRM Dashboard</h3>
              <p className="text-sm text-gray-400">Track leads, contacts, and sales performance in real time.</p>
            </div>
            <div className="bg-gray-900 border border-gold rounded-lg p-6 shadow-md hover:bg-gray-800 transition">
              <h3 className="text-lg font-bold text-gold mb-2">🧠 Smart Workflows</h3>
              <p className="text-sm text-gray-400">Trigger automations from voice, prompt, or app actions.</p>
            </div>
          </div>
        </section>

        {/* ✅ PIPELINE OVERVIEW */}
        <PipelineOverview />

        {/* ✅ COMPANION PANEL */}
        <CompanionPanel />

        {/* ✅ NOTES & PROMPTS */}
        <NotesAndPrompts />
      </main>
    </div>
  );
}
