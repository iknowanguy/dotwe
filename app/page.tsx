'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Shield, Network, Zap, Quote } from 'lucide-react';

export default function Home() {
  const [email, setEmail] = useState('');

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup with email:', email);
    // Handle signup logic here
  };

  return (
    <div className="min-h-screen bg-gray-50">
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

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center max-w-5xl mx-auto">
          {/* Top Badge */}
          <div className="flex justify-center mb-8">
            <Badge className="bg-transparent border border-gray-300 text-gray-700 px-4 py-2 rounded-full flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Investment Opportunity
            </Badge>
          </div>

          <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl">
            The Future of Networking is Private, Trusted, and Ad-Free.
          </h1>
          <p className="text-gray-700 mb-10 max-w-2xl mx-auto text-lg">
            The market is desperate for an alternative. We are building the foundational graph for all professional trust.
          </p>
          <form onSubmit={handleSignup} className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-xl mx-auto mb-8">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white border-gray-300 h-12 px-6 rounded-xl"
              required
            />
            <Button type="submit" className="bg-cyan-500 hover:bg-cyan-600 text-white whitespace-nowrap h-12 px-8 rounded-xl">
              Request the Full Pitch Deck
            </Button>
          </form>

          {/* Status Chips */}
          <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
            <Badge className="bg-transparent border-0 text-gray-600 px-0 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Actively Fundraising
            </Badge>
            <Badge className="bg-transparent border-0 text-gray-600 px-0 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gray-400"></span>
              Series A Stage
            </Badge>
            <Badge className="bg-transparent border-0 text-gray-600 px-0 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gray-400"></span>
              Q1 2025 Launch
            </Badge>
          </div>

          {/* Stats Section */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div className="text-center">
                <div className="mb-3">$201B</div>
                <p className="text-gray-500">Market Opportunity</p>
              </div>
              <div className="text-center">
                <div className="mb-3">788+</div>
                <p className="text-gray-500">Validated Surveys</p>
              </div>
              <div className="text-center">
                <div className="mb-3">1.5M+</div>
                <p className="text-gray-500">Initial Addressable Users</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Card Section - The Three Moats */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="mb-6">Why LinkedIn Can't Do This</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Discover the next networking protocol built for people who know what their network is worth
            </p>
          </div>

          {/* Large Feature Card - The Trust Engine */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-200 overflow-hidden mb-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="grid md:grid-cols-2 gap-12 p-10 md:p-16">
              <div className="space-y-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan-100">
                  <Shield className="w-8 h-8 text-cyan-600" />
                </div>
                <div className="space-y-6">
                  <h3 className="text-3xl md:text-4xl">Zero Trust. Zero Noise.</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    We replace cold outreach and performance theatre with the efficiency of a trust-ranked routing engine. All connections are double-opt-in and human-routed. No ads, no feed, no doom-scrolling.
                  </p>
                  <div>
                    <Badge className="bg-cyan-100 text-cyan-700 border-0 px-4 py-2">
                      100% Warm Introductions Only
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-end">
                <div className="relative w-full max-w-xs aspect-[9/16] rounded-3xl bg-gradient-to-br from-cyan-50 to-gray-100 border border-gray-200 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
                  <Shield className="w-24 h-24 text-cyan-400 opacity-20" />
                </div>
              </div>
            </div>
          </div>

          {/* Two Column Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 2: The Technical Moat */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-10 md:p-12 space-y-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan-100">
                  <Network className="w-8 h-8 text-cyan-600" />
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl">The Graph Utility.</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We are built on a privacy-first Neo4j graph database that maps your network's intent and expertise, not just their job titles. It's an infrastructure layer for human capital you can query.
                  </p>
                  <div>
                    <Badge className="bg-cyan-100 text-cyan-700 border-0 px-4 py-2">
                      Instant L1-L3 Pathfinding
                    </Badge>
                  </div>
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-cyan-50 to-gray-100 border border-gray-200 w-full aspect-[16/10] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
                  <Network className="w-20 h-20 text-cyan-400 opacity-20" />
                </div>
              </div>
            </div>

            {/* Card 3: The Velocity */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-10 md:p-12 space-y-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan-100">
                  <Zap className="w-8 h-8 text-cyan-600" />
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl">Founder-Built. 6-Week Velocity.</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Idea to pivoted, functional beta with active pilot users in under 45 days. This platform is the first successful use case of itself—built by founders to solve their own co-founder problem.
                  </p>
                  <div>
                    <Badge className="bg-cyan-100 text-cyan-700 border-0 px-4 py-2">
                      Founder-Built IP. No Outsourcing
                    </Badge>
                  </div>
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-cyan-50 to-gray-100 border border-gray-200 w-full aspect-[16/10] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
                  <Zap className="w-20 h-20 text-cyan-400 opacity-20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof & Velocity Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-6">Traction is the Only Proof.</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Currently scaling the Private Beta within premier networks, including pilot programs across IIT campuses.
            </p>
          </div>

          {/* Testimonial Card */}
          <div className="relative bg-white rounded-3xl border border-gray-200 shadow-lg overflow-hidden mb-12">
            <div className="absolute top-8 left-8 w-16 h-16 rounded-full bg-cyan-50 flex items-center justify-center">
              <Quote className="w-8 h-8 text-cyan-500" />
            </div>
            <div className="pt-24 pb-12 px-8 md:px-16">
              <blockquote className="text-2xl md:text-3xl text-gray-900 mb-8 leading-relaxed">
                "I found my next hire in 48 hours. LinkedIn took 4 weeks."
              </blockquote>
              <cite className="text-gray-600 not-italic text-lg">— Pilot User, Tech Startup Founder</cite>
            </div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-cyan-50 to-transparent rounded-full blur-3xl opacity-30 pointer-events-none"></div>
          </div>

          {/* Traction Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center">
              <div className="text-4xl mb-3 text-cyan-600">48hrs</div>
              <p className="text-gray-600">Avg. Time to Match</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center">
              <div className="text-4xl mb-3 text-cyan-600">94%</div>
              <p className="text-gray-600">Connection Success Rate</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center">
              <div className="text-4xl mb-3 text-cyan-600">IIT+</div>
              <p className="text-gray-600">Premier Network Beta</p>
            </div>
          </div>

          {/* Secondary CTA */}
          <div className="text-center">
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-white h-14 px-10 rounded-xl text-lg shadow-lg shadow-cyan-500/20 hover:shadow-xl hover:shadow-cyan-500/30 transition-all">
              Apply to be a Founding Beta Member
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12">
            {/* Left side - Info and Copyright */}
            <div className="space-y-8">
              <div>
                <h4 className="text-gray-900 mb-6 tracking-wider uppercase text-sm">Info</h4>
                <ul className="space-y-4">
                  <li>
                    <Link href="/privacy" className="text-gray-600 hover:text-gray-900 transition-colors">
                      Privacy and Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-gray-600 hover:text-gray-900 transition-colors">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link href="/account-deletion" className="text-gray-600 hover:text-gray-900 transition-colors">
                      Account Deletion
                    </Link>
                  </li>
                </ul>
              </div>
              <p className="text-gray-500 text-sm max-w-md">
                © 2025 .We — The Default 'I Know a Guy' Partner Globally.
              </p>
            </div>

            {/* Right side - Socials */}
            <div>
              <h4 className="text-gray-900 mb-6 tracking-wider uppercase text-sm">Socials</h4>
              <ul className="space-y-4">
                <li>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                    YouTube
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

