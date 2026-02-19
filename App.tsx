import React from 'react';
import { Linkedin, MapPin, Globe, Mail } from 'lucide-react';

/**
 * Premium Executive Portfolio Refinement
 * Primary Accent: #043927 (Dark Emerald)
 * Interaction: Subtle lift and high scannability
 */

const App: React.FC = () => {
  const emeraldGreen = "#043927";
  const mutedEmerald = "#4B635A";
  const mintBackground = "#ECFDF5";

  return (
    <div className="min-h-screen py-12 md:py-20 selection:bg-[#043927] selection:text-white">
      {/* Main Resume Container */}
      <div className="max-w-4xl mx-auto bg-white shadow-executive rounded-sm overflow-hidden p-8 md:p-20 relative">
        
        {/* Header Section */}
        <header className="mb-16">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="space-y-4">
              <h1 className="text-6xl font-[800] tracking-tighter text-gray-900 leading-none">
                Mackenzie Alberts
              </h1>
              <p className="text-2xl font-bold tracking-tight" style={{ color: emeraldGreen }}>
                Strategic Revenue & International Business Professional
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-3 text-[14px] font-semibold text-gray-500 uppercase tracking-widest">
                <span className="flex items-center gap-2">
                  <MapPin size={16} style={{ color: emeraldGreen }} /> Fort Lauderdale, FL
                </span>
                <span className="flex items-center gap-2">
                  <Globe size={16} style={{ color: emeraldGreen }} /> Dutch & English
                </span>
                <span className="flex items-center gap-2">
                  <Mail size={16} style={{ color: emeraldGreen }} /> mackenziezrs@gmail.com
                </span>
              </div>
            </div>
            
            <div className="no-print">
              <a 
                href="https://www.linkedin.com/in/mackenzie-alberts-586531295/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-md hover:shadow-xl hover:-translate-y-1 active:scale-95"
                style={{ backgroundColor: emeraldGreen }}
              >
                <Linkedin size={20} /> 
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-16">
          <h2 className="section-header relative text-[12px] uppercase tracking-[0.25em] font-[900] text-gray-400 mb-10">
            Professional Profile
          </h2>
          <p className="text-xl text-gray-800 leading-[1.8] font-normal italic border-l-4 pl-6 border-emerald-50">
            Client-facing MBA candidate and International Business professional with experience supporting revenue growth, executive operations, and high-touch corporate events. Proven ability to manage sales pipelines, represent brands in professional environments, and build trust with stakeholders across cultures. Driven by operational discipline and a global mindset.
          </p>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="section-header relative text-[12px] uppercase tracking-[0.25em] font-[900] text-gray-400 mb-10">
            Experience
          </h2>
          
          <div className="border-l-[3px] ml-1 pl-10 space-y-16" style={{ borderColor: emeraldGreen }}>
            {/* Roverd */}
            <div className="relative">
              <div className="absolute -left-[45.5px] top-1.5 w-3 h-3 rounded-full bg-white border-2" style={{ borderColor: emeraldGreen }}></div>
              <div className="flex flex-col md:flex-row justify-between items-baseline mb-2">
                <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight">Sales Associate</h3>
                <span className="text-sm font-bold tabular-nums tracking-wider uppercase" style={{ color: mutedEmerald }}>
                  APR 2023 – DEC 2025
                </span>
              </div>
              <div className="flex justify-between items-baseline mb-6">
                <p className="text-lg font-bold italic" style={{ color: emeraldGreen }}>Roverd</p>
                <p className="text-[11px] font-[800] text-gray-400 uppercase tracking-[0.2em]">Fort Lauderdale, FL</p>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-4 leading-[1.7]">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: emeraldGreen }}></span>
                  Managed end-to-end sales cycles for a national client base, qualifying inbound and outbound leads effectively.
                </li>
                <li className="flex gap-4 leading-[1.7]">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: emeraldGreen }}></span>
                  Delivered consultative virtual product demonstrations and addressed client objections to align solutions with specific business needs.
                </li>
                <li className="flex gap-4 leading-[1.7]">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: emeraldGreen }}></span>
                  Maintained high-integrity pipeline tracking and customer relationship data using HubSpot and Salesforce.
                </li>
              </ul>
            </div>

            {/* Paragon Events */}
            <div className="relative">
              <div className="absolute -left-[45.5px] top-1.5 w-3 h-3 rounded-full bg-white border-2" style={{ borderColor: emeraldGreen }}></div>
              <div className="flex flex-col md:flex-row justify-between items-baseline mb-2">
                <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight">Freelance Event Team Member</h3>
                <span className="text-sm font-bold tabular-nums tracking-wider uppercase" style={{ color: mutedEmerald }}>
                  JAN 2025 – NOV 2025
                </span>
              </div>
              <div className="flex justify-between items-baseline mb-6">
                <p className="text-lg font-bold italic" style={{ color: emeraldGreen }}>Paragon Events</p>
                <p className="text-[11px] font-[800] text-gray-400 uppercase tracking-[0.2em]">Boca Raton, FL</p>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-4 leading-[1.7]">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: emeraldGreen }}></span>
                  Represented corporate clients at large-scale professional events with over 200 attendees.
                </li>
                <li className="flex gap-4 leading-[1.7]">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: emeraldGreen }}></span>
                  Supported corporate and association events including work with the Southeast Florida Apartment Association.
                </li>
                <li className="flex gap-4 leading-[1.7]">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: emeraldGreen }}></span>
                  Engaged directly with executives, sponsors, and attendees while maintaining a polished brand presence.
                </li>
              </ul>
            </div>

            {/* Hertz */}
            <div className="relative">
              <div className="absolute -left-[45.5px] top-1.5 w-3 h-3 rounded-full bg-white border-2" style={{ borderColor: emeraldGreen }}></div>
              <div className="flex flex-col md:flex-row justify-between items-baseline mb-2">
                <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight">Executive Assistant</h3>
                <span className="text-sm font-bold tabular-nums tracking-wider uppercase" style={{ color: mutedEmerald }}>
                  APR 2023 – JUL 2023
                </span>
              </div>
              <div className="flex justify-between items-baseline mb-6">
                <p className="text-lg font-bold italic" style={{ color: emeraldGreen }}>Hertz Netherlands</p>
                <p className="text-[11px] font-[800] text-gray-400 uppercase tracking-[0.2em]">Amsterdam, NL</p>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-4 leading-[1.7]">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: emeraldGreen }}></span>
                  Provided comprehensive administrative support to a Director within a European corporate headquarters.
                </li>
                <li className="flex gap-4 leading-[1.7]">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: emeraldGreen }}></span>
                  Coordinated complex cross-border scheduling and international travel logistics.
                </li>
                <li className="flex gap-4 leading-[1.7]">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: emeraldGreen }}></span>
                  Maintained confidential records and optimized workflows using Outlook Enterprise and Google Workspace.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <h2 className="section-header relative text-[12px] uppercase tracking-[0.25em] font-[900] text-gray-400 mb-10">
            Education
          </h2>
          <div className="border-l-[3px] ml-1 pl-10 space-y-10" style={{ borderColor: emeraldGreen }}>
            <div className="relative">
              <div className="absolute -left-[45.5px] top-1.5 w-3 h-3 rounded-full bg-white border-2" style={{ borderColor: emeraldGreen }}></div>
              <div className="flex flex-col md:flex-row justify-between items-baseline mb-2">
                <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight">MBA, Business Administration</h3>
                <span className="text-sm font-bold tracking-wider uppercase" style={{ color: mutedEmerald }}>EXPECTED 2026</span>
              </div>
              <div className="flex justify-between items-baseline">
                <p className="text-lg font-bold italic" style={{ color: emeraldGreen }}>Florida Atlantic University</p>
                <div className="flex items-center gap-2">
                   <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest">GPA</span>
                   <span className="text-base font-bold text-gray-900">3.8 / 4.0</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-[45.5px] top-1.5 w-3 h-3 rounded-full bg-white border-2" style={{ borderColor: emeraldGreen }}></div>
              <div className="flex flex-col md:flex-row justify-between items-baseline mb-2">
                <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight">BBA, International Business</h3>
                <span className="text-sm font-bold tracking-wider uppercase" style={{ color: mutedEmerald }}>GRADUATED</span>
              </div>
              <p className="text-lg font-bold italic" style={{ color: emeraldGreen }}>Florida Atlantic University</p>
            </div>
          </div>
        </section>

        {/* Expertise & Skills Section */}
        <section className="mb-8">
          <h2 className="section-header relative text-[12px] uppercase tracking-[0.25em] font-[900] text-gray-400 mb-10">
            Expertise & Technical Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            <div>
              <h4 className="text-[11px] font-black text-gray-900 uppercase tracking-[0.2em] mb-6">Core Capabilities</h4>
              <div className="flex flex-wrap gap-2">
                {['Sales Operations', 'International Business', 'Pipeline Management', 'Consultative Selling', 'Executive Support', 'Cross-Border Logistics'].map(skill => (
                  <span key={skill} 
                    className="px-4 py-2 rounded-full text-[13px] font-bold tracking-tight border transition-colors hover:bg-emerald-50"
                    style={{ backgroundColor: mintBackground, color: emeraldGreen, borderColor: `${emeraldGreen}15` }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-[11px] font-black text-gray-900 uppercase tracking-[0.2em] mb-6">Technical Tools</h4>
              <div className="flex flex-wrap gap-2">
                {['HubSpot CRM', 'Salesforce', 'Microsoft Office Suite', 'Google Workspace', 'Outlook Enterprise', 'Social Analytics'].map(tech => (
                  <span key={tech} 
                    className="px-4 py-2 rounded-full text-[13px] font-bold tracking-tight border transition-colors hover:bg-emerald-50"
                    style={{ backgroundColor: mintBackground, color: emeraldGreen, borderColor: `${emeraldGreen}15` }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Minimal Footer */}
        <footer className="mt-24 pt-10 border-t border-gray-100 flex justify-between items-center no-print">
          <p className="text-[11px] font-black text-gray-300 uppercase tracking-[0.4em]">
            Mackenzie Alberts &bull; Professional Resume
          </p>
          <div className="w-10 h-1" style={{ backgroundColor: emeraldGreen }}></div>
        </footer>
      </div>
    </div>
  );
};

export default App;