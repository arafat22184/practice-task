import React from "react";
import {
  SidebarProvider,
  SidebarTrigger,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import CounterPage from "../pages/CounterPage";

const HomeLayout = () => {
  return (
    <SidebarProvider>
      <main>
        <Sidebar>
          <SidebarHeader />
          <SidebarContent>
            <SidebarGroup />
            <SidebarGroup />
          </SidebarContent>
          <SidebarFooter />
        </Sidebar>
      </main>
      <SidebarTrigger />
      <CounterPage />
    </SidebarProvider>
  );
};

export default HomeLayout;
