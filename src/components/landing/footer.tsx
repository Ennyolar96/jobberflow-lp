import { logo } from "@/assets";
import { Heart } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="h-7 w-7 rounded-md bg-white flex items-center justify-center">
              <img src={logo} alt="jobberflow-logo" className="h-7 w-7" />
            </div>
            <span className="font-inter font-bold text-sm">JobberFlow</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/ennyolar96/jobberflow-frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <FaGithub className="h-4.5 w-4.5" />
            </a>
            <span className="text-sm text-muted-foreground">
              Open source - Made with{" "}
              <Heart className="h-3 w-3 inline text-red-400" /> by Olaniyan
              Mutiu A.
            </span>
          </div>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Jobberflow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
