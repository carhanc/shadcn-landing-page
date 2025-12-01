import { Separator } from "@/components/ui/separator";
import { Clock, Mail, MapPin, Phone, Wrench } from "lucide-react";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2 space-y-4">
            <Link href="/" className="flex font-bold items-center text-2xl">
              <Wrench className="w-9 h-9 mr-2 bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg border border-secondary p-1.5 text-white" />
              TD Auto Repair
            </Link>
            <p className="text-muted-foreground">
              Family-owned auto repair shop providing honest diagnostics,
              dependable repairs, and friendly service for Sunnyvale drivers.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-lg">Contact</h3>
            <Link
              href="tel:14087350541"
              className="flex items-center gap-2 opacity-80 hover:opacity-100 transition"
            >
              <Phone className="size-4" />
              (408) 735-0541
            </Link>
            <Link
              href="mailto:service@tdautorepair.com"
              className="flex items-center gap-2 opacity-80 hover:opacity-100 transition"
            >
              <Mail className="size-4" />
              service@tdautorepair.com
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-lg">Visit</h3>
            <div className="flex items-start gap-2 opacity-80">
              <MapPin className="size-4 mt-1" />
              <p>683 E El Camino Real, Sunnyvale, CA 94087</p>
            </div>
            <Link
              href="https://maps.google.com/?q=683+E+El+Camino+Real,+Sunnyvale,+CA+94087"
              target="_blank"
              className="opacity-80 hover:opacity-100 transition text-sm underline underline-offset-4"
            >
              Get directions
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-lg">Hours</h3>
            <div className="flex items-start gap-2 opacity-80">
              <Clock className="size-4 mt-1" />
              <div>
                <p>Mon – Fri: 8:00 AM – 6:00 PM</p>
                <p>Saturday: 9:00 AM – 3:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-lg">Quick links</h3>
            <Link href="#services" className="opacity-80 hover:opacity-100 transition">
              Services
            </Link>
            <Link
              href="#testimonials"
              className="opacity-80 hover:opacity-100 transition"
            >
              Reviews
            </Link>
            <Link href="#pricing" className="opacity-80 hover:opacity-100 transition">
              Specials
            </Link>
            <Link href="#faq" className="opacity-80 hover:opacity-100 transition">
              FAQs
            </Link>
          </div>
        </div>

        <Separator className="my-6" />
        <section className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between text-sm text-muted-foreground">
          <p>&copy; 2025 TD Auto Repair. All rights reserved.</p>
          <p>683 E El Camino Real, Sunnyvale, CA 94087</p>
        </section>
      </div>
    </footer>
  );
};
