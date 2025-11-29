const DeleteAccountFAQ = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-red-600 to-pink-600 px-8 py-12 text-white text-center">
            <h1 className="text-4xl font-bold mb-4">BeepTalk – Account Deletion FAQs</h1>
            <p className="text-xl opacity-90">Last Updated: 1st October, 2024</p>
          </div>
          
          <div className="px-8 py-12 space-y-8">
            <div className="prose prose-lg max-w-none">
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
                  How do I initiate the account deletion process?
                </h2>
                <div className="space-y-2 text-gray-700">
                  <p>To delete your BeepTalk account:</p>
                  <ol className="ml-4 space-y-1 list-decimal">
                    <li>Go to Home</li>
                    <li>Open your Profile</li>
                    <li>Scroll to the bottom</li>
                    <li>Tap Delete My Account Permanently</li>
                  </ol>
                  <p className="font-semibold">Once you confirm, the account will be deleted.</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
                  What happens after I submit my deletion request?
                </h2>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <p className="font-semibold mb-2">Once you submit the request:</p>
                    <ul className="ml-4 space-y-1">
                      <li>• Your account becomes immediately inaccessible</li>
                      <li>• Your profile, media, interactions, and activities will no longer be visible to others</li>
                      <li>• You will no longer be able to upload, post, message, or use any BeepTalk features</li>
                      <li>• Deletion takes some processing time.</li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="font-semibold mb-2">During this period:</p>
                    <ul className="ml-4 space-y-1">
                      <li>• Some of your old content links may briefly remain visible</li>
                      <li>• However, your profile will not be accessible from those links</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">Retention:</p>
                    <ul className="ml-4 space-y-1">
                      <li>• Even after deletion, BeepTalk may retain certain data for a limited time to comply with legal, regulatory, fraud-prevention, or security obligations.</li>
                      <li>• Aggregated or anonymized data may also be retained.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
                  Can I cancel my deletion request?
                </h2>
                <div className="space-y-2 text-gray-700">
                  <p className="font-semibold text-lg">Yes — but only within 30 days.</p>
                  <ul className="ml-4 space-y-1">
                    <li>• Log back into your account within 30 days to cancel the deletion</li>
                    <li>• After 30 days, your account is permanently deleted and cannot be restored</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</span>
                  How can I download my data?
                </h2>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <p className="font-semibold mb-2">When you request account deletion:</p>
                    <ul className="ml-4 space-y-1">
                      <li>• A data download link may be sent to the email address you provide</li>
                      <li>• The download link is valid for 7 days</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">Your downloadable data may include:</p>
                    <ul className="ml-4 space-y-1">
                      <li>• Profile details</li>
                      <li>• Posts</li>
                      <li>• Comments</li>
                      <li>• Direct messages</li>
                      <li>• Other account information (where applicable)</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                    <p className="font-semibold text-yellow-800">Important Notes:</p>
                    <ul className="ml-4 space-y-1 text-yellow-700">
                      <li>• Please ensure you provide an accurate, active email.</li>
                      <li>• It may take some time for us to prepare your data.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">5</span>
                  What happens to the Coins in my account?
                </h2>
                <div className="space-y-2 text-gray-700">
                  <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
                    <p className="font-semibold text-red-800 mb-2">⚠️ Important Warning:</p>
                    <ul className="ml-4 space-y-1 text-red-700">
                      <li>• Before deleting your account, we recommend using any remaining Coins.</li>
                      <li>• <strong>Coins are non-refundable</strong></li>
                      <li>• <strong>Unused Coins will be lost permanently once your account is deleted</strong></li>
                    </ul>
                  </div>
                </div>
              </section>

              <div className="mt-12 p-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl border border-purple-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Need Help?</h3>
                <p className="text-gray-700 mb-2">
                  If you have any questions about account deletion, please contact us at:
                </p>
                <p className="text-lg font-semibold">
                  📧 <a href="mailto:beeptalkapp@gmail.com" className="text-purple-600 hover:text-purple-800">beeptalkapp@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccountFAQ;
