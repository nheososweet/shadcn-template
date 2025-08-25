// "use client"

// import { ChevronRight, type LucideIcon } from "lucide-react"

// import {
//     Collapsible,
//     CollapsibleContent,
//     CollapsibleTrigger,
// } from "@/components/ui/collapsible"
// import {
//     SidebarGroup,
//     SidebarGroupLabel,
//     SidebarMenu,
//     SidebarMenuAction,
//     SidebarMenuButton,
//     SidebarMenuItem,
//     SidebarMenuSub,
//     SidebarMenuSubButton,
//     SidebarMenuSubItem,
// } from "@/components/ui/sidebar"

// export function NavMain({
//     items,
// }: {
//     items: {
//         title: string
//         url: string
//         icon: LucideIcon
//         isActive?: boolean
//         items?: {
//             title: string
//             url: string
//         }[]
//     }[]
// }) {
//     return (
//         <SidebarGroup>
//             <SidebarGroupLabel>Platform</SidebarGroupLabel>
//             <SidebarMenu>
//                 {items.map((item) => (
//                     <Collapsible key={item.title} asChild defaultOpen={item.isActive}>
//                         <SidebarMenuItem>
//                             <SidebarMenuButton asChild tooltip={item.title}>
//                                 <a href={item.url}>
//                                     <item.icon />
//                                     <span>{item.title}</span>
//                                 </a>
//                             </SidebarMenuButton>
//                             {item.items?.length ? (
//                                 <>
//                                     <CollapsibleTrigger asChild>
//                                         <SidebarMenuAction className="data-[state=open]:rotate-90">
//                                             <ChevronRight />
//                                             <span className="sr-only">Toggle</span>
//                                         </SidebarMenuAction>
//                                     </CollapsibleTrigger>
//                                     <CollapsibleContent>
//                                         <SidebarMenuSub>
//                                             {item.items?.map((subItem) => (
//                                                 <SidebarMenuSubItem key={subItem.title}>
//                                                     <SidebarMenuSubButton asChild>
//                                                         <a href={subItem.url}>
//                                                             <span>{subItem.title}</span>
//                                                         </a>
//                                                     </SidebarMenuSubButton>
//                                                 </SidebarMenuSubItem>
//                                             ))}
//                                         </SidebarMenuSub>
//                                     </CollapsibleContent>
//                                 </>
//                             ) : null}
//                         </SidebarMenuItem>
//                     </Collapsible>
//                 ))}
//             </SidebarMenu>
//         </SidebarGroup>
//     )
// }

// components/sidebar/nav-main.tsx
"use client"

import { usePathname } from "next/navigation";
import { ChevronRight, type LucideIcon } from "lucide-react"

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuAction,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from "@/components/ui/sidebar"

export function NavMain({
    items,
}: {
    items: {
        title: string
        url: string
        icon: LucideIcon
        items?: {
            title: string
            url: string
        }[]
    }[]
}) {
    const pathname = usePathname();

    return (
        <SidebarGroup>
            <SidebarGroupLabel>Platform</SidebarGroupLabel>
            <SidebarMenu>
                {items.map((item) => {
                    const isMainActive = pathname.startsWith(item.url);
                    const isAnySubActive = item.items?.some((sub) => pathname === sub.url);

                    return (
                        <Collapsible key={item.title} asChild defaultOpen={isMainActive || isAnySubActive}>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild tooltip={item.title} className={isMainActive ? "bg-accent" : ""}>
                                    <a href={item.url}>
                                        <item.icon />
                                        <span>{item.title}</span>
                                    </a>
                                </SidebarMenuButton>
                                {item.items?.length ? (
                                    <>
                                        <CollapsibleTrigger asChild>
                                            <SidebarMenuAction className="data-[state=open]:rotate-90">
                                                <ChevronRight />
                                                <span className="sr-only">Toggle</span>
                                            </SidebarMenuAction>
                                        </CollapsibleTrigger>
                                        <CollapsibleContent>
                                            <SidebarMenuSub>
                                                {item.items?.map((subItem) => (
                                                    <SidebarMenuSubItem key={subItem.title}>
                                                        <SidebarMenuSubButton asChild className={pathname === subItem.url ? "bg-accent" : ""}>
                                                            <a href={subItem.url}>
                                                                <span>{subItem.title}</span>
                                                            </a>
                                                        </SidebarMenuSubButton>
                                                    </SidebarMenuSubItem>
                                                ))}
                                            </SidebarMenuSub>
                                        </CollapsibleContent>
                                    </>
                                ) : null}
                            </SidebarMenuItem>
                        </Collapsible>
                    );
                })}
            </SidebarMenu>
        </SidebarGroup>
    )
}