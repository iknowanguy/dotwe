import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Footer from '@/components/Footer';

export default function Privacy() {
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
            </div>
          </div>
        </div>
      </nav>

      {/* Privacy Policy Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
        {/* Title */}
        <h1 className="text-center mb-8 md:mb-12 lg:mb-16 text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900">Privacy Policy</h1>

        {/* Summary Box */}
        <div className="bg-gray-50 rounded-2xl p-6 md:p-8 lg:p-12 mb-12 md:mb-16">
          <h2 className="mb-4 md:mb-6 text-xl md:text-2xl font-semibold text-gray-900">For Your Privacy</h2>
          <p className="text-gray-700 mb-8">
            We care about your <strong>privacy</strong> and keep it simple. This policy explains how we collect, use, and protect the limited information you share with us on <strong>.we</strong>, and how you stay in control of it.
          </p>

          <h3 className="mb-4">In short</h3>
          <ul className="space-y-4">
            <li className="flex gap-3 text-gray-700">
              <ArrowRight className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
              <span>We collect only what's needed like your name, email, or data you share through forms.</span>
            </li>
            <li className="flex gap-3 text-gray-700">
              <ArrowRight className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
              <span>Some usage data (like browser type or time spent on the site) may be collected to improve your experience.</span>
            </li>
            <li className="flex gap-3 text-gray-700">
              <ArrowRight className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
              <span>We don't sell, trade, or misuse your information.</span>
            </li>
            <li className="flex gap-3 text-gray-700">
              <ArrowRight className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
              <span>You can review, correct, or withdraw your data anytime by emailing <strong>privacy@we.app</strong>.</span>
            </li>
            <li className="flex gap-3 text-gray-700">
              <ArrowRight className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
              <span>Our site may link to third-party platforms and their privacy policies apply once you leave ours.</span>
            </li>
            <li className="flex gap-3 text-gray-700">
              <ArrowRight className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
              <span>Using our site means you agree to these practices and our Terms of Use.</span>
            </li>
          </ul>

          <p className="text-gray-600 mt-8 text-sm">
            If you'd like to read the full details (and we recommend you do), the complete policy follows below.
          </p>

          <p className="text-gray-600 mt-6 text-sm">
            <strong>Note:</strong> This is a plain-language summary meant to help you understand the gist. It isn't a substitute for the full Privacy Policy. If there's ever a conflict, the full Policy will take precedence.
          </p>
        </div>

        {/* Effective Date */}
        <div className="mb-12 text-gray-700">
          <p><strong>Effective Date:</strong> November 10, 2025</p>
          <p><strong>Last Updated:</strong> November 10, 2025</p>
        </div>

        {/* Full Policy */}
        <div className="prose prose-gray max-w-none space-y-8 md:space-y-12">
          {/* Section 1 */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">1. Introduction and Our Commitment to Privacy</h2>
            <p className="text-gray-700 text-sm md:text-base">
              <strong>.we</strong> (referred to as "we," "us," or "our") is fundamentally a <strong>utility-first trust infrastructure, not a social media platform.</strong> Our entire technical and business model is predicated on protecting and respecting your professional network's privacy. We do not operate on an advertising model, and we do not profit from content creation or data commoditization. This Policy details how we collect, use, disclose, and safeguard your information when you use the <strong>.we</strong> mobile application and associated website (collectively, the "Service").
            </p>
            <p className="text-gray-700 text-sm md:text-base">
              By accessing or using the Service, you signify that you have read, understood, and agree to our collection, storage, use, and disclosure of your Personal Data as described in this Privacy Policy.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">2. The Core Principle: Data Minimization and The Trust Graph Moat</h2>
            <p className="text-gray-700 text-sm md:text-base">
              Our system is engineered using a <strong>Data Minimization</strong> approach. We only collect the necessary metadata to achieve our core function: <strong>routing the shortest, most trusted path</strong> for professional introductions. We store your network connections in a private, encrypted <strong>Neo4j Graph Database</strong>, which protects your L1 connections while making your L2/L3 connections discoverable only through the <strong>double-opt-in routing process.</strong>
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">3. Data We Collect and The Purpose of Collection</h2>
            <p className="text-gray-700 text-sm md:text-base">
              We collect two primary types of information: (A) Information You Provide Directly and (B) Information Collected Automatically.
            </p>

            <div className="overflow-x-auto my-6 md:my-8 -mx-4 sm:mx-0">
              <div className="inline-block min-w-full align-middle">
                <table className="min-w-full border-collapse text-sm md:text-base">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-3 md:p-4 text-left text-xs md:text-sm font-semibold">Category</th>
                      <th className="border border-gray-300 p-3 md:p-4 text-left text-xs md:text-sm font-semibold">Type of Data Collected</th>
                      <th className="border border-gray-300 p-3 md:p-4 text-left text-xs md:text-sm font-semibold">Purpose of Collection</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 text-xs md:text-sm">
                    <tr>
                      <td className="border border-gray-300 p-3 md:p-4"><strong>A. Provided Directly (Account Setup)</strong></td>
                      <td className="border border-gray-300 p-3 md:p-4"><strong>Account Registration Data:</strong> Full Name, Professional Email Address, Job Title, Company/Organization, Profile Photo (optional), Password (encrypted).</td>
                      <td className="border border-gray-300 p-3 md:p-4">To establish your unique professional identity, personalize the Service, and secure your account. (Contractual Necessity)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 md:p-4"><strong>A. Provided Directly (Graph Building)</strong></td>
                      <td className="border border-gray-300 p-3 md:p-4"><strong>Network Metadata:</strong> We collect <strong>encrypted, one-way hashed</strong> versions of your professional contacts' names and associated organizations/roles from your phonebook or synced third-party applications. <strong>(We do not store raw phone numbers, full contact lists, or unencrypted private data).</strong></td>
                      <td className="border border-gray-300 p-3 md:p-4">To build the foundational <strong>Trust Graph</strong> and calculate multi-hop connection paths (L1, L2, L3) for routing requests. (Explicit User Consent/Legitimate Interest)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 md:p-4"><strong>A. Provided Directly (Utility)</strong></td>
                      <td className="border border-gray-300 p-3 md:p-4"><strong>Intent Data:</strong> The content of your specific broadcast requests (e.g., "Need an introduction to a seed-stage VC in NYC," "Looking for a contract ML Engineer").</td>
                      <td className="border border-gray-300 p-3 md:p-4">To fulfill the core utility of the Service—matching and routing your need to the most qualified path. <strong>This content is only shared with the L1 human router.</strong> (Contractual Necessity)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 md:p-4"><strong>B. Collected Automatically (Usage)</strong></td>
                      <td className="border border-gray-300 p-3 md:p-4"><strong>Usage Data:</strong> Device IDs, IP Address, Mobile Operating System, Browser Type, Session Duration, pages/screens viewed, features used (e.g., successful routes executed vs. failed requests).</td>
                      <td className="border border-gray-300 p-3 md:p-4">To monitor the performance of the routing engine, track key metrics (e.g., velocity, successful introductions), and improve the app's functionality and security. (Legitimate Interest)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 md:p-4"><strong>B. Collected Automatically (Technical)</strong></td>
                      <td className="border border-gray-300 p-3 md:p-4"><strong>Location Data (Approximate):</strong> Derived from IP address, such as city or state, <strong>never precise GPS data.</strong></td>
                      <td className="border border-gray-300 p-3 md:p-4">To localize professional network searches (e.g., filtering a search for a "Product Designer in Bangalore"). (Legitimate Interest)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">4. How We Use and Process Your Information</h2>
            <p className="text-gray-700 text-sm md:text-base">
              Your data is used exclusively to operate, maintain, and improve the <strong>.we</strong> Service and to uphold its privacy-centric design.
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li><strong>Service Provision:</strong> To provide the core utility of pathfinding, matching, and routing introduction requests.</li>
              <li><strong>Graph Calculation:</strong> To maintain the structural integrity and efficiency of the Neo4j Trust Graph.</li>
              <li><strong>Security and Integrity:</strong> To detect, prevent, and address technical issues, fraud, and unauthorized access to the Service.</li>
              <li><strong>Communication:</strong> To send you necessary service communications (e.g., password resets, confirmation of routed requests, or notifications about changes to our policies).</li>
            </ol>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">5. Data Sharing and Disclosure (The Zero-Sharing Guarantee)</h2>
            <p className="text-gray-700 text-sm md:text-base">
              <strong>We do not sell, rent, trade, or otherwise monetize your Personal Data, network metadata, or Usage Data to third parties for marketing or advertising purposes.</strong> Our business model is based on premium utility subscriptions, not data.
            </p>
            <p className="text-gray-700 text-sm md:text-base">
              We may share your information only in the following limited circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>With Your Explicit Consent (The Core Function):</strong> When you initiate an introduction request, we will share the necessary information (<strong>your name, intent/request, and professional context</strong>) with the <strong>L1 human router</strong> to facilitate the double-opt-in warm introduction.</li>
              <li><strong>Service Providers:</strong> We engage trusted third-party service providers (e.g., cloud hosting/storage providers like AWS/GCP, transactional email services) to perform functions on our behalf. These third parties are bound by strict confidentiality and data protection agreements and are only permitted to use the data to perform the contracted services.</li>
              <li><strong>Legal Requirements:</strong> If required to do so by law or in the good faith belief that such action is necessary to comply with a legal obligation, protect and defend the rights or property of <strong>.we</strong>, or protect the personal safety of users or the public.</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, sale of company assets, financing, or acquisition of all or a portion of our business by another company. In such an event, users will be notified.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">6. Data Security and Storage</h2>
            <p className="text-gray-700 text-sm md:text-base">We take the security of your data seriously.</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Encryption:</strong> We use <strong>industry-standard encryption (SSL/TLS)</strong> to protect data transmitted between your device and our servers. Contact graph metadata is stored in our database using <strong>encryption at rest</strong>.</li>
              <li><strong>Architecture:</strong> Our Neo4j Graph Database is a key component of our security moat. By storing <strong>metadata and relationships</strong> instead of raw contact information, we minimize the liability and risk associated with traditional social network data storage.</li>
              <li><strong>Retention:</strong> We retain Personal Data only for as long as your account is active or as necessary to provide the Service. If you delete your account, your registration data will be deleted within <strong>30 days</strong>, and your network metadata will be anonymized and retained only in aggregated form for analytical purposes.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">7. Your Data Protection Rights</h2>
            <p className="text-gray-700 text-sm md:text-base">
              Depending on your jurisdiction (including GDPR, CCPA/CPRA, etc.), you have the following rights concerning your Personal Data:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Right to Access:</strong> You have the right to request copies of the Personal Data we hold about you.</li>
              <li><strong>Right to Rectification:</strong> You have the right to request that we correct any information you believe is inaccurate or incomplete.</li>
              <li><strong>Right to Erasure (Right to Be Forgotten):</strong> You have the right to request that we erase your Personal Data, subject to certain legal obligations.</li>
              <li><strong>Right to Object to Processing:</strong> You have the right to object to our processing of your Personal Data, particularly concerning automated data processing.</li>
              <li><strong>Right to Data Portability:</strong> You have the right to request that we transfer the data that we have collected to another organization, or directly to you.</li>
            </ul>
            <p className="text-gray-700 mt-4">
              To exercise any of these rights, please contact us at the address provided in Section 10.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">8. Children's Privacy</h2>
            <p className="text-gray-700 text-sm md:text-base">
              The <strong>.we</strong> Service is intended for professional use and is not directed at individuals under the age of 18. We do not knowingly collect personally identifiable information from anyone under 18. If you are a parent or guardian and you are aware that your child has provided us with Personal Data, please contact us immediately.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">9. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 text-sm md:text-base">
              We may update our Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We will also inform you via the email address associated with your account or through a prominent notice on the Service prior to the change becoming effective.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">10. Contact Us</h2>
            <p className="text-gray-700 text-sm md:text-base">
              If you have any questions or concerns about this Privacy Policy, our data practices, or if you wish to exercise your data rights, please contact us:
            </p>
            <div className="mt-4 text-gray-700">
              <p><strong>By Email:</strong> privacy@we.app</p>
              <p className="mt-2"><strong>By Mail:</strong></p>
              <p>.We Inc.</p>
              <p>[Your Company Address]</p>
              <p>[City, State, Zip Code]</p>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

