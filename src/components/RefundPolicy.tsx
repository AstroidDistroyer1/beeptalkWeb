const RefundPolicy = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">BeepTalk Refund Policy</h1>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            This Refund Policy outlines the terms under which BeepTalk, owned and operated by Levelon Technologies Private Limited ("BeepTalk", "we", "our", "us"), handles refunds for purchases made on the BeepTalk platform. We aim to ensure transparency for all transactions. Please read this carefully before making any purchase.
          </p>
        </div>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. General Policy</h2>
            <ul className="list-disc pl-6 mb-3 space-y-1">
              <li>All purchases are final and non-refundable once completed.</li>
              <li>This includes payments for Virtual Items, gift vouchers, premium subscriptions, or any other in-app purchases.</li>
              <li>Virtual Items are limited-use licenses and do not represent ownership rights.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Non-Refundable Transactions</h2>
            <p className="mb-3">You will not be eligible for a refund in the following cases:</p>
            <ul className="list-disc pl-6 mb-3 space-y-1">
              <li>Change of mind after purchase.</li>
              <li>Unused or partially used subscription periods.</li>
              <li>Sent Virtual Items (such as gifts) that have already been delivered.</li>
              <li>Failure to use the Services within a specified time.</li>
              <li>Account suspension or termination due to violation of BeepTalk's Community Guidelines or Terms of Service.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Exceptional Circumstances</h2>
            <p className="mb-3">Refunds may only be considered in exceptional cases, such as:</p>
            <ul className="list-disc pl-6 mb-3 space-y-1">
              <li>Duplicate transactions caused by a system error.</li>
              <li>Unauthorized payments proven to have been made without the account holder's consent (subject to verification).</li>
            </ul>
            <p className="mb-3">If a refund is approved under these exceptions:</p>
            <ul className="list-disc pl-6 mb-3 space-y-1">
              <li>Refunds will be credited back to the original payment method.</li>
              <li>Processing time may vary depending on the payment provider.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Third-Party Payment Processors</h2>
            <ul className="list-disc pl-6 mb-3 space-y-1">
              <li>All payments are processed securely by authorized third-party payment gateways.</li>
              <li>Any disputes related to payment processing (e.g., declined payments, bank-related issues) must be resolved directly with your payment provider.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. How to Request a Refund</h2>
            <p className="mb-3">
              If you believe you are eligible for a refund under the Exceptional Circumstances section, you may contact us by emailing <a href="mailto:support@beeptalk.in" className="text-blue-600 underline">support@beeptalk.in</a> within 7 days of the transaction.
            </p>
            <p className="mb-3">Please provide the following details:</p>
            <ul className="list-disc pl-6 mb-3 space-y-1">
              <li>Registered BeepTalk account information</li>
              <li>Transaction ID and payment receipt</li>
              <li>Reason for the refund request</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Policy Updates</h2>
            <p>
              BeepTalk reserves the right to update this Refund Policy at any time to reflect changes in law, business practices, or platform features. Updates will be communicated through official channels, and continued use of BeepTalk will indicate acceptance of the revised policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RefundPolicy;
