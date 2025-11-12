import Link from 'next/link';
import Footer from '@/components/Footer';

export default function AccountDeletion() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="font-bold text-lg md:text-xl text-gray-900">
                .We
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/#product" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                Product
              </Link>
              <Link href="/#traction" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                Traction
              </Link>
              <Link href="/thefuture" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                Memo
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4">
        <nav className="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-gray-900">Account Deletion</span>
        </nav>
      </div>

      {/* Account Deletion Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 lg:py-24">
        {/* Title */}
        <h1 className="text-center mb-8 md:mb-12 lg:mb-16 text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900">Deleting Your .we Account and Data</h1>

        {/* Full Content */}
        <div className="prose prose-gray max-w-none space-y-8 md:space-y-12">
          {/* Section 1 */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">1. Our Deletion Commitment</h2>
            <p className="text-gray-700 text-sm md:text-base">
              We understand that <strong>.we</strong> is a utility, and sometimes, utilities are no longer needed. We make the deletion process simple, permanent, and complete, honoring your right to be forgotten.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">2. How to Delete Your Account</h2>
            <p className="text-gray-700 text-sm md:text-base">
              You have two options to permanently delete your account and all associated data:
            </p>

            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 my-6 md:my-8">
              <h3 className="text-lg md:text-xl font-semibold mb-4">Option A: In-App Deletion (Recommended)</h3>
              <ol className="list-decimal pl-5 md:pl-6 space-y-2 md:space-y-3 text-gray-700 mt-4 text-sm md:text-base">
                <li>Navigate to <strong>Settings</strong> in the <strong>.we</strong> mobile app.</li>
                <li>Select <strong>Account & Privacy</strong>.</li>
                <li>Tap <strong>Delete My Account Permanently</strong>.</li>
                <li>Confirm your decision via the one-time verification email sent to your registered address.</li>
              </ol>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 my-6 md:my-8">
              <h3 className="text-lg md:text-xl font-semibold mb-4">Option B: Email Request</h3>
              <ol className="list-decimal pl-5 md:pl-6 space-y-2 md:space-y-3 text-gray-700 mt-4 text-sm md:text-base">
                <li>Send an email to <strong>privacy@dotwe.app</strong>.</li>
                <li>The subject line <strong>MUST</strong> be: <strong>Account Deletion Request - [Your Registered Email]</strong>.</li>
                <li>The body of the email must state your full name and confirm your intent to permanently delete your account.</li>
              </ol>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">3. What Happens When You Delete Your Account (The Data Breakdown)</h2>
            <p className="text-gray-700 text-sm md:text-base">
              Once deletion is initiated, the process is irreversible. We adhere to the following data handling schedule:
            </p>

            <div className="overflow-x-auto my-6 md:my-8 -mx-4 sm:mx-0">
              <div className="inline-block min-w-full align-middle">
                <table className="min-w-full border-collapse text-sm md:text-base">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-3 md:p-4 text-left text-xs md:text-sm font-semibold">Data Type</th>
                      <th className="border border-gray-300 p-3 md:p-4 text-left text-xs md:text-sm font-semibold">Action Taken</th>
                      <th className="border border-gray-300 p-3 md:p-4 text-left text-xs md:text-sm font-semibold">Retention Period</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 text-xs md:text-sm">
                    <tr>
                      <td className="border border-gray-300 p-3 md:p-4">
                        <strong>Registration Data</strong><br/>
                        (Name, Email, Job Title)
                      </td>
                      <td className="border border-gray-300 p-3 md:p-4">
                        Permanently deleted from all active servers.
                      </td>
                      <td className="border border-gray-300 p-3 md:p-4">
                        Within <strong>30 days</strong> of request confirmation.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 md:p-4">
                        <strong>Intent & Request History</strong><br/>
                        (Private Messages, Broadcasts)
                      </td>
                      <td className="border border-gray-300 p-3 md:p-4">
                        Permanently deleted.
                      </td>
                      <td className="border border-gray-300 p-3 md:p-4">
                        Within <strong>30 days</strong> of request confirmation.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 md:p-4">
                        <strong>Network Metadata</strong><br/>
                        (Your L1 contact graph)
                      </td>
                      <td className="border border-gray-300 p-3 md:p-4">
                        <strong>De-linked and Anonymized.</strong> The relational links associated with your unique User ID are removed. The non-personal, aggregated graph structure data (e.g., number of links in a city) may be retained in an anonymized, irreversible format for core analytical modeling, fully compliant with GDPR/CCPA.
                      </td>
                      <td className="border border-gray-300 p-3 md:p-4">
                        Anonymized immediately; permanently de-linked within <strong>30 days</strong>.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 md:p-4">
                        <strong>Billing/Payment Data</strong>
                      </td>
                      <td className="border border-gray-300 p-3 md:p-4">
                        Retained only as required by law for financial auditing purposes (typically 7 years).
                      </td>
                      <td className="border border-gray-300 p-3 md:p-4">
                        Varies by jurisdiction.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-gray-50 border-l-4 border-gray-400 p-4 md:p-6 my-6 md:my-8 rounded-r">
              <p className="text-gray-700 text-sm md:text-base">
                <strong>Important Note:</strong> Removing the app from your device <strong>does not</strong> delete your account. You must follow one of the methods above. Once deleted, your account cannot be recovered.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">4. Questions or Concerns?</h2>
            <p className="text-gray-700 text-sm md:text-base">
              If you have any questions about the account deletion process or our data handling practices, please contact us at:
            </p>
            <div className="mt-4 text-gray-700">
              <p><strong>Email:</strong> privacy@dotwe.app</p>
              <p className="mt-2"><strong>Subject Line:</strong> Account Deletion Inquiry</p>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

