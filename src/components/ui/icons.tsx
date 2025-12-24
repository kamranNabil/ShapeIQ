import { LucideProps } from "lucide-react";

const Printer3d = (props: LucideProps) => {
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
      {/* The Gantry Frame */}
      <path d="M5 21V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14" />
      {/* The Base/Bed */}
      <path d="M2 21h20" />
      {/* The Nozzle/Extruder */}
      <path d="M12 5v3" />
      <path d="m10 8 4 0" /> 
      {/* The Printed Object (Box) */}
      <rect x="9" y="16" width="6" height="5" rx="1" />
      {/* Optional: Print Needle/Tip */}
      <path d="m10 8 2 3 2-3" />
    </svg>
  );
};

export { Printer3d };