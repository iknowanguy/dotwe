import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function AccountDeletion() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="font-semibold">
                .We
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#use-case" className="text-gray-600 hover:text-gray-900">
                Use Case
              </a>
              <a href="#product" className="text-gray-600 hover:text-gray-900 flex items-center gap-2">
                Product
                <Badge variant="secondary" className="bg-gray-200 text-gray-700 border-0">
                  Beta
                </Badge>
              </a>
              <a href="#about" className="text-gray-600 hover:text-gray-900">
                About
              </a>
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg">
                Download
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Account Deletion Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Title */}
        <h1 className="text-center mb-16">Deleting Your .we Account and Data</h1>

        {/* Full Content */}
        <div className="prose prose-gray max-w-none space-y-12">
          {/* Section 1 */}
          <section>
            <h2>1. Our Deletion Commitment</h2>
            <p className="text-gray-700">
              We understand that <strong>.we</strong> is a utility, and sometimes, utilities are no longer needed. We make the deletion process simple, permanent, and complete, honoring your right to be forgotten.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2>2. How to Delete Your Account</h2>
            <p className="text-gray-700">
              You have two options to permanently delete your account and all associated data:
            </p>

            <div className="bg-gray-50 rounded-2xl p-8 my-8">
              <h3>Option A: In-App Deletion (Recommended)</h3>
              <ol className="list-decimal pl-6 space-y-3 text-gray-700 mt-4">
                <li>Navigate to <strong>Settings</strong> in the <strong>.we</strong> mobile app.</li>
                <li>Select <strong>Account & Privacy</strong>.</li>
                <li>Tap <strong>Delete My Account Permanently</strong>.</li>
                <li>Confirm your decision via the one-time verification email sent to your registered address.</li>
              </ol>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 my-8">
              <h3>Option B: Email Request</h3>
              <ol className="list-decimal pl-6 space-y-3 text-gray-700 mt-4">
                <li>Send an email to <strong>privacy@we.app</strong>.</li>
                <li>The subject line <strong>MUST</strong> be: <strong>Account Deletion Request - [Your Registered Email]</strong>.</li>
                <li>The body of the email must state your full name and confirm your intent to permanently delete your account.</li>
              </ol>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2>3. What Happens When You Delete Your Account (The Data Breakdown)</h2>
            <p className="text-gray-700">
              Once deletion is initiated, the process is irreversible. We adhere to the following data handling schedule:
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-4 text-left">Data Type</th>
                    <th className="border border-gray-300 p-4 text-left">Action Taken</th>
                    <th className="border border-gray-300 p-4 text-left">Retention Period</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr>
                    <td className="border border-gray-300 p-4">
                      <strong>Registration Data</strong><br/>
                      (Name, Email, Job Title)
                    </td>
                    <td className="border border-gray-300 p-4">
                      Permanently deleted from all active servers.
                    </td>
                    <td className="border border-gray-300 p-4">
                      Within <strong>30 days</strong> of request confirmation.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-4">
                      <strong>Intent & Request History</strong><br/>
                      (Private Messages, Broadcasts)
                    </td>
                    <td className="border border-gray-300 p-4">
                      Permanently deleted.
                    </td>
                    <td className="border border-gray-300 p-4">
                      Within <strong>30 days</strong> of request confirmation.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-4">
                      <strong>Network Metadata</strong><br/>
                      (Your L1 contact graph)
                    </td>
                    <td className="border border-gray-300 p-4">
                      <strong>De-linked and Anonymized.</strong> The relational links associated with your unique User ID are removed. The non-personal, aggregated graph structure data (e.g., number of links in a city) may be retained in an anonymized, irreversible format for core analytical modeling, fully compliant with GDPR/CCPA.
                    </td>
                    <td className="border border-gray-300 p-4">
                      Anonymized immediately; permanently de-linked within <strong>30 days</strong>.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-4">
                      <strong>Billing/Payment Data</strong>
                    </td>
                    <td className="border border-gray-300 p-4">
                      Retained only as required by law for financial auditing purposes (typically 7 years).
                    </td>
                    <td className="border border-gray-300 p-4">
                      Varies by jurisdiction.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 my-8">
              <p className="text-gray-700">
                <strong>Important Note:</strong> Removing the app from your device <strong>does not</strong> delete your account. You must follow one of the methods above. Once deleted, your account cannot be recovered.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2>4. Questions or Concerns?</h2>
            <p className="text-gray-700">
              If you have any questions about the account deletion process or our data handling practices, please contact us at:
            </p>
            <div className="mt-4 text-gray-700">
              <p><strong>Email:</strong> privacy@we.app</p>
              <p className="mt-2"><strong>Subject Line:</strong> Account Deletion Inquiry</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

