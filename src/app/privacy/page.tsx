import TopNav from "@/components/TopNav";
import GlobalFooter from "@/components/GlobalFooter";

export default function PrivacyPage() {
  return (
    <>
      <TopNav />
      <main className="pt-20 min-h-screen bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gold mb-8">Privacy Policy</h1>
          
          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
              <p>
                At SaintVisionAI™, we collect information you provide directly to us, 
                such as when you create an account, use our services, or contact us for support.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>
              <p>
                We use the information we collect to provide, maintain, and improve our AI services, 
                process transactions, and communicate with you about your account and our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Data Security</h2>
              <p>
                We implement industry-standard security measures including AES-256 encryption 
                and SOC 2 compliance to protect your personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">GDPR & CCPA Compliance</h2>
              <p>
                We respect your privacy rights under GDPR and CCPA. You may request access to, 
                correction of, or deletion of your personal data at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:privacy@saintvisionai.com" className="text-gold hover:underline">
                  privacy@saintvisionai.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <GlobalFooter />
    </>
  );
}
