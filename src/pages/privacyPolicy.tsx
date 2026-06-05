import Footer from "@/components/landing/footer";
import Navbar from "@/components/landing/navbar";
import { Button } from "@/components/ui/button";
import type { ReactNode } from "react";
import {
  ArrowLeft,
  Database,
  ExternalLink,
  FileText,
  KeyRound,
  Lock,
  RefreshCw,
  ShieldCheck,
  Trash2,
  UserRound,
} from "lucide-react";
import { Link } from "react-router-dom";

const policyHighlights = [
  {
    icon: UserRound,
    title: "Most personal data stays on your device",
    text: "Profile details, job-preparation content, CV work, preferences, and ordinary app activity are designed to remain locally on your device unless a feature clearly needs processing.",
  },
  {
    icon: KeyRound,
    title: "API keys are stored separately",
    text: "OpenAI keys and optional Gemini keys are stored on the Jobberflow backend so the mobile app can access AI features across sessions. Keys are encrypted before storage.",
  },
  {
    icon: Trash2,
    title: "Interview history is temporary",
    text: "Mock interview history is used during the session and is intended to be deleted when you exit, so long-term records are not kept by default.",
  },
];

const collectedData = [
  {
    title: "Account and access data",
    items: [
      "A generated user ID used to identify your saved API-key record.",
      "OpenAI API key, which is required for Audio transcription features.",
      "Gemini API key, additional for text generation and other AI capabilities.",
    ],
  },
  {
    title: "Local app data",
    items: [
      "Profile details you enter for job-preparation workflows.",
      "CV, resume, job-search, and interview-preparation content you choose to create or paste into the app.",
      "App preferences and temporary workflow state needed to operate the app on your device.",
    ],
  },
  {
    title: "AI feature content",
    items: [
      "Prompts, answers, interview questions, CV text, and job-search instructions you submit to AI-powered features.",
      "AI responses returned to the app for interview assistance, mock interviews, CV optimization, or job-preparation tasks.",
      "Temporary mock interview history while the feature is active.",
    ],
  },
  {
    title: "Technical data",
    items: [
      "Basic server request data needed to receive, validate, encrypt, retrieve, or delete API keys.",
      "Error information that helps diagnose failed requests or app behavior.",
      "Repository or issue data you voluntarily provide if you contact the open-source project through GitHub.",
    ],
  },
];

const usageItems = [
  "Provide AI-powered interview assistance, mock interviews, CV optimization, and related job-preparation features.",
  "Store and retrieve your encrypted API keys so you do not need to re-enter them each time you use the app.",
  "Route your requests to supported AI providers, including OpenAI and optional Gemini, based on the feature being used.",
  "Protect the service against abuse, troubleshoot bugs, maintain reliability, and improve the open-source project.",
  "Respond to support requests, bug reports, feedback, and contribution discussions.",
];

const sharingItems = [
  {
    title: "AI providers",
    text: "When you use AI features, the content needed for that feature may be sent to the relevant AI provider using your API key. Those providers process the request under their own terms and privacy policies.",
  },
  {
    title: "Open-source maintainers",
    text: "If you open GitHub issues, submit pull requests, or post public feedback, the information you include is visible according to GitHub and repository visibility settings.",
  },
  {
    title: "Legal and safety reasons",
    text: "Information may be disclosed if required to comply with law, protect users, investigate abuse, or defend the security and integrity of Jobberflow.",
  },
];

const rightsItems = [
  "View and update information stored locally in the app.",
  "Remove local app data by clearing app storage or uninstalling the app.",
  "Delete or rotate your OpenAI or Gemini API keys at the provider level at any time.",
  "Request deletion of server-stored API-key records associated with your generated user ID.",
  "Ask questions about how Jobberflow handles privacy or report a security concern through the project channels.",
];

const securityItems = [
  "API keys are encrypted before being stored in the backend SQLite database.",
  "Personal app data is designed to stay on your device where practical.",
  "A generated user ID is used instead of a traditional account profile.",
  "The project is open source, so users and contributors can inspect the app and backend behavior.",
  "No security method is perfect, so you should protect your generated user ID and rotate API keys if you suspect exposure.",
];

const retentionItems = [
  {
    title: "API keys",
    text: "Stored until you replace them, request deletion of the record associated with your generated user ID, or the backend removes them as part of service maintenance.",
  },
  {
    title: "Local app data",
    text: "Stored on your device until you delete it, clear app storage, or uninstall the app.",
  },
  {
    title: "Mock interview history",
    text: "Temporarily saved during a session and intended to be deleted when you exit.",
  },
  {
    title: "Support and GitHub content",
    text: "Retained according to the platform where you submitted it, such as GitHub issues, pull requests, or discussions.",
  },
];

function PolicyCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="glass-card p-6 md:p-8">
      <h2 className="font-inter text-xl md:text-2xl font-bold tracking-tight">
        {title}
      </h2>
      <div className="mt-4 text-sm md:text-base leading-7 text-muted-foreground">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground font-inter antialiased">
      <Navbar />
      <main className="pt-24">
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_30%)]" />
          <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
            <Button
              variant="ghost"
              className="mb-8 rounded-full text-muted-foreground hover:text-foreground"
              asChild
            >
              <Link to="/">
                <ArrowLeft className="h-4 w-4" />
                Back to home
              </Link>
            </Button>

            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                <ShieldCheck className="h-4 w-4" />
                Privacy Policy
              </div>
              <h1 className="mt-6 font-inter text-4xl md:text-6xl font-extrabold tracking-tight">
                How Jobberflow handles your data
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
                This policy explains what Jobberflow collects, where it is
                stored, how it is used, who may process it, and what choices you
                have. It applies to the Jobberflow mobile app, backend API, and
                related open-source project resources.
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                Last updated: June 5, 2026
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <div className="grid gap-5 md:grid-cols-3">
            {policyHighlights.map((item) => (
              <div key={item.title} className="glass-card p-6">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-primary/15 bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h2 className="font-inter text-base font-semibold">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 pb-20 md:pb-28">
          <div className="space-y-6">
            <PolicyCard title="1. What This Policy Covers">
              <p>
                Jobberflow is an open-source job-preparation app. It helps users
                practice interviews, receive real-time AI assistance, optimize
                CV content, and prepare for job-search workflows. The service
                uses a hybrid storage model: sensitive API-key records are
                stored on the backend after encryption, while most personal app
                content is designed to stay on your device.
              </p>
              <p className="mt-4">
                This page is written to help users understand the product's data
                practices. It is not a substitute for legal advice.
              </p>
            </PolicyCard>

            <PolicyCard title="2. Information We Collect or Process">
              <div className="grid gap-5">
                {collectedData.map((group) => (
                  <div key={group.title}>
                    <h3 className="font-inter text-base font-semibold text-foreground">
                      {group.title}
                    </h3>
                    <ul className="mt-2 list-disc space-y-2 pl-5">
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </PolicyCard>

            <PolicyCard title="3. How We Use Information">
              <ul className="list-disc space-y-2 pl-5">
                {usageItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </PolicyCard>

            <PolicyCard title="4. Where Data Is Stored">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border border-border bg-muted/20 p-5">
                  <Database className="mb-4 h-5 w-5 text-primary" />
                  <h3 className="font-inter font-semibold text-foreground">
                    On your device
                  </h3>
                  <p className="mt-2">
                    Personal app content, preferences, profile information, CV
                    work, and most job-preparation data are intended to stay in
                    local app storage on your device.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-muted/20 p-5">
                  <Lock className="mb-4 h-5 w-5 text-primary" />
                  <h3 className="font-inter font-semibold text-foreground">
                    On the backend
                  </h3>
                  <p className="mt-2">
                    API keys are encrypted and stored in SQLite on the
                    Jobberflow backend so the app can retrieve them for AI
                    features after identifying your generated user ID.
                  </p>
                </div>
              </div>
            </PolicyCard>

            <PolicyCard title="5. API Keys and AI Providers">
              <p>
                Jobberflow requires your OpenAI API key for core AI features and
                may use an optional Gemini API key for additional model support.
                Your API keys are used to submit requests for features you
                choose to run. You are responsible for monitoring provider
                usage, billing, quotas, and account security.
              </p>
              <p className="mt-4">
                The prompts and content you submit to AI features may be sent to
                the selected provider. Do not submit passwords, financial
                details, government IDs, confidential employer information, or
                anything you are not allowed to share with a third-party AI
                provider.
              </p>
            </PolicyCard>

            <PolicyCard title="6. When Information Is Shared">
              <div className="space-y-5">
                {sharingItems.map((item) => (
                  <div key={item.title}>
                    <h3 className="font-inter text-base font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1">{item.text}</p>
                  </div>
                ))}
              </div>
            </PolicyCard>

            <PolicyCard title="7. Retention and Deletion">
              <div className="space-y-5">
                {retentionItems.map((item) => (
                  <div key={item.title}>
                    <h3 className="font-inter text-base font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1">{item.text}</p>
                  </div>
                ))}
              </div>
            </PolicyCard>

            <PolicyCard title="8. Your Choices and Rights">
              <ul className="list-disc space-y-2 pl-5">
                {rightsItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-4">
                Depending on where you live, you may have additional rights to
                access, correct, delete, restrict, or object to certain
                processing. Jobberflow will honor applicable requests where it
                can reasonably identify the related record, usually through your
                generated user ID.
              </p>
            </PolicyCard>

            <PolicyCard title="9. Security Measures">
              <ul className="list-disc space-y-2 pl-5">
                {securityItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </PolicyCard>

            <PolicyCard title="10. Children's Privacy">
              <p>
                Jobberflow is intended for job seekers and career-preparation
                use. It is not directed to children under 13, and children under
                13 should not use the app or submit personal information.
              </p>
            </PolicyCard>

            <PolicyCard title="11. International Use">
              <p>
                If you use Jobberflow from outside the country where the backend
                or an AI provider operates, your information may be processed in
                another location. By using AI features and backend key storage,
                you understand that this transfer may be necessary to provide
                the service.
              </p>
            </PolicyCard>

            <PolicyCard title="12. Changes to This Policy">
              <p>
                This policy may be updated when Jobberflow adds features,
                changes storage behavior, changes providers, or improves
                security practices. The updated date at the top of this page
                will show when the policy last changed.
              </p>
            </PolicyCard>

            <PolicyCard title="13. Contact and Requests">
              <p>
                For deletion requests, privacy questions, or security concerns,
                contact the project maintainers through the public GitHub
                repositories or the support channel provided with the app. When
                asking about a server-stored API-key record, include your
                generated user ID so the maintainers can identify the correct
                record.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button className="rounded-full" asChild>
                  <a
                    href="https://github.com/ennyolar96/jobberflow-frontend"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Frontend Repo
                  </a>
                </Button>
                <Button variant="outline" className="rounded-full" asChild>
                  <a
                    href="https://github.com/ennyolar96/jobberflow-backend"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileText className="h-4 w-4" />
                    Backend Repo
                  </a>
                </Button>
              </div>
            </PolicyCard>

            <div className="rounded-2xl border border-primary/15 bg-primary/10 p-6 md:p-8">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                    <RefreshCw className="h-4 w-4" />
                    Keep your access secure
                  </div>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
                    Save your generated user ID somewhere private, rotate API
                    keys if they may have been exposed, and delete provider keys
                    you no longer want Jobberflow to use.
                  </p>
                </div>
                <Button className="rounded-full" asChild>
                  <Link to="/#privacy">Review privacy summary</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
