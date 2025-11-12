import { Badge } from './ui/badge';
import { Button } from './ui/button';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button onClick={() => window.location.reload()} className="font-semibold">
                .We
              </button>
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

      {/* TOS Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Title */}
        <h1 className="text-center mb-16">Terms of Service and End-User License Agreement (EULA)</h1>

        {/* Effective Date */}
        <div className="mb-12 text-gray-700">
          <p><strong>Effective Date:</strong> November 10, 2025</p>
        </div>

        {/* Full TOS */}
        <div className="prose prose-gray max-w-none space-y-12">
          {/* Section 1 */}
          <section>
            <h2>1. Agreement to Terms</h2>
            <p className="text-gray-700">
              These Terms of Service ("Terms") constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you"), and <strong>[Your Company Legal Name, e.g., We Technologies Private Limited]</strong> concerning your access to and use of the <strong>.we</strong> mobile application and website (the "Service"). You agree that by accessing the Service, you have read, understood, and agree to be bound by all of these Terms.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2>2. The Service and Utility Provision</h2>
            
            <h3>2.1. Nature of the Service</h3>
            <p className="text-gray-700">
              The <strong>.we</strong> Service is a <strong>utility-first professional network</strong> designed to provide <strong>trusted, human-routed introductions</strong> by mapping the shortest path in your professional graph. We provide a <strong>pathfinding and request routing service</strong>, not a traditional social media platform.
            </p>

            <h3>2.2. Service License (EULA)</h3>
            <p className="text-gray-700">
              Subject to your compliance with these Terms, <strong>.we</strong> grants you a non-exclusive, non-transferable, revocable license to use the Service solely for your internal professional and business purposes.
            </p>

            <h3>2.3. Anti-Social Media Clause</h3>
            <p className="text-gray-700">
              You acknowledge that <strong>.we</strong> is designed to eliminate low-signal noise. The service does not permit, and we actively prohibit, general broadcasting, cold-messaging, content feeds, or advertising that is not strictly related to a valid, intent-mapped request for an introduction or resource.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2>3. User Representations and Prohibited Conduct</h2>
            
            <h3>3.1. Account Truthfulness</h3>
            <p className="text-gray-700">
              You represent and warrant that all registration information you submit is truthful and accurate, and that you will maintain the accuracy of such information. You must be at least 18 years of age to use the Service.
            </p>

            <h3>3.2. Prohibited Activities</h3>
            <p className="text-gray-700">
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
            <h2>4. Intellectual Property Rights</h2>
            
            <h3>4.1. Our IP</h3>
            <p className="text-gray-700">
              The content on the Service, including the text, graphics, the proprietary <strong>pathfinding algorithms</strong>, the Neo4j graph data model, and the selection and arrangement thereof (collectively, the "Proprietary Material"), is owned by <strong>.we</strong> or licensed to <strong>.we</strong> and is protected by copyright and intellectual property laws.
            </p>

            <h3>4.2. User Content & Network Data</h3>
            <p className="text-gray-700">
              You grant <strong>.we</strong> a worldwide, royalty-free license to use your User Content (e.g., your tagged professional intent, profile data) and your Network Metadata (the encrypted graph of your connections) <strong>solely for the purpose of operating and improving the Service</strong> (i.e., calculating and routing connection paths). You retain full ownership of your data.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2>5. Termination and Suspension</h2>
            
            <h3>5.1. By .we</h3>
            <p className="text-gray-700">
              We may terminate or suspend your account immediately, without prior notice or liability, if you breach the Prohibited Conduct in Section 3.2 or any other material term.
            </p>

            <h3>5.2. Effect of Termination</h3>
            <p className="text-gray-700">
              Upon termination, your right to use the Service will immediately cease. All data associated with your account will be handled according to Section 3 of the <strong>Account Deletion Policy</strong>.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2>6. Disclaimers and Limitation of Liability</h2>
            
            <h3>6.1. Disclaimer of Warranties</h3>
            <p className="text-gray-700">
              The Service is provided on an <strong>AS-IS and AS-AVAILABLE</strong> basis. Your use of the Service is at your sole risk. <strong>.we</strong> makes no warranties regarding the success rate of any introduction, the accuracy of L2/L3 connection metadata, or the quality of connections routed through the Service.
            </p>

            <h3>6.2. Limitation of Liability</h3>
            <p className="text-gray-700">
              In no event shall <strong>.we</strong>, its directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the Service.
            </p>
          </section>


          {/* Section 8 */}
          <section>
            <h2>7. Contact Information</h2>
            <p className="text-gray-700">
              For questions regarding these Terms, please contact us at: <strong>legal@dotwe.app</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
