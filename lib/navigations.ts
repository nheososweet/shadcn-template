// lib/navigation.ts
import {
    BookOpen,
    Bot,
    Frame,
    LifeBuoy,
    Map,
    PieChart,
    Send,
    Settings2,
    SquareTerminal,
} from "lucide-react";

export const navData = {
    user: {
        name: "NheoSoSweet",
        email: "nheososweet@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
        {
            title: "Dashboard",
            url: "/dashboard",
            icon: SquareTerminal,
            items: [
                {
                    title: "History",
                    url: "/dashboard/history",
                },
                {
                    title: "Starred",
                    url: "/dashboard/starred",
                },
                {
                    title: "Settings",
                    url: "/dashboard/settings",
                },
            ],
        },
        {
            title: "Models",
            url: "#",
            icon: Bot,
            items: [
                {
                    title: "Genesis",
                    url: "#",
                },
                {
                    title: "Explorer",
                    url: "#",
                },
                {
                    title: "Quantum",
                    url: "#",
                },
            ],
        },
        {
            title: "Documentation",
            url: "#",
            icon: BookOpen,
            items: [
                {
                    title: "Introduction",
                    url: "#",
                },
                {
                    title: "Get Started",
                    url: "#",
                },
                {
                    title: "Tutorials",
                    url: "#",
                },
                {
                    title: "Changelog",
                    url: "#",
                },
            ],
        },
        {
            title: "Settings",
            url: "#",
            icon: Settings2,
            items: [
                {
                    title: "General",
                    url: "#",
                },
                {
                    title: "Team",
                    url: "#",
                },
                {
                    title: "Billing",
                    url: "#",
                },
                {
                    title: "Limits",
                    url: "#",
                },
            ],
        },
    ],
    navSecondary: [
        {
            title: "Support",
            url: "#",
            icon: LifeBuoy,
        },
        {
            title: "Feedback",
            url: "#",
            icon: Send,
        },
    ],
    projects: [
        {
            name: "Design Engineering",
            url: "#",
            icon: Frame,
        },
        {
            name: "Sales & Marketing",
            url: "#",
            icon: PieChart,
        },
        {
            name: "Travel",
            url: "#",
            icon: Map,
        },
    ],
};

// Function để generate map từ navData cho breadcrumb (url -> label)
export function generateBreadcrumbMap() {
    const map: Record<string, string> = {};

    navData.navMain.forEach((main) => {
        map[main.url] = main.title;
        main.items?.forEach((sub) => {
            map[sub.url] = sub.title;
        });
    });

    // Chỉ thêm navSecondary và projects nếu cần cho breadcrumb
    // Hiện tại để trống vì các URL là "#"
    // navData.navSecondary.forEach((item) => {
    //   map[item.url] = item.title;
    // });
    // navData.projects.forEach((item) => {
    //   map[item.url] = item.name;
    // });

    return map;
}