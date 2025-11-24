import React from 'react';
import Logo from './Logo';

const ChildSafetyPolicy: React.FC = () => {
  return (
    <section id="child-safety-policy" className="py-20 bg-gradient-to-b from-yellow-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Logo size="large" showText={true} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">BeepTalk – Child Safety & Protection Policy</h2>
          <p className="mt-2 text-gray-600">Last Updated: November 2025</p>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            BeepTalk is committed to providing a safe, secure, and positive communication experience for all users. We strictly prohibit any form of Child Sexual Abuse Material (CSAM) or Child Sexual Abuse & Exploitation (CSAE). Our platform is intended only for adults (18+ users) and is not designed or permitted for minors. This Child Safety & Protection Policy outlines the measures we take to detect, prevent, and respond to child safety risks on BeepTalk.
          </p>
        </div>

        <div className="space-y-10 text-gray-800 leading-relaxed">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">1. Age Requirements</h3>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>BeepTalk is strictly for 18+ users only.</li>
              <li>Minors are not permitted to create an account or use the app.</li>
              <li>If an account is found to belong to someone under 18, it will be immediately removed.</li>
              <li>We monitor behavioral signals that may indicate underage usage and take action accordingly.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">2. Zero-Tolerance Policy for CSAE</h3>
            <p className="mt-2">BeepTalk enforces a strict zero-tolerance policy for:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>Child Sexual Abuse Material (CSAM)</li>
              <li>Any sexual content involving minors</li>
              <li>Sexual conversations with or between minors</li>
              <li>Grooming, solicitation, or attempts to contact minors</li>
              <li>Sharing or requesting inappropriate images or videos of minors</li>
              <li>Encouraging minors to engage in sexual or harmful behavior</li>
            </ul>
            <p className="mt-3 font-medium">Violations lead to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>Immediate and permanent account termination</li>
              <li>Device-level banning</li>
              <li>Mandatory reporting to law enforcement and child protection agencies</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">3. Prohibited Content & Behaviors</h3>
            <p className="mt-2">The following behaviors are strictly prohibited on BeepTalk:</p>
            
            <h4 className="font-medium mt-4">Child Safety Violations</h4>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>Any sexual content involving minors</li>
              <li>Attempts to obtain photos/videos from minors</li>
              <li>Grooming or manipulative interactions</li>
              <li>Exposing minors to inappropriate or explicit content</li>
            </ul>

            <h4 className="font-medium mt-4">General Safety Violations</h4>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>Harassment, bullying, or threats</li>
              <li>Sharing explicit adult content</li>
              <li>Violent or abusive behavior</li>
              <li>Impersonation or identity fraud</li>
              <li>Blackmail, extortion, or coercion</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">4. Content Moderation & Safety Systems</h3>
            <p className="mt-2">BeepTalk uses a layered safety approach to detect and prevent harmful activity.</p>
            
            <h4 className="font-medium mt-4">4.1 Automated AI Detection</h4>
            <p className="mt-2">Our systems continuously monitor:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>Sexual content</li>
              <li>Suspicious behavior patterns</li>
              <li>Underage indicators</li>
              <li>Inappropriate communication</li>
              <li>Violent or abusive content</li>
            </ul>
            <p className="mt-2">Automated detection may trigger warnings, account suspensions, or full removal.</p>

            <h4 className="font-medium mt-4">4.2 Manual Safety Moderation</h4>
            <p className="mt-2">Trained human moderators:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>Review flagged content</li>
              <li>Investigate reports about harmful behavior</li>
              <li>Verify potential underage accounts</li>
              <li>Escalate severe cases immediately</li>
            </ul>

            <h4 className="font-medium mt-4">4.3 Real-Time Monitoring for Voice & Video</h4>
            <p className="mt-2">For video chat features:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>Risky behavior may trigger instant disconnection</li>
              <li>Repeated violations result in permanent banning</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">5. User Reporting System</h3>
            <p className="mt-2">Users can report:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>Child safety concerns</li>
              <li>Inappropriate or sexual content</li>
              <li>Underage users</li>
              <li>Abuse, harassment, or threats</li>
              <li>Suspicious or harmful behavior</li>
            </ul>
            <p className="mt-3">Reports can be submitted directly through in-app tools or by email.</p>
            
            <h4 className="font-medium mt-4">Our Response Times</h4>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>Child safety emergencies: Immediate escalation</li>
              <li>Critical violations: Within hours</li>
              <li>Standard reports: Within 24–48 hours</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">6. Enforcement Actions</h3>
            <p className="mt-2">Depending on the severity of a violation, BeepTalk may take the following actions:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>Warning or restriction of features</li>
              <li>Temporary suspension</li>
              <li>Permanent account termination</li>
              <li>Device banning</li>
              <li>Reporting to local and international authorities</li>
              <li>Preservation of evidence for legal investigations</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">7. Cooperation with Law Enforcement</h3>
            <p className="mt-2">BeepTalk fully supports investigations related to child safety. In cases involving CSAE, we:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>Preserve relevant information as required by law</li>
              <li>Cooperate with law enforcement agencies</li>
              <li>Report actionable CSAM to appropriate authorities</li>
              <li>Comply with legal data requests</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">8. Data Protection & Safety Logging</h3>
            <p className="mt-2">To protect user privacy while maintaining safety:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>We collect only required data for moderation & security</li>
              <li>All sensitive data is encrypted and securely stored</li>
              <li>Safety-related logs are retained only for legally required periods</li>
              <li>Access to sensitive information is strictly controlled</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">9. Behavioral Safety & Anti-Grooming Protections</h3>
            <p className="mt-2">BeepTalk's safety systems identify:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>Grooming patterns</li>
              <li>Predatory communication</li>
              <li>Repeated contact attempts</li>
              <li>Requests for private images</li>
              <li>Manipulative behavioral cues</li>
            </ul>
            <p className="mt-3">If detected, the account is immediately investigated and may be permanently removed.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">10. User Safety Tools</h3>
            <p className="mt-2">BeepTalk provides built-in tools to help users stay safe:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>Report user button</li>
              <li>Block user option</li>
              <li>Mute audio/video</li>
              <li>Restrict communication features</li>
              <li>Auto-warnings for suspicious activity</li>
            </ul>
            <p className="mt-3">Users are encouraged to report any harmful or suspicious behavior at any time.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">11. Developer Information</h3>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>Developer: D. Ravindra</li>
              <li>App Name: BeepTalk – VoiceChat & VideoChat</li>
              <li>Support Email: <a href="mailto:beeptalkapp@gmail.com" className="text-blue-600 underline">beeptalkapp@gmail.com</a></li>
              <li>Website: <a href="https://www.beeptalk.in" className="text-blue-600 underline">https://www.beeptalk.in</a></li>
            </ul>
            <p className="mt-3">For any safety concerns or urgent child-protection issues, please contact us immediately.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">12. Commitment to Safety</h3>
            <p className="mt-2">BeepTalk is committed to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>Creating a safe and positive environment</li>
              <li>Preventing exploitation and harmful activities</li>
              <li>Improving our moderation systems</li>
              <li>Updating policies to follow best safety practices</li>
            </ul>
            <p className="mt-3">We continuously review our systems to align with Google Play's Child Safety Standards and global protection requirements.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChildSafetyPolicy;
