'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Quote } from 'lucide-react';
import Footer from '@/components/Footer';

export default function Home() {
  const [email, setEmail] = useState('');

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup with email:', email);
    // Handle signup logic here
  };

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
              <a href="#product" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                Product
              </a>
              <a href="#traction" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                Traction
              </a>
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg">
                Get Early Access
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-32">
        <div className="text-center max-w-5xl mx-auto">
          {/* Top Badge */}
          <div className="flex justify-center mb-6 md:mb-8">
            <Badge className="bg-transparent border border-gray-300 text-gray-700 px-3 md:px-4 py-1.5 md:py-2 rounded-full flex items-center gap-2 text-xs md:text-sm">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Investment Opportunity
            </Badge>
          </div>

          <h1 className="mb-4 md:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-gray-900 leading-tight">
            The Future of Networking is Private, Trusted, and Ad-Free.
          </h1>
          <p className="text-gray-700 mb-8 md:mb-10 max-w-2xl mx-auto text-base md:text-lg px-4">
            Google Maps for Human Capital. The Anti-Social Network that Turns Your Contacts into a Private Knowledge Graph.
          </p>
          <form onSubmit={handleSignup} className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center max-w-xl mx-auto mb-6 md:mb-8 px-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white border-gray-300 h-11 md:h-12 px-4 md:px-6 rounded-lg md:rounded-xl text-sm md:text-base"
              required
            />
            <Button type="submit" className="bg-cyan-500 hover:bg-cyan-600 text-white whitespace-nowrap h-11 md:h-12 px-6 md:px-8 rounded-lg md:rounded-xl text-sm md:text-base">
              Request the Full Pitch Deck
            </Button>
          </form>

          {/* Status Chips */}
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 mt-6 md:mt-8 px-4">
            <Badge className="bg-transparent border-0 text-gray-600 px-0 flex items-center gap-2 text-xs md:text-sm">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Actively Fundraising
            </Badge>
            <Badge className="bg-transparent border-0 text-gray-600 px-0 flex items-center gap-2 text-xs md:text-sm">
              <span className="w-2 h-2 rounded-full bg-gray-400"></span>
              Raising Seed
            </Badge>
            <Badge className="bg-transparent border-0 text-gray-600 px-0 flex items-center gap-2 text-xs md:text-sm">
              <span className="w-2 h-2 rounded-full bg-gray-400"></span>
              Q1 2026 Launch
            </Badge>
          </div>

          {/* Stats Section */}
          <div className="mt-12 md:mt-16 pt-8 md:pt-12 border-t border-gray-200 px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
              <div className="text-center">
                <div className="mb-2 md:mb-3 text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900">$201B</div>
                <p className="text-gray-500 text-sm md:text-base">Market Opportunity</p>
              </div>
              <div className="text-center">
                <div className="mb-2 md:mb-3 text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900">788+</div>
                <p className="text-gray-500 text-sm md:text-base">Validated Surveys</p>
              </div>
              <div className="text-center">
                <div className="mb-2 md:mb-3 text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900">1.5M+</div>
                <p className="text-gray-500 text-sm md:text-base">Initial Addressable Users</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Card Section - The Three Moats - COMMENTED OUT */}
      {false && (
        <section id="product" className="py-16 md:py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16 lg:mb-20">
              <h2 className="mb-4 md:mb-6 text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900">
                Why LinkedIn Can't Do This
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg px-4">
                Discover the next networking protocol built for people who know what their network is worth
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 mb-8 md:mb-12">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 p-6 md:p-10 lg:p-12 xl:p-16">
                <div className="space-y-4 md:space-y-6 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900">Zero Trust. Zero Noise.</h3>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    We replace cold outreach and performance theatre with the efficiency of a trust-ranked routing engine. All connections are double-opt-in and human-routed. No ads, no feed, no doom-scrolling.
                  </p>
                  <div>
                    <Badge className="bg-gray-100 text-gray-700 border-0 px-3 md:px-4 py-1 md:py-1.5 text-xs md:text-sm">
                      100% Warm Introductions Only
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center justify-center md:justify-end order-first md:order-last">
                  <div className="w-full max-w-xs aspect-[9/16] rounded-2xl bg-gray-100 border border-gray-200"></div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-white rounded-2xl border border-gray-200">
                <div className="p-6 md:p-10 lg:p-12 space-y-4 md:space-y-6">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900">The Graph Utility</h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    We are built on a privacy-first Neo4j graph database that maps your network's intent and expertise, not just their job titles. It's an infrastructure layer for human capital you can query.
                  </p>
                  <div>
                    <Badge className="bg-gray-100 text-gray-700 border-0 px-3 md:px-4 py-1 md:py-1.5 text-xs md:text-sm">
                      Instant L1-L3 Pathfinding
                    </Badge>
                  </div>
                  <div className="rounded-xl bg-gray-100 border border-gray-200 w-full aspect-[16/10]"></div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200">
                <div className="p-6 md:p-10 lg:p-12 space-y-4 md:space-y-6">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900">Founder-Built. 6-Week Velocity.</h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    Idea to pivoted, functional beta with active pilot users in under 45 days. This platform is the first successful use case of itself—built by founders to solve their own co-founder problem.
                  </p>
                  <div>
                    <Badge className="bg-gray-100 text-gray-700 border-0 px-3 md:px-4 py-1 md:py-1.5 text-xs md:text-sm">
                      Founder-Built IP. No Outsourcing
                    </Badge>
                  </div>
                  <div className="rounded-xl bg-gray-100 border border-gray-200 w-full aspect-[16/10]"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Social Proof & Velocity Section - COMMENTED OUT */}
      {false && (
        <section id="traction" className="bg-white py-16 md:py-24 lg:py-32">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="mb-4 md:mb-6 text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900">
                Traction is the Only Proof
              </h2>
              <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto px-4">
                Currently scaling the Private Beta within premier networks, including pilot programs across IIT campuses.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 mb-12 md:mb-16">
              <div className="p-6 md:p-10 lg:p-12 xl:p-16">
                <div className="mb-4 md:mb-6">
                  <Quote className="w-6 h-6 md:w-8 md:h-8 text-gray-400" />
                </div>
                <blockquote className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 mb-4 md:mb-6 leading-relaxed">
                  "I found my next hire in 48 hours. LinkedIn took 4 weeks."
                </blockquote>
                <cite className="text-gray-600 not-italic text-sm md:text-base">Pilot User, Tech Startup Founder</cite>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-semibold mb-2 text-gray-900">48hrs</div>
                <p className="text-gray-600 text-sm md:text-base">Avg. Time to Match</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-semibold mb-2 text-gray-900">94%</div>
                <p className="text-gray-600 text-sm md:text-base">Connection Success Rate</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-semibold mb-2 text-gray-900">IIT+</div>
                <p className="text-gray-600 text-sm md:text-base">Premier Network Beta</p>
              </div>
            </div>

            <div className="text-center px-4">
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white h-11 md:h-12 px-6 md:px-8 rounded-lg text-sm md:text-base font-medium w-full sm:w-auto">
                Apply to be a Founding Beta Member
              </Button>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}

