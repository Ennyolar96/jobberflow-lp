import { logo } from "@/assets";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Privacy", href: "#privacy" },
  { label: "Policy", href: "/policy" },
  { label: "Open Source", href: "#open-source" },
  { label: "FAQ", href: "#faq" },
];

const GITHUB_LINKS = [
  {
    label: "Frontend Repo",
    href: "https://github.com/ennyolar96/jobberflow-frontend",
    description: "React Native mobile app",
  },
  {
    label: "Backend Repo",
    href: "https://github.com/ennyolar96/jobberflow-backend",
    description: "NodeJS API server",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [githubOpen, setGithubOpen] = useState(false);
  const githubRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (githubRef.current && !githubRef.current.contains(e.target as Node)) {
        setGithubOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      window.setTimeout(() => {
        document
          .querySelector(location.hash)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.hash, location.pathname]);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("#")) {
      if (location.pathname !== "/") {
        navigate(`/${href}`);
        return;
      }

      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      return;
    }

    navigate(href);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-xl shadow-black/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-lg bg-white flex items-center justify-center">
            <img
              src={logo}
              alt="jobberflow-logo"
              className="h-8 w-8"
              width={50}
              height={50}
              loading="lazy"
            />
          </div>
          <span className="font-inter font-bold text-lg tracking-tight">
            JobberFlow
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={`px-3 py-1.5 text-sm font-medium transition-colors rounded-md hover:bg-muted/50 ${
                location.pathname === link.href
                  ? "text-foreground bg-muted/40"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <div className="relative" ref={githubRef}>
            <Button
              variant="ghost"
              size="sm"
              className="font-inter gap-1.5"
              onClick={() => setGithubOpen((prev) => !prev)}
            >
              <FaGithub className="h-4 w-4" />
              GitHub
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  githubOpen ? "rotate-180" : ""
                }`}
              />
            </Button>

            {githubOpen && (
              <div className="absolute right-0 top-full mt-2 w-52 rounded-xl border border-border bg-background/95 backdrop-blur-xl shadow-xl shadow-black/10 overflow-hidden z-50 animate-slide-up">
                {GITHUB_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setGithubOpen(false)}
                    className="flex items-start gap-3 px-4 py-3 hover:bg-muted/60 transition-colors group"
                  >
                    <FaGithub className="h-4 w-4 mt-0.5 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
                    <div>
                      <p className="text-sm font-semibold font-inter leading-none">
                        {link.label}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {link.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
          <Button size="sm" className="font-inter rounded-full px-5" asChild>
            <a href="/jobberflow.apk" download="Jobberflow.apk">
              Download App
            </a>
          </Button>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border px-6 pb-4 space-y-1 animate-slide-up">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="block w-full text-left px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 space-y-2">
            <Button className="w-full rounded-full font-inter" asChild>
              <a href="/jobberflow.apk" download="Jobberflow.apk">
                Download App
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
