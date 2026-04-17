import { motion } from "framer-motion";
import { useState } from "react";
import {
  MessageSquare,
  FileText,
  Sparkles,
  Settings,
  User,
  Copy,
  Key,
  ShieldCheck,
  Mic,
  Send,
  Briefcase,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";

interface PhoneFrameProps {
  children: React.ReactNode;
  className?: string;
}

function PhoneFrame({ children, className = "" }: PhoneFrameProps) {
  return (
    <div
      className={`relative w-[260px] rounded-[42px] border-[8px] border-slate-900 bg-black shadow-2xl overflow-hidden ${className}`}
      style={{ height: "540px" }}
    >
      {/* Dynamic Island / Notch */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-20 border border-white/5" />

      <div className="absolute inset-0 bg-[#0a0b14] overflow-hidden">
        {children}
      </div>
    </div>
  );
}

interface BottomNavProps {
  activeTab: string;
}

function BottomNav({ activeTab }: BottomNavProps) {
  const tabs = [
    { id: "interview", icon: MessageSquare, label: "Interview" },
    { id: "resume", icon: FileText, label: "Resume AI" },
    { id: "assistance", icon: Sparkles, label: "Assistance" },
    { id: "settings", icon: Settings, label: "Settings" },
  ];

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-[#0f1117]/80 backdrop-blur-md border-t border-white/5 px-4 pt-2 pb-6 flex justify-between items-center z-10">
      {tabs.map((tab) => (
        <div key={tab.id} className="flex flex-col items-center gap-1">
          <tab.icon
            className={`h-4 w-4 ${activeTab === tab.id ? "text-[#7e69f6]" : "text-slate-500"}`}
          />
          <span
            className={`text-[8px] font-medium ${activeTab === tab.id ? "text-white" : "text-slate-500"}`}
          >
            {tab.label}
          </span>
        </div>
      ))}
    </div>
  );
}

interface AppHeaderProps {
  title: string;
  rightAction: string;
  icon?: React.ComponentType<{ className?: string }>;
}

function AppHeader({
  title,
  rightAction,
  icon: Icon = Briefcase,
}: AppHeaderProps) {
  return (
    <div className="px-4 pt-10 pb-3 flex items-center justify-between border-b border-white/5 bg-[#0f1117]/50">
      <div className="flex items-center gap-2 bg-[#1a1d27] border border-white/5 px-2 py-1 rounded-full">
        <Icon className="h-3 w-3 text-[#7e69f6]" />
        <span className="text-white text-[9px] font-medium">{title}</span>
      </div>
      <div className="text-slate-500 text-[9px] font-medium">{rightAction}</div>
    </div>
  );
}

function InterviewScreen() {
  return (
    <div className="flex flex-col h-full">
      <AppHeader title="Developer @ Tech Corp" rightAction="Setup Session" />

      <div
        className="flex-1 p-4 overflow-y-auto space-y-4"
        style={{ scrollbarWidth: "none" }}
      >
        {/* AI Message */}
        <div className="max-w-[85%]">
          <div className="bg-[#151921] border border-[#7e69f6]/30 rounded-2xl rounded-tl-none p-3 shadow-sm">
            <p className="text-slate-200 text-[10px] leading-relaxed">
              Hello! I'm your AI Interview Preparation Assistant. I'll be asking
              you questions to help you prepare for your interview for the
              specified role at your target company.
            </p>
            <div className="text-right mt-1">
              <span className="text-slate-500 text-[8px]">8:29 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Input area */}
      <div className="px-4 pb-20 pt-2 flex gap-2 items-center">
        <div className="flex-1 bg-[#151921] border border-white/5 rounded-full px-4 py-2.5 text-slate-500 text-[10px]">
          Type your response...
        </div>
        <button className="h-9 w-9 bg-white rounded-full flex items-center justify-center shadow-lg">
          <Send className="h-4 w-4 text-black rotate-[-15deg] ml-0.5" />
        </button>
      </div>

      <BottomNav activeTab="interview" />
    </div>
  );
}

function ResumeScreen() {
  return (
    <div className="flex flex-col h-full bg-[#0a0b14]">
      <div className="px-6 pt-10 pb-4 text-center">
        <Sparkles className="h-5 w-5 text-[#7e69f6] mx-auto mb-2" />
        <h3 className="text-white text-sm font-bold">
          Tailor Your CV for Success
        </h3>
        <p className="text-slate-400 text-[9px] mt-1 leading-relaxed">
          Upload your current resume and the target job description to generate
          an ATS-optimized version.
        </p>
      </div>

      <div
        className="flex-1 px-4 space-y-3 overflow-y-auto pb-20"
        style={{ scrollbarWidth: "none" }}
      >
        {/* Step 1 */}
        <div className="bg-[#151921] rounded-xl p-3 border border-white/5">
          <div className="flex items-center gap-2 mb-2">
            <FileText className="h-3.5 w-3.5 text-slate-400" />
            <span className="text-white text-[10px] font-semibold">
              Step 1: Upload Resume (PDF/DOCX)
            </span>
          </div>
          <div className="border border-dashed border-[#10b981]/50 bg-[#10b981]/5 rounded-lg h-24 flex flex-col items-center justify-center gap-1">
            <div className="bg-[#10b981] p-1.5 rounded-md">
              <CheckCircle2 className="h-4 w-4 text-white" />
            </div>
            <span className="text-[#10b981] text-[10px] font-medium">
              Resume uploaded ✓
            </span>
          </div>
        </div>

        {/* Step 2 */}
        <div className="bg-[#151921] rounded-xl p-3 border border-white/5">
          <div className="flex items-center gap-2 mb-2">
            <Send className="h-3.5 w-3.5 text-slate-400" />
            <span className="text-white text-[10px] font-semibold">
              Step 2: Paste Job Description
            </span>
          </div>
          <div className="bg-[#0a0b14] rounded-lg p-3 text-[9px] text-slate-300 font-mono leading-relaxed border border-white/5">
            <div className="text-slate-100 font-bold mb-1">Tech Stack:</div>
            TypeScript, Python, Supabase (PostgreSQL), Webflow, Weglot API,
            Vercel/Netlify, and GitHub Actions.
          </div>
        </div>

        {/* Step 3 */}
        <div className="bg-[#151921] rounded-xl p-3 border border-white/5">
          <div className="flex items-center gap-2 mb-2">
            <Settings className="h-3.5 w-3.5 text-slate-400" />
            <span className="text-white text-[10px] font-semibold">
              Step 3: Choose Template
            </span>
          </div>
          <div className="bg-[#0a0b14] rounded-lg p-3 flex items-center justify-between border border-white/5">
            <span className="text-slate-300 text-[10px]">Modern</span>
            <ChevronDown className="h-3 w-3 text-slate-500" />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button className="flex-1 bg-white hover:bg-slate-100 text-black rounded-lg py-2.5 text-[10px] font-bold flex items-center justify-center gap-2 transition-colors">
            <Sparkles className="h-3.5 w-3.5" />
            Optimize
          </button>
          <button className="flex-1 bg-[#5643e6] hover:bg-[#7e69f6] text-white rounded-lg py-2.5 text-[10px] font-bold flex items-center justify-center gap-2 transition-colors">
            <FileText className="h-3.5 w-3.5" />
            Save for Chat
          </button>
        </div>
      </div>

      <BottomNav activeTab="resume" />
    </div>
  );
}

function AssistanceScreen() {
  return (
    <div className="flex flex-col h-full">
      <AppHeader title="Developer @ Tech Corp" rightAction="Setup Session" />

      <div className="flex-1 p-4 flex flex-col">
        <div className="max-w-[85%] mb-auto">
          <div className="bg-[#151921] border border-white/5 rounded-2xl rounded-tl-none p-3 shadow-sm">
            <p className="text-slate-200 text-[10px] leading-relaxed">
              Hello! I'm your AI Interview Assistant. I'll be answering your
              questions to help you land your dream job at your target company.
            </p>
            <div className="text-right mt-1">
              <span className="text-slate-500 text-[8px]">8:29 PM</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 mb-20 mt-auto">
          {/* Voice Visualization */}
          <div className="flex gap-1 items-center h-4">
            {[2, 4, 3, 5, 2, 4, 3].map((h, i) => (
              <div
                key={i}
                className="w-1 rounded-full bg-[#7e69f6]"
                style={{ height: `${h * 3}px` }}
              />
            ))}
          </div>

          <div className="text-center">
            <div className="text-white text-xs font-semibold">
              Ready to Start
            </div>
            <div className="h-16 w-16 bg-[#7e69f6] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(126,105,246,0.3)] mt-4">
              <Mic className="h-7 w-7 text-white" />
            </div>
          </div>

          <div className="flex items-center gap-2 text-slate-400 text-[9px] mt-2">
            <Sparkles className="h-3 w-3 text-amber-500" />
            Press the mic when the interviewer speaks.
          </div>
        </div>
      </div>

      <BottomNav activeTab="assistance" />
    </div>
  );
}

function SettingsScreen() {
  return (
    <div
      className="flex flex-col h-full bg-[#0a0b14] overflow-y-auto"
      style={{ scrollbarWidth: "none" }}
    >
      <div className="flex flex-col items-center pt-12 pb-6">
        <div className="h-12 w-12 rounded-full bg-[#151921] border border-white/10 flex items-center justify-center mb-3">
          <User className="h-6 w-6 text-slate-300" />
        </div>
        <h3 className="text-white text-sm font-bold">Candidate Profile</h3>
        <span className="text-slate-500 text-[9px]">Session Configuration</span>
      </div>

      <div className="flex-1 px-4 space-y-5 pb-24">
        {/* User Identity */}
        <div>
          <div className="text-slate-500 text-[8px] font-bold uppercase tracking-wider mb-2">
            User Identity
          </div>
          <div className="bg-[#151921] rounded-xl p-3 border border-white/5 flex items-center justify-between">
            <div className="flex-1 overflow-hidden mr-2">
              <div className="text-slate-500 text-[8px] mb-0.5">User ID</div>
              <div className="text-white text-[9px] truncate font-mono">
                JobberFlow:57128dcc-8c15-486a-9815-eada9df2c2eb
              </div>
            </div>
            <Copy className="h-3.5 w-3.5 text-slate-500" />
          </div>
        </div>

        {/* Profile Metadata */}
        <div>
          <div className="text-slate-500 text-[8px] font-bold uppercase tracking-wider mb-2">
            Profile Metadata
          </div>
          <div className="space-y-2">
            {[
              {
                label: "Target Role",
                val: "e.g. Senior Frontend Engineer",
                icon: Briefcase,
              },
              {
                label: "Company Name",
                val: "e.g. Google, Meta, or Startup",
                icon: Settings,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-[#151921] rounded-xl p-3 border border-white/5 flex items-center gap-3"
              >
                <item.icon className="h-4 w-4 text-slate-500" />
                <div>
                  <div className="text-slate-500 text-[8px] font-medium">
                    {item.label}
                  </div>
                  <div className="text-slate-600 text-[9px]">{item.val}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interview Style */}
        <div>
          <div className="text-slate-500 text-[8px] font-bold uppercase tracking-wider mb-2">
            Interview Style
          </div>
          <div className="bg-[#151921] rounded-xl p-4 border border-white/5 flex justify-around">
            {[
              { id: "c", label: "Confident", active: true },
              { id: "h", label: "Humble", active: false },
              { id: "a", label: "Assertive", active: false },
            ].map((style) => (
              <div key={style.id} className="flex flex-col items-center gap-2">
                <div
                  className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    style.active
                      ? "bg-[#7e69f6] text-white"
                      : "bg-slate-800 text-slate-500"
                  }`}
                >
                  {style.id}
                </div>
                <span
                  className={`text-[8px] ${style.active ? "text-[#7e69f6]" : "text-slate-500"}`}
                >
                  {style.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* API Security */}
        <div>
          <div className="text-slate-500 text-[8px] font-bold uppercase tracking-wider mb-2">
            API Security
          </div>
          <div className="bg-[#151921] rounded-xl border border-white/5 overflow-hidden">
            <div className="p-3 border-b border-white/5 space-y-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Key className="h-3 w-3 text-slate-500" />
                  <span className="text-slate-400 text-[8px] font-medium">
                    OpenAI API Key
                  </span>
                </div>
                <div className="text-white text-[10px] tracking-widest px-5">
                  •••••••••••••••••••••••••••••••
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck className="h-3 w-3 text-slate-500" />
                  <span className="text-slate-400 text-[8px] font-medium">
                    Gemini API Key
                  </span>
                </div>
                <div className="text-white text-[10px] tracking-widest px-5">
                  •••••••••••••••••••••••••••••••
                </div>
              </div>
            </div>
            <div className="p-2 flex gap-2">
              <button className="flex-1 bg-slate-800/40 text-slate-400 py-2 rounded-lg text-[9px] font-bold flex items-center justify-center gap-2">
                <Sparkles className="h-3.5 w-3.5" /> Unlock to View
              </button>
              <button className="flex-1 bg-[#5643e6] text-white py-2 rounded-lg text-[9px] font-bold flex items-center justify-center gap-2">
                <ShieldCheck className="h-3.5 w-3.5" /> Encrypt & Save
              </button>
            </div>
          </div>
        </div>

        {/* Reset */}
        <button className="w-full bg-red-500/10 border border-red-500/20 text-red-500 py-3 rounded-xl text-[10px] font-bold mt-4 shadow-sm">
          Reset All Session Data
        </button>

        <div className="text-center text-slate-600 text-[8px] font-mono mt-2">
          Interview Assistant AI v1.0.5
        </div>
      </div>

      <BottomNav activeTab="settings" />
    </div>
  );
}

// ─── Screens Section ─────────────────────────────────────────────────────────

const screens = [
  {
    label: "Interview",
    component: InterviewScreen,
    accent: "from-blue-500 to-indigo-600",
  },
  {
    label: "Resume AI",
    component: ResumeScreen,
    accent: "from-emerald-500 to-green-600",
  },
  {
    label: "Assistance",
    component: AssistanceScreen,
    accent: "from-purple-500 to-indigo-600",
  },
  {
    label: "Settings",
    component: SettingsScreen,
    accent: "from-slate-500 to-slate-700",
  },
];

export default function AppScreens() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-slate-950">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-[#7e69f6]/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold tracking-[0.2em] text-[10px] uppercase mb-4 inline-block">
            App Experience
          </span>
          <h2 className="font-inter font-black text-4xl md:text-5xl lg:text-6xl text-white tracking-tight">
            Built for the <span className="text-[#7e69f6]">modern</span>{" "}
            candidate.
          </h2>
          <p className="text-slate-400 text-lg mt-6 max-w-2xl mx-auto font-medium">
            Experience a seamless transition between practice interviews, resume
            optimization, and real-time assistance.
          </p>
        </motion.div>

        {/* Tab switcher */}
        <div className="flex items-center justify-center gap-3 flex-wrap mb-16">
          {screens.map((s, i) => (
            <button
              key={s.label}
              onClick={() => setActive(i)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all duration-300 border ${
                active === i
                  ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.15)] scale-105"
                  : "bg-white/5 text-slate-400 border-white/10 hover:border-white/20 hover:text-slate-200"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Featured Phone Display */}
        <div className="relative flex justify-center items-center">
          {/* Background platform */}
          <div className="absolute -bottom-8 w-2/3 h-12 bg-white/5 rounded-[100%] blur-3xl" />

          <div className="flex items-center justify-center gap-12 lg:gap-20">
            {/* Previous Screen (Hint) */}
            <div className="hidden lg:block opacity-20 scale-90 grayscale">
              <PhoneFrame className="blur-[1px]">
                {(() => {
                  const PrevComponent =
                    screens[(active - 1 + screens.length) % screens.length]
                      .component;
                  return <PrevComponent />;
                })()}
              </PhoneFrame>
            </div>

            {/* Active Screen */}
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative"
            >
              <div
                className={`absolute -inset-10 bg-gradient-to-r ${screens[active].accent} opacity-10 blur-[80px] rounded-full`}
              />
              <PhoneFrame>
                {(() => {
                  const ActiveComponent = screens[active].component;
                  return <ActiveComponent />;
                })()}
              </PhoneFrame>
            </motion.div>

            {/* Next Screen (Hint) */}
            <div className="hidden lg:block opacity-20 scale-90 grayscale">
              <PhoneFrame className="blur-[1px]">
                {(() => {
                  const NextComponent =
                    screens[(active + 1) % screens.length].component;
                  return <NextComponent />;
                })()}
              </PhoneFrame>
            </div>
          </div>
        </div>

        {/* Mobile quick indicators */}
        <div className="flex justify-center gap-3 mt-12 lg:hidden">
          {screens.map((_, i) => (
            <div
              key={i}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                active === i ? "w-8 bg-white" : "w-1.5 bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
