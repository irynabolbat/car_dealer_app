import React from "react";
import { Suspense } from "react";

const ResultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Suspense fallback={<div className="p-4">Loading results...</div>}>
        {children}
      </Suspense>
    </div>
  );
};

export default ResultLayout;
