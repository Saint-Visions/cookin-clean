import TopNav from "@/components/TopNav";
import GlobalFooter from "@/components/GlobalFooter";

export default function WhyPage() {
  return (
    <>
      <TopNav />
      <main className="min-h-screen bg-black text-white pt-20">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <h1 className="text-6xl font-bold text-yellow-400 mb-8 text-center">
            Why SaintSal™?
          </h1>
          <p className="text-xl text-gray-300 text-center mb-12">
            Innovation is in our DNA. SaintSal™ fuses intelligence and elegance — powered by the world's most advanced AI.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">10-20x</div>
              <div className="text-lg text-white">Faster Learning</div>
              <div className="text-sm text-gray-400">with HACP™</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">99.9%</div>
              <div className="text-lg text-white">Uptime SLA</div>
              <div className="text-sm text-gray-400">Enterprise Grade</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">&lt;2s</div>
              <div className="text-lg text-white">Response Time</div>
              <div className="text-sm text-gray-400">Global CDN</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">SOC 2</div>
              <div className="text-lg text-white">Compliant</div>
              <div className="text-sm text-gray-400">Security First</div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 border border-yellow-500 rounded-xl p-8">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold text-white mb-2">HACP™ Technology</h3>
              <p className="text-yellow-400 text-sm mb-4">Patented Intelligence</p>
              <p className="text-gray-300">
                Human-AI Connection Protocol that adapts to your thinking patterns, creating a truly personalized AI experience.
              </p>
              <div className="inline-block bg-yellow-500/20 border border-yellow-500 rounded-full px-4 py-2 text-yellow-400 text-sm mt-4">
                US Patent Pending
              </div>
            </div>

            <div className="bg-gray-900 border border-yellow-500 rounded-xl p-8">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold text-white mb-2">Enterprise Security</h3>
              <p className="text-yellow-400 text-sm mb-4">Azure-Backed Protection</p>
              <p className="text-gray-300">
                SOC 2 compliant infrastructure with AES-256 encryption. Your data stays yours, always.
              </p>
              <div className="inline-block bg-yellow-500/20 border border-yellow-500 rounded-full px-4 py-2 text-yellow-400 text-sm mt-4">
                Bank-Level Security
              </div>
            </div>
          </div>
        </div>
      </main>
      <GlobalFooter />
    </>
  );
}
