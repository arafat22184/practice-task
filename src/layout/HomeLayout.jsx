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
          <SidebarHeader className={"text-3xl font-bold text-center mt-4"}>
            Logo
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <ul className="text-center space-y-2">
                <li className="px-4 py-2 bg-blue-200 rounded-xl">
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="contactUs">Contact Us</a>
                </li>
                <li>
                  <a href="users">Users List</a>
                </li>
                <li>
                  <a href="subscribers">Subscribers</a>
                </li>
              </ul>
            </SidebarGroup>
            <SidebarGroup />
          </SidebarContent>
          <SidebarFooter />
        </Sidebar>
      </main>
      <SidebarTrigger />
      {/* Counter Page */}
      <CounterPage />
    </SidebarProvider>
  );
};

export default HomeLayout;
