import Link from 'next/link';
import Footer from '@/components/Footer';

export default function TermsOfService() {
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
          <span className="text-gray-900">Terms & Conditions</span>
        </nav>
      </div>

      {/* TOS Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 lg:py-24">
        {/* Title */}
        <h1 className="text-center mb-8 md:mb-12 lg:mb-16 text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900">Terms of Service and End-User License Agreement (EULA)</h1>

        {/* Effective Date */}
        <div className="mb-12 text-gray-700">
          <p><strong>Effective Date:</strong> November 10, 2025</p>
        </div>

        {/* Full TOS */}
        <div className="prose prose-gray max-w-none space-y-8 md:space-y-12">
          {/* Section 1 */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700 text-sm md:text-base">
              These Terms of Service ("Terms") constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you"), and <strong>[Your Company Legal Name, e.g., We Technologies Private Limited]</strong> concerning your access to and use of the <strong>.we</strong> mobile application and website (the "Service"). You agree that by accessing the Service, you have read, understood, and agree to be bound by all of these Terms.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">2. The Service and Utility Provision</h2>
            
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">2.1. Nature of the Service</h3>
            <p className="text-gray-700 text-sm md:text-base">
              The <strong>.we</strong> Service is a <strong>utility-first professional network</strong> designed to provide <strong>trusted, human-routed introductions</strong> by mapping the shortest path in your professional graph. We provide a <strong>pathfinding and request routing service</strong>, not a traditional social media platform.
            </p>

            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">2.2. Service License (EULA)</h3>
            <p className="text-gray-700 text-sm md:text-base">
              Subject to your compliance with these Terms, <strong>.we</strong> grants you a non-exclusive, non-transferable, revocable license to use the Service solely for your internal professional and business purposes.
            </p>

            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">2.3. Anti-Social Media Clause</h3>
            <p className="text-gray-700 text-sm md:text-base">
              You acknowledge that <strong>.we</strong> is designed to eliminate low-signal noise. The service does not permit, and we actively prohibit, general broadcasting, cold-messaging, content feeds, or advertising that is not strictly related to a valid, intent-mapped request for an introduction or resource.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">3. User Representations and Prohibited Conduct</h2>
            
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">3.1. Account Truthfulness</h3>
            <p className="text-gray-700 text-sm md:text-base">
              You represent and warrant that all registration information you submit is truthful and accurate, and that you will maintain the accuracy of such information. You must be at least 18 years of age to use the Service.
            </p>

            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">3.2. Prohibited Activities</h3>
            <p className="text-gray-700 text-sm md:text-base">
              You may not access or use the Service for any purpose other than that for which we make the Service available. Prohibited activity includes, but is not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Spamming or Unsolicited Contact:</strong> Using the Service to generate, route, or facilitate high volumes of unsolicited requests or messages.</li>
              <li><strong>Data Scraping:</strong> Systematically retrieving data or other content from the Service to create or compile, directly or indirectly, a collection, compilation, database, or directory.</li>
              <li><strong>IP Infringement:</strong> Attempting to reverse-engineer, decompile, or otherwise gain access to the source code or proprietary algorithms of the <strong>.we</strong> graph architecture.</li>
              <li><strong>Trust Abuse:</strong> Submitting fraudulent, misleading, or malicious introduction requests.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">4. Intellectual Property Rights</h2>
            
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">4.1. Our IP</h3>
            <p className="text-gray-700 text-sm md:text-base">
              The content on the Service, including the text, graphics, the proprietary <strong>pathfinding algorithms</strong>, the Neo4j graph data model, and the selection and arrangement thereof (collectively, the "Proprietary Material"), is owned by <strong>.we</strong> or licensed to <strong>.we</strong> and is protected by copyright and intellectual property laws.
            </p>

            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">4.2. User Content & Network Data</h3>
            <p className="text-gray-700 text-sm md:text-base">
              You grant <strong>.we</strong> a worldwide, royalty-free license to use your User Content (e.g., your tagged professional intent, profile data) and your Network Metadata (the encrypted graph of your connections) <strong>solely for the purpose of operating and improving the Service</strong> (i.e., calculating and routing connection paths). You retain full ownership of your data.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">5. Termination and Suspension</h2>
            
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">5.1. By .we</h3>
            <p className="text-gray-700 text-sm md:text-base">
              We may terminate or suspend your account immediately, without prior notice or liability, if you breach the Prohibited Conduct in Section 3.2 or any other material term.
            </p>

            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">5.2. Effect of Termination</h3>
            <p className="text-gray-700 text-sm md:text-base">
              Upon termination, your right to use the Service will immediately cease. All data associated with your account will be handled according to Section 3 of the <strong>Account Deletion Policy</strong>.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">6. Disclaimers and Limitation of Liability</h2>
            
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">6.1. Disclaimer of Warranties</h3>
            <p className="text-gray-700 text-sm md:text-base">
              The Service is provided on an <strong>AS-IS and AS-AVAILABLE</strong> basis. Your use of the Service is at your sole risk. <strong>.we</strong> makes no warranties regarding the success rate of any introduction, the accuracy of L2/L3 connection metadata, or the quality of connections routed through the Service.
            </p>

            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">6.2. Limitation of Liability</h3>
            <p className="text-gray-700 text-sm md:text-base">
              In no event shall <strong>.we</strong>, its directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the Service.
            </p>
          </section>


          {/* Section 8 */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">8. Contact Information</h2>
            <p className="text-gray-700 text-sm md:text-base">
              For questions regarding these Terms, please contact us at: <strong>legal@dotwe.app</strong>.
            </p>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

