import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TheFuture() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />

      <header className="border-b border-gray-200/60 bg-white">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
          <p className="uppercase tracking-[0.3em] text-[11px] text-gray-500 mb-6">The Founders Memo</p>
          <h1 className="text-2xl sm:text-3xl md:text-[2.5rem] leading-tight font-medium text-gray-900 mb-4">
            The Shortest Path: Why the Anti-Social Network is the Next Great Monopoly
          </h1>
          <p className="text-gray-500 text-sm">By The Founders of .we</p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 space-y-12">
        <section className="space-y-5">
          <h2 className="text-xl sm:text-2xl font-medium text-gray-900">
            The Problem: The Great Disconnect and the Enshittification of Networks
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-[15px]">
            The professional networking world is broken, but not for the reason you think. The problem isn’t a lack of connections; it’s a lack of trust and utility. The global professional network, valued in the hundreds of billions, is fundamentally dysfunctional.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-[15px]">
            It has fallen victim to the predictable three-stage process of decay that tech author Cory Doctorow calls
            <span className="font-medium"> "Enshittification."</span>
          </p>
          <ol className="list-decimal pl-6 space-y-3 text-gray-600 leading-relaxed text-sm sm:text-[15px]">
            <li>
              <span className="font-medium">Stage 1: Good to Users (Acquisition):</span> Platforms offered utility to build critical mass.
            </li>
            <li>
              <span className="font-medium">Stage 2: Abuse Users to Serve Business (Monetization):</span> They optimized for advertising and content feeds, turning relationships into a broadcast marketplace. Your signal (connection) became diluted by their noise (ads, irrelevant posts, cold-inmails).
            </li>
            <li>
              <span className="font-medium">Stage 3: Abuse Everyone to Serve Shareholders (Terminal Decay):</span> The platform becomes a noisy, low-trust performance stage where utility is secondary to engagement metrics.
            </li>
          </ol>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-[15px]">
            The result? The modern professional profile is a stagnant resume, and the network is a massive graph of locked potential. You have thousands of L1 connections, but when you need a trusted introduction to the CEO of a specific company, or a technical co-founder with a niche skill, the search fails. Why? Because the network provides signal theater instead of a utility roadmap.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-[15px]">
            We are building a future where your professional network is a private, technical asset, not a public, monetized liability.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-xl sm:text-2xl font-medium text-gray-900">Our Solution: Google Maps for Human Capital</h2>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-[15px]">
            The core thesis of .we is simple: The value of a professional network is measured by its shortest trusted path, not its total size.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-[15px]">
            We are not building another platform; we are building infrastructure.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-[15px]">
            .we is the Google Maps for Human Capital. You tell us where you need to go (e.g., "Need an introduction to a Series B founder in SaaS"), and we use proprietary pathfinding algorithms to map the most efficient, L1-verified path to that person.
          </p>
        </section>

        <section className="space-y-5">
          <h3 className="text-lg sm:text-xl font-medium text-gray-900">The Technical Moat: The Graph Architecture</h3>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-[15px]">Our competitive advantage is the elimination of noise through technical design:</p>
          <ul className="list-disc pl-6 space-y-3 text-gray-600 leading-relaxed text-sm sm:text-[15px]">
            <li>
              <span className="font-medium">Graph Utility over Content:</span> We use a Neo4j-based graph architecture to store relationships and attributes as weighted edges. This is an intent-mapped graph, not a content feed. It is optimized for calculation (finding the shortest path) and trust scoring (L1, L2, L3 verification), not for engagement time.
            </li>
            <li>
              <span className="font-medium">Trust-First Protocol:</span> Every request for an introduction is double-opt-in, routed only through L1 connections who agree to forward the request. This eliminates cold outreach and preserves the most valuable resource in the professional world: social capital.
            </li>
            <li>
              <span className="font-medium">Anti-Social Media Design:</span> There are no feeds, no public broadcasting, no ads. The only way to interact is through a structured request that maps to a specific utility need.
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-[15px]">
            We are solving the Liquidity Problem of social capital. We turn latent, stored connections into instantly actionable, high-quality introductions.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-xl sm:text-2xl font-medium text-gray-900">Why Now? The Inflection Point</h2>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-[15px]">
            Three structural shifts make this the mandatory time to build .we:
          </p>
          <ol className="list-decimal pl-6 space-y-3 text-gray-600 leading-relaxed text-sm sm:text-[15px]">
            <li>
              <span className="font-medium">The Fatigue of Performance Theater:</span> The professional class has never been more exhausted by the forced positivity and broadcast spam of legacy networks. The appetite for a pure utility, privacy-preserving tool has reached a tipping point. Professionals are actively looking to consolidate their time and trust.
            </li>
            <li>
              <span className="font-medium">The AI/Automation Imperative:</span> As AI automates more general tasks, the value of human-routed, trusted connections becomes exponentially higher. The decision on who to talk to, and how to reach them, is the final mile of automation. We are building the API for trusted access.
            </li>
            <li>
              <span className="font-medium">Founder Velocity & Technical Moat:</span> We hit this problem with unique insight, built the MVP in six weeks, and immediately launched a pilot with Stage 1 users. We are operating at hyper-velocity, turning the deep technical insight (IIT Kharagpur/IIT Guwahati technical background) into defensible intellectual property faster than incumbents can react. We don't have to navigate a legacy advertising business model; we built the network correctly from the ground up.
            </li>
          </ol>
        </section>

        <section className="space-y-5">
          <h2 className="text-xl sm:text-2xl font-medium text-gray-900">Where We're Going: Building the Human Infrastructure Layer</h2>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-[15px]">
            The vision is not to be a better networking site. The vision is to be the default infrastructure layer for all high-value professional interactions.
          </p>
          <div className="overflow-x-auto border border-gray-200 rounded-2xl">
            <table className="min-w-full divide-y divide-gray-200 text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 sm:px-6 py-3 text-[11px] font-medium text-gray-600 uppercase tracking-[0.2em]">Phase</th>
                  <th className="px-4 sm:px-6 py-3 text-[11px] font-medium text-gray-600 uppercase tracking-[0.2em]">Goal</th>
                  <th className="px-4 sm:px-6 py-3 text-[11px] font-medium text-gray-600 uppercase tracking-[0.2em]">Key Feature / Metric</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                <tr>
                  <td className="px-4 sm:px-6 py-4 font-medium text-gray-900">Q4 2025: Pilot</td>
                  <td className="px-4 sm:px-6 py-4">Validate utility and close the trust loop.</td>
                  <td className="px-4 sm:px-6 py-4">4 IIT Campuses, 50% WAU Retention (Current Pilot Goal).</td>
                </tr>
                <tr>
                  <td className="px-4 sm:px-6 py-4 font-medium text-gray-900">Q1 2026: Beta Launch</td>
                  <td className="px-4 sm:px-6 py-4">Scale defensibly to premier institutions.</td>
                  <td className="px-4 sm:px-6 py-4">Monetize early with premium seats; 50K Users, $500K ARR.</td>
                </tr>
                <tr>
                  <td className="px-4 sm:px-6 py-4 font-medium text-gray-900">5-Year Vision</td>
                  <td className="px-4 sm:px-6 py-4">Become the standard professional utility layer.</td>
                  <td className="px-4 sm:px-6 py-4">50M Users, $150M+ ARR.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-[15px]">
            The revenue model is subscription-based, selling premium seats for advanced analytics, weighted path scoring, and recruiter consoles to firms. We sell utility, not eyeballs.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-[15px]">
            We are building a non-linear business. Our network effects are structural—the more L1 connections (nodes) join, the shorter the paths become for everyone else (value compounds). This is a technical monopoly waiting to be claimed.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-xl sm:text-2xl font-medium text-gray-900">Join Us: The Seed Round Ask</h2>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-[15px]">
            We have validated the market, deployed the core graph technology, and proven velocity in our pilot phase. We have built the anti-social network that finally solves the problem of professional capital liquidity.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-[15px]">
            We are raising a Seed Round to scale the core engineering team, deepen the proprietary graph architecture, and expand our initial community concierge to 10 tier-1 institutions.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-[15px]">
            We are looking for partners who understand the non-consensus truth: that infrastructure beats advertising, and that the future of networking is based on the utility graph, not the content feed.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-[15px]">
            If you are interested in funding the next great technical monopoly in the professional landscape, we welcome you to review our investment deck and join us in building the shortest path.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
            <p className="text-gray-800 font-medium text-sm">Contact the Founders directly:</p>
            <a href="mailto:founders@we.app" className="text-gray-900 hover:text-gray-700 transition-colors text-sm">
              founders@we.app
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
