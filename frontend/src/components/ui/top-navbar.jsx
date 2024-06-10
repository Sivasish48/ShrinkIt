import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function TopNavbar() {
  const navigate = useNavigate();
  
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm dark:bg-gray-950/90">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-14 items-center">
          <nav className="hidden md:flex gap-4">
            nxcs
          </nav>
          <div className="flex items-center gap-4">
            <Button size="sm" variant="outline">
              Sign in
            </Button>
            <Button size="sm">Sign up</Button>
            <Button size="sm" onClick={() => navigate("/profile")}>
              Your Profile
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
