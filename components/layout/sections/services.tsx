import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

enum ServiceHighlight {
  FEATURED = 1,
  STANDARD = 0,
}
interface ServiceProps {
  title: string;
  highlight: ServiceHighlight;
  description: string;
}
const serviceList: ServiceProps[] = [
  {
    title: "Oil Change & 45-Point Inspection",
    description:
      "Premium oil, OEM filter, fluid top-off, and a full digital inspection in under an hour.",
    highlight: ServiceHighlight.FEATURED,
  },
  {
    title: "Brake Repair & Replacement",
    description:
      "Factory-quality pads and rotors with road-test confirmation and 24-month/24K warranty.",
    highlight: ServiceHighlight.FEATURED,
  },
  {
    title: "Check Engine Light Diagnostics",
    description:
      "Advanced scan tools and smoke testing to pinpoint issues before parts are replaced.",
    highlight: ServiceHighlight.STANDARD,
  },
  {
    title: "A/C Recharge & Repair",
    description:
      "Leak detection, recharge, and component replacement to keep you cool year-round.",
    highlight: ServiceHighlight.STANDARD,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Services
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Complete auto care in one stop
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Whether you need routine maintenance or complex diagnostics, TD Auto
        Repair delivers dealership-level expertise with neighborhood service.
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto">
        {serviceList.map(({ title, description, highlight }) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card h-full relative"
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <Badge
              data-pro={ServiceHighlight.FEATURED === highlight}
              variant="secondary"
              className="absolute -top-2 -right-3 data-[pro=false]:hidden"
            >
              Most Popular
            </Badge>
          </Card>
        ))}
      </div>
    </section>
  );
};
