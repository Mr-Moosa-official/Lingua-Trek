"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from "@/components/ui/sidebar";
import {
  Mountain,
  LayoutDashboard,
  BookMarked,
  MessageSquare,
  Languages,
  Mic,
  Users,
  BookOpen,
} from "lucide-react";

export const navItems = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    href: "/courses",
    label: "Courses",
    icon: BookOpen,
  },
  {
    href: "/workshops",
    label: "Workshops",
    icon: Users,
  },
  {
    href: "/phrasebook",
    label: "Phrasebook",
    icon: BookMarked,
  },
  {
    href: "/dialogues",
    label: "Dialogues",
    icon: MessageSquare,
  },
  {
    href: "/idioms",
    label: "Idioms",
    icon: Languages,
  },
  {
    href: "/practice",
    label: "Practice",
    icon: Mic,
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <Link href="/dashboard" className="flex items-center gap-2">
          <Mountain className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">LinguaTrek</span>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                asChild
                isActive={pathname === item.href}
                tooltip={{ children: item.label }}
              >
                <Link href={item.href}>
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}

// Dummy components to satisfy the sidebar structure, can be removed if not used.
const SidebarContent = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col flex-1 overflow-y-auto">{children}</div>
);
