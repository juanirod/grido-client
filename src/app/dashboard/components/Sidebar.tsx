import { Box, ChartBar, ChartNoAxesCombined, ShoppingBasket, User } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/reports",
    icon: ChartBar,
  },
  {
    title: "Productos",
    url: "/products",
    icon: ShoppingBasket,
  },
  {
    title: "Ventas",
    url: "/sales",
    icon: ChartNoAxesCombined
  },
  {
    title: "Stock",
    url: "/stock",
    icon: Box,
  },
  {
    title: "Usuarios",
    url: "/",
    icon: User,
  },
]

export function AppSidebar() {
  return (
    <Sidebar variant="sidebar" collapsible="offcanvas">
      <SidebarHeader className="bg-sidebar border-b border-sidebar-border h-20">
        <img src="/image.png" alt="" className="w-16 bg-white p-1 rounded-xl mx-auto"/>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menú</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={`/dashboard/${item.url}`}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
