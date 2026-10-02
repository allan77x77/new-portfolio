"use client";
import { useEffect } from "react";

import { siteConfig } from "@/config/site";

export default function ResumePage() {
  useEffect(() => {
    window.location.replace(siteConfig.resume);
  }, []);
  return (
    <div className="py-10">
      Redirecting to the resume…{" "}
      <a className="underline" href={siteConfig.resume}>
        Open the PDF
      </a>
    </div>
  );
}
