import { createFileRoute, Outlet } from "@tanstack/react-router";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/shared/appSidebar";


export const Route = createFileRoute("/_chat")({
  component: RouteComponent,
});

function RouteComponent() {


  return (
    <div>
      <SidebarProvider>
        <AppSidebar/>
        <main>
          <SidebarTrigger  />
          <Outlet/>
        </main>
      </SidebarProvider>
    </div>
  );
}
