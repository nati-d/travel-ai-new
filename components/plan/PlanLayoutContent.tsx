"use client";
import PlanContextProvider from "@/contexts/PlanContextProvider";
import Sidebar from "@/components/plan/Sidebar";
import {ReactNode} from "react";

const PlanLayoutContent = ({planId, children}: {planId: string; children: ReactNode}) => {
  return (
    <PlanContextProvider>
      <div className="w-full lg:px-20 px-5 py-6 min-h-[calc(100svh-6.5rem)] bg-background">
        <div className="md:grid md:grid-cols-5 lg:gap-2 md:gap-5 gap-3">
          <div className="hidden md:flex relative md:col-span-1 col-span-full lg:border-r lg:border-muted-foreground/30 min-h-[calc(100svh-6.5rem)]">
            <Sidebar planId={planId} />
          </div>
          <div className="md:col-span-4 pl-4 lg:pl-8">{children}</div>
        </div>
      </div>
    </PlanContextProvider>
  );
};

export default PlanLayoutContent;