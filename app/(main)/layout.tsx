// app/(main)/layout.tsx
'use client';

import { AppSidebar } from "@/components/sidebar/app-sidebar";
import {
    SidebarProvider,
    SidebarInset,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { generateBreadcrumbMap } from "@/lib/navigations";

const breadcrumbMap = generateBreadcrumbMap();

function getBreadcrumbItems(pathname: string) {
    const pathSegments = pathname.split('/').filter(segment => segment);
    const items = [];
    let currentPath = '';

    for (const segment of pathSegments) {
        currentPath += `/${segment}`;
        const label = breadcrumbMap[currentPath] || segment.charAt(0).toUpperCase() + segment.slice(1);
        items.push({ path: currentPath, label });
    }

    return items;
}

export default function MainLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const breadcrumbItems = getBreadcrumbItems(pathname);

    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
                        <Breadcrumb>
                            <BreadcrumbList>
                                {breadcrumbItems.map((item, index) => (
                                    <div key={item.path} className="flex items-center">
                                        <BreadcrumbItem>
                                            {index < breadcrumbItems.length - 1 ? (
                                                <BreadcrumbLink asChild>
                                                    <Link href={item.path}>{item.label}</Link>
                                                </BreadcrumbLink>
                                            ) : (
                                                <BreadcrumbPage>{item.label}</BreadcrumbPage>
                                            )}
                                        </BreadcrumbItem>
                                        {index < breadcrumbItems.length - 1 && <BreadcrumbSeparator />}
                                    </div>
                                ))}
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </header>
                <div className="h-full">
                    {children}
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}