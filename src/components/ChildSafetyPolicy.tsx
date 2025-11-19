import React from 'react';

const ChildSafetyPolicy: React.FC = () => {
  return (
    <section id="child-safety-policy" className="py-20 bg-gradient-to-b from-yellow-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">BeepTalk – Child Safety & Protection Policy</h2>
          <p className="mt-2 text-gray-600">Last Updated: November 2025</p>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            BeepTalk is committed to creating a safe and positive communication experience for all users. We strictly prohibit any form of Child Sexual Abuse and Exploitation (CSAE). Our platform is designed only for adults and is not intended for minors.
          </p>
        </div>

        <div className="space-y-10 text-gray-800 leading-relaxed">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">1. Age Requirement</h3>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>BeepTalk is strictly for 18+ users only.</li>
              <li>Minors are not allowed to create an account or use the app.</li>
              <li>If an account is found to belong to someone under 18, it will be permanently removed.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">2. Prohibited Content & Behavior</h3>
            <h4 className="font-medium mt-3">Child Safety Violations</h4>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>Any sexual content involving minors</li>
              <li>Sexual conversations with or between minors</li>
              <li>Grooming or attempting to groom minors</li>
              <li>Sharing, requesting, or discussing child sexual imagery</li>
              <li>Contacting minors for inappropriate purposes</li>
            </ul>
            <h4 className="font-medium mt-4">General Misuse</h4>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>Nudity, sexual content, or explicit behavior</li>
              <li>Harassment, bullying, threats, or abusive language</li>
              <li>Sharing private/personal information with minors</li>
              <li>Use of fake identities</li>
              <li>Illegal or harmful activities</li>
            </ul>
            <p className="mt-3">Any violations result in immediate account ban and may be reported to law enforcement authorities.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">3. Safety Features</h3>
            <p className="mt-2">To protect our community, BeepTalk includes:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>User reporting system</li>
              <li>Account moderation & review</li>
              <li>Automated detection of harmful behavior</li>
              <li>Device-level bans for repeated violations</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">4. Reporting a Child Safety Issue</h3>
            <p className="mt-2">If you find any content or behavior that may involve child safety risks, please report it immediately.</p>
            <h4 className="font-medium mt-3">How to Report In-App</h4>
            <p className="mt-1">User Profile → Options → Report User → Child Safety Concern</p>
            <h4 className="font-medium mt-4">Report by Email</h4>
            <p className="mt-1">
              <a href="mailto:support@beeptalkapp.com" className="text-blue-600 underline">support@beeptalkapp.com</a>
            </p>
            <p className="mt-1 text-gray-700 text-sm">(Replace with your actual support email if different)</p>
            <p className="mt-2">We take all reports seriously and act quickly.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">5. Enforcement Actions</h3>
            <p className="mt-2">Depending on the severity of the violation, BeepTalk may:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>Permanently ban the user account</li>
              <li>Block the device from future access</li>
              <li>Remove illegal or harmful content</li>
              <li>Report the incident to law enforcement agencies</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">6. Developer I: Ravindra</h3>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>Developer: BeepTalk2025</li>
              <li>App: BeepTalk – VoiceChat & VideoChat</li>
              <li>Support: <a href="mailto:support@beeptalkapp.com" className="text-blue-600 underline">support@beeptalkapp.com</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChildSafetyPolicy;
