import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <section id="terms" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Privacy Policy for BeepTalk</h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Welcome to BeepTalk’s Privacy Policy. This document explains how Levelon Technologies
            Private Limited ("BeepTalk", "we", "us", or "our") collects, uses, stores, and shares your
            personal information while you use the BeepTalk app, and how you can manage your data and privacy choices.
          </p>
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            We believe in transparency about how your data is handled. This policy outlines the types of information we collect,
            the purposes for which we use it, and the tools we offer to help you control what you share and with whom.
          </p>
          <p>
            This Privacy Policy applies to all features, products, and services offered through BeepTalk. Please read this Privacy
            Policy along with our Terms and Conditions of Use. In case of any conflict between the two, this Privacy Policy will
            override the Terms. If you have any questions, feel free to reach us at <a href="mailto:Beeptalkapp@gmail.com" className="text-blue-600 underline">Beeptalkapp@gmail.com</a>.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-10">Information We Collect and How We Use It</h3>
          <p>
            We collect personal information to help set up and operate your account, provide our services, comply with legal
            requirements, and improve BeepTalk.
          </p>

          <h4 className="text-xl font-semibold text-gray-800 mt-8">Categories of Data Collected</h4>

          {/* 3-column responsive table */}
          <div className="overflow-x-auto mt-4">
            <table className="min-w-full divide-y divide-gray-200 border">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Category</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Data We Collect</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Purpose of Collection and Use</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="align-top px-4 py-3">Account Setup and Log-in Data</td>
                  <td className="align-top px-4 py-3">User ID, name, age, mobile number, password, gender, voice sample, IP address</td>
                  <td className="align-top px-4 py-3">- To create and manage your account<br/>- To send notifications (including policy updates)<br/>- To communicate with you and provide support<br/>- To personalize language, location, and experience<br/>- To detect fraud and enforce platform Terms<br/>- For troubleshooting and analytics<br/>- To develop and improve services</td>
                </tr>
                <tr>
                  <td className="align-top px-4 py-3">Profile Information</td>
                  <td className="align-top px-4 py-3">Username, birth year, gender, language preference</td>
                  <td className="align-top px-4 py-3">- To populate your user profile<br/>- To personalize your experience</td>
                </tr>
                <tr>
                  <td className="align-top px-4 py-3">Moderation of Calls and Chats</td>
                  <td className="align-top px-4 py-3">Voice and video data, call activity patterns</td>
                  <td className="align-top px-4 py-3">- To detect and prevent violations of community guidelines<br/>- To support moderation for safety and compliance<br/>- To generate AI-based safety prompts<br/>- To improve automated safety tools and AI models</td>
                </tr>
                <tr>
                  <td className="align-top px-4 py-3">AI-generated Interaction Features</td>
                  <td className="align-top px-4 py-3">Audio, video, chat content, transcripts, usage patterns</td>
                  <td className="align-top px-4 py-3">- To generate AI-driven prompts, replies, or suggestions<br/>- To support chatbot-based features<br/>- To improve AI accuracy, reliability, and responsiveness</td>
                </tr>
                <tr>
                  <td className="align-top px-4 py-3">Device Data</td>
                  <td className="align-top px-4 py-3">Device model, OS version, app version, browser type, plugins, battery level, available storage, signal strength, app status, language</td>
                  <td className="align-top px-4 py-3">- To optimize app performance<br/>- To improve security and troubleshoot issues</td>
                </tr>
                <tr>
                  <td className="align-top px-4 py-3">Identifiers and Signals</td>
                  <td className="align-top px-4 py-3">Device ID, advertising IDs, Bluetooth signals, nearby Wi‑Fi and cell towers</td>
                  <td className="align-top px-4 py-3">- To personalize content and advertising<br/>- To customize your experience</td>
                </tr>
                <tr>
                  <td className="align-top px-4 py-3">Location & Media Access</td>
                  <td className="align-top px-4 py-3">GPS location, address, time zone, camera/microphone access, image/audio/video files (with permission)</td>
                  <td className="align-top px-4 py-3">- To enable features requiring location or media access<br/>- To detect suspicious activity and maintain security</td>
                </tr>
                <tr>
                  <td className="align-top px-4 py-3">Network and Connection Info</td>
                  <td className="align-top px-4 py-3">Mobile carrier, ISP, IP address, time zone, connection speed, language</td>
                  <td className="align-top px-4 py-3">- To ensure service availability and optimize performance<br/>- To detect and prevent unauthorized access</td>
                </tr>
                <tr>
                  <td className="align-top px-4 py-3">Call, Chat, and Interaction Data</td>
                  <td className="align-top px-4 py-3">Interaction list, call/chat timestamps, communication duration, call pick-up rate</td>
                  <td className="align-top px-4 py-3">- To enable call/chat features<br/>- For safety monitoring and moderation</td>
                </tr>
                <tr>
                  <td className="align-top px-4 py-3">Log Data & Technical Info</td>
                  <td className="align-top px-4 py-3">Cookies, logs, crash reports, referral URLs</td>
                  <td className="align-top px-4 py-3">- For diagnostics, usage tracking, and performance optimization</td>
                </tr>
                <tr>
                  <td className="align-top px-4 py-3">Information from Other Sources</td>
                  <td className="align-top px-4 py-3">Data from service providers, contractors, affiliates (profile info, email, phone, etc.)</td>
                  <td className="align-top px-4 py-3">- To provide AI-generated features<br/>- To improve moderation<br/>- To identify abuse/fraudulent behavior</td>
                </tr>
                <tr>
                  <td className="align-top px-4 py-3">Marketing Metadata</td>
                  <td className="align-top px-4 py-3">Source of traffic, campaign details, ad type/content</td>
                  <td className="align-top px-4 py-3">- To understand and measure campaign effectiveness</td>
                </tr>
                <tr>
                  <td className="align-top px-4 py-3">Account Security</td>
                  <td className="align-top px-4 py-3">Phone number, SMS for OTPs</td>
                  <td className="align-top px-4 py-3">- To verify identity and prevent misuse</td>
                </tr>
                <tr>
                  <td className="align-top px-4 py-3">Customer Support</td>
                  <td className="align-top px-4 py-3">Any data you share with support team</td>
                  <td className="align-top px-4 py-3">- To investigate and resolve issues</td>
                </tr>
                <tr>
                  <td className="align-top px-4 py-3">Transactional & Financial Data</td>
                  <td className="align-top px-4 py-3">Purchase records, lifetime value, transaction ID, payment details</td>
                  <td className="align-top px-4 py-3">- To process payments<br/>- To comply with tax/legal requirements</td>
                </tr>
                <tr>
                  <td className="align-top px-4 py-3">Verification & Banking Details</td>
                  <td className="align-top px-4 py-3">PAN, Aadhaar, UPI ID, bank details</td>
                  <td className="align-top px-4 py-3">- To verify identity and comply with laws<br/>- To process payments securely</td>
                </tr>
                <tr>
                  <td className="align-top px-4 py-3">Information from Other Users/Third Parties</td>
                  <td className="align-top px-4 py-3">Reports, complaints, authorities’ inputs</td>
                  <td className="align-top px-4 py-3">- To investigate complaints, detect fraud, comply with law</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mt-12">How We Share Your Information</h3>
          <p>
            We do not share your personal information publicly or make it visible to other users except during private,
            user-initiated interactions (like calls or chats). However, we may share your information with other users you
            interact with, third-party service providers, for legal and safety reasons, with group entities, and in case of
            business transfers. Aggregated/de-identified data may be shared for analytics and improvements.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-10">How We Protect Your Information</h3>
          <p>
            We use technical, physical, and administrative measures to protect your information against loss, misuse, unauthorized
            access, disclosure, alteration, or destruction. While we take reasonable steps, no system is fully secure. If a breach
            occurs, we will notify you and relevant authorities as required by law.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-10">Data Retention</h3>
          <p>
            We retain your personal data only as long as necessary to provide services and meet legal obligations. If you request
            deletion of your account, we will remove your data from active systems, though copies may remain in backups or archives.
            Content shared with other users may continue to exist outside our control.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-10">Your Rights</h3>
          <p>
            Under Indian data protection laws, you have the right to review and correct your data, withdraw consent, object to
            certain processing, and opt-out of promotional communications by emailing
            <a href="mailto:Beeptalkapp@gmail.com" className="text-blue-600 underline"> Beeptalkapp@gmail.com</a>. To exercise these rights, contact us; we may
            verify your identity before processing.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-10">Grievance Redressal</h3>
          <p>
            In-App Reporting: Report profiles or issues via the app.
            <br />Email Support: <a href="mailto:Beeptalkapp@gmail.com" className="text-blue-600 underline">Beeptalkapp@gmail.com</a>
            <br />Email: <a href="mailto:grievance.officer@beeptalk.in" className="text-blue-600 underline">grievance.officer@beeptalk.in</a>
            <br />Address: Electronic city , Bangalore , Karnataka
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-10">Changes to This Policy</h3>
          <p>
            We may update this Privacy Policy from time to time. For major changes affecting your rights, we will notify you via
            app notifications, SMS, or email.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsOfService;
