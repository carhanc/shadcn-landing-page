"use client";
import { Menu, PhoneCall, Wrench } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { ToggleTheme } from "./toogle-theme";

interface RouteProps {
  href: string;
  label: string;
}

interface FeatureProps {
  title: string;
  description: string;
}

const routeList: RouteProps[] = [
  {
    href: "#services",
    label: "Services",
  },
  {
    href: "#testimonials",
    label: "Reviews",
  },
  {
    href: "#team",
    label: "Our Crew",
  },
  {
    href: "#pricing",
    label: "Specials",
  },
  {
    href: "#contact",
    label: "Contact",
  },
];

const featureList: FeatureProps[] = [
  {
    title: "ASE-Certified Technicians",
    description:
      "Expert diagnostics and repairs performed by certified professionals.",
  },
  {
    title: "Same-Day Maintenance",
    description:
      "Oil changes, inspections, and alignments completed around your schedule.",
  },
  {
    title: "Transparent Estimates",
    description:
      "Clear pricing and approval before any work begins on your vehicle.",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header className="shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card">
      <Link href="/" className="font-bold text-lg flex items-center">
        <Wrench className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white p-1.5" />
        TD Auto Repair
      </Link>
      {/* <!-- Mobile --> */}
      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden"
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Link href="/" className="flex items-center">
                    <Wrench className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white p-1.5" />
                    TD Auto Repair
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2">
                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
              </div>
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              <Separator className="mb-2" />

              <ToggleTheme />
              <Button
                asChild
                className="mt-4 w-full"
                variant="default"
              >
                <Link href="tel:14087350541" onClick={() => setIsOpen(false)}>
                  Call (408) 735-0541
                </Link>
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* <!-- Desktop --> */}
      <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-card text-base">
              Why Drivers Trust Us
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[600px] grid-cols-2 gap-5 p-4">
                <Image
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80"
                  alt="TD Auto Repair service bay"
                  className="h-full w-full rounded-md object-cover"
                  width={600}
                  height={600}
                />
                <ul className="flex flex-col gap-2">
                  {featureList.map(({ title, description }) => (
                    <li
                      key={title}
                      className="rounded-md p-3 text-sm hover:bg-muted"
                    >
                      <p className="mb-1 font-semibold leading-none text-foreground">
                        {title}
                      </p>
                      <p className="line-clamp-2 text-muted-foreground">
                        {description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            {routeList.map(({ href, label }) => (
              <NavigationMenuLink key={href} asChild>
                <Link href={href} className="text-base px-2">
                  {label}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:flex">
        <ToggleTheme />

        <Button
          asChild
          size="sm"
          className="ml-2"
          aria-label="Call TD Auto Repair"
        >
          <Link href="tel:14087350541">
            <PhoneCall className="size-5 mr-2" />
            (408) 735-0541
          </Link>
        </Button>
      </div>
    </header>
  );
};
