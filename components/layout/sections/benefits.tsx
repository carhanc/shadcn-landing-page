import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "BadgeCheck",
    title: "ASE-Certified Crew",
    description:
      "Every technician is ASE-certified and trained on the latest diagnostic technology.",
  },
  {
    icon: "Clock3",
    title: "Same-Day Service",
    description:
      "From oil changes to brake jobs, we keep most maintenance visits under one business day.",
  },
  {
    icon: "Receipt",
    title: "Upfront Estimates",
    description:
      "Know the work, parts, and pricing before we turn a wrench—no surprise add-ons.",
  },
  {
    icon: "ShieldCheck",
    title: "Nationwide Warranty",
    description:
      "Repairs backed by a 24-month/24,000-mile warranty honored at shops nationwide.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">
            Why choose TD Auto Repair
          </h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Confidence every mile
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            From preventative maintenance to complex repairs, we keep Sunnyvale
            drivers moving with transparent service and dependable workmanship.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
