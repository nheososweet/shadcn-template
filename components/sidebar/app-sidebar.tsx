// "use client"

// import * as React from "react"
// import {
//     BookOpen,
//     Bot,
//     Command,
//     Frame,
//     LifeBuoy,
//     Map,
//     PieChart,
//     Send,
//     Settings2,
//     SquareTerminal,
// } from "lucide-react"


// import {
//     Sidebar,
//     SidebarContent,
//     SidebarFooter,
//     SidebarHeader,
//     SidebarMenu,
//     SidebarMenuButton,
//     SidebarMenuItem,
// } from "@/components/ui/sidebar"

// import { NavMain } from "./nav-main"
// import { NavProjects } from "./nav-projects"
// import { NavSecondary } from "./nav-secondary"
// import { NavUser } from "./nav-user"

// const data = {
//     user: {
//         name: "NheoSoSweet",
//         email: "nheososweet@example.com",
//         avatar: "/avatars/shadcn.jpg",
//     },
//     navMain: [
//         {
//             title: "Dashboard",
//             url: "/dashboard",
//             icon: SquareTerminal,
//             isActive: true,
//             items: [
//                 {
//                     title: "History",
//                     url: "/history",
//                 },
//                 {
//                     title: "Starred",
//                     url: "#",
//                 },
//                 {
//                     title: "Settings",
//                     url: "#",
//                 },
//             ],
//         },
//         {
//             title: "Models",
//             url: "#",
//             icon: Bot,
//             items: [
//                 {
//                     title: "Genesis",
//                     url: "#",
//                 },
//                 {
//                     title: "Explorer",
//                     url: "#",
//                 },
//                 {
//                     title: "Quantum",
//                     url: "#",
//                 },
//             ],
//         },
//         {
//             title: "Documentation",
//             url: "#",
//             icon: BookOpen,
//             items: [
//                 {
//                     title: "Introduction",
//                     url: "#",
//                 },
//                 {
//                     title: "Get Started",
//                     url: "#",
//                 },
//                 {
//                     title: "Tutorials",
//                     url: "#",
//                 },
//                 {
//                     title: "Changelog",
//                     url: "#",
//                 },
//             ],
//         },
//         {
//             title: "Settings",
//             url: "#",
//             icon: Settings2,
//             items: [
//                 {
//                     title: "General",
//                     url: "#",
//                 },
//                 {
//                     title: "Team",
//                     url: "#",
//                 },
//                 {
//                     title: "Billing",
//                     url: "#",
//                 },
//                 {
//                     title: "Limits",
//                     url: "#",
//                 },
//             ],
//         },
//     ],
//     navSecondary: [
//         {
//             title: "Support",
//             url: "#",
//             icon: LifeBuoy,
//         },
//         {
//             title: "Feedback",
//             url: "#",
//             icon: Send,
//         },
//     ],
//     projects: [
//         {
//             name: "Design Engineering",
//             url: "#",
//             icon: Frame,
//         },
//         {
//             name: "Sales & Marketing",
//             url: "#",
//             icon: PieChart,
//         },
//         {
//             name: "Travel",
//             url: "#",
//             icon: Map,
//         },
//     ],
// }

// export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
//     return (
//         <Sidebar variant="inset" collapsible="icon" {...props}>
//             <SidebarHeader>
//                 <SidebarMenu>
//                     <SidebarMenuItem>
//                         <SidebarMenuButton size="lg" asChild>
//                             <a href="#">
//                                 <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
//                                     <Command className="size-4" />
//                                 </div>
//                                 <div className="grid flex-1 text-left text-sm leading-tight">
//                                     <span className="truncate font-medium">Acme Inc</span>
//                                     <span className="truncate text-xs">Enterprise</span>
//                                 </div>
//                             </a>
//                         </SidebarMenuButton>
//                     </SidebarMenuItem>
//                 </SidebarMenu>
//             </SidebarHeader>
//             <SidebarContent>
//                 <NavMain items={data.navMain} />
//                 <NavProjects projects={data.projects} />
//                 <NavSecondary items={data.navSecondary} className="mt-auto" />
//             </SidebarContent>
//             <SidebarFooter>
//                 <NavUser user={data.user} />
//             </SidebarFooter>
//         </Sidebar>
//     )
// }

// components/sidebar/app-sidebar.tsx
"use client"

import * as React from "react"
import {
    Command,
} from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

import { NavMain } from "./nav-main"
import { NavProjects } from "./nav-projects"
import { NavSecondary } from "./nav-secondary"
import { NavUser } from "./nav-user"
import { navData } from "@/lib/navigations"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar variant="inset" collapsible="icon" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <a href="#">
                                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                                    <Command className="size-4" />
                                </div>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-medium">SPX Platform</span>
                                    <span className="truncate text-xs">Initial Version</span>
                                </div>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={navData.navMain} />
                <NavProjects projects={navData.projects} />
                <NavSecondary items={navData.navSecondary} className="mt-auto" />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={navData.user} />
            </SidebarFooter>
        </Sidebar>
    )
}