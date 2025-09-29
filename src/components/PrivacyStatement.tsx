import React from 'react';

const PrivacyStatement: React.FC = () => {
  return (
    <section id="privacy-statement" className="py-20 bg-gradient-to-b from-yellow-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">BeepTalk Privacy Statement</h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            This Privacy Statement explains how Level On Technologies Private Limited ("BeepTalk", "we", "us")
            collects, uses, shares, and safeguards your information when you use the BeepTalk app and website.
            If you have questions, contact us at <a href="mailto:Beeptalkapp@gmail.com" className="text-blue-600 underline">Beeptalkapp@gmail.com</a>.
          </p>
        </div>

        {/* Two column layout for readability */}
        <div className="grid md:grid-cols-2 gap-8 text-gray-800 leading-relaxed">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">1. What We Collect</h3>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Account data: phone number for OTP, user ID, display name, age/birth year, gender, language preference.</li>
                <li>Profile data: optional bio and preferences you provide.</li>
                <li>Usage data: app interactions, timestamps, call/chat metadata, connection quality, crash logs.</li>
                <li>Content you create: audio/video streams and chat messages where required for moderation and safety.</li>
                <li>Device and network data: device model, OS, app version, IP, carrier/ISP, time zone, language.</li>
                <li>Location and media access: GPS, microphone, camera, photos/files, only with your permission.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">2. How We Use Information</h3>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Provide and improve calling, chat, and matching features.</li>
                <li>Keep the platform safe via moderation, fraud prevention, and policy enforcement.</li>
                <li>Personalize experience (language, recommendations) and measure performance.</li>
                <li>Communicate with you about updates, support, and policy changes.</li>
                <li>Comply with legal obligations and resolve disputes.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">3. Sharing</h3>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>With other users when you interact with them (e.g., display name, status).</li>
                <li>With trusted service providers for hosting, communications, analytics, payments, and security.</li>
                <li>For legal/safety reasons or as part of corporate transactions (e.g., merger or acquisition).</li>
                <li>We may share aggregated or de‑identified data that cannot reasonably identify you.</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">4. Security</h3>
              <p className="mt-2">
                We use technical, administrative, and physical safeguards to protect information against unauthorized
                access, alteration, disclosure, or destruction. No system is 100% secure, but we take reasonable
                measures to reduce risk and we notify users/authorities if required by law.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">5. Retention</h3>
              <p className="mt-2">
                We retain data as long as needed to provide services and meet legal obligations. If you delete your
                account, we remove data from active systems; backups and logs may persist for a limited time.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">6. Your Choices & Rights</h3>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Access, correct, or delete your information where applicable.</li>
                <li>Withdraw permissions (e.g., location, microphone, camera) in device settings.</li>
                <li>Opt out of promotional emails by contacting <a href="mailto:Beeptalkapp@gmail.com" className="text-blue-600 underline">Beeptalkapp@gmail.com</a>.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">7. Contact</h3>
              <p className="mt-2">
                Email: <a href="mailto:Beeptalkapp@gmail.com" className="text-blue-600 underline">Beeptalkapp@gmail.com</a>
              </p>
              <p>
                Address: LEVEL ON TECHNOLOGIES PRIVATE LIMITED, Andhrapradesh, Guntur, Amaravathi
              </p>
            </div>

            <div className="bg-yellow-100 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                Updates: We may revise this Privacy Statement periodically. Material changes will be communicated in‑app or via email/SMS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyStatement;
