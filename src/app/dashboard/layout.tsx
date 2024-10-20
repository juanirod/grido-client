import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "./components/Sidebar"
import { Navbar } from "./components/Navbar"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="flex flex-col gap-1 w-full">
                <Navbar/>
                <section className="p-6 mt-20">
                    {children}
                </section>
            </main>
        </SidebarProvider>
    )
}