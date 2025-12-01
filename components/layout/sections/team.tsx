import GithubIcon from "@/components/icons/github-icon";
import LinkedInIcon from "@/components/icons/linkedin-icon";
import XIcon from "@/components/icons/x-icon";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Mail, PhoneCall } from "lucide-react";
interface TeamProps {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialNetworkProps[];
}
interface SocialNetworkProps {
  name: string;
  url: string;
}
export const TeamSection = () => {
  const teamList: TeamProps[] = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1529957713608-7e3f7b4bdb81?auto=format&fit=crop&w=700&q=80",
      firstName: "Tony",
      lastName: "Diaz",
      positions: ["Owner & Master Technician"],
      socialNetworks: [
        {
          name: "Phone",
          url: "tel:14087350541",
        },
        {
          name: "Mail",
          url: "mailto:service@tdautorepair.com",
        },
      ],
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&w=700&q=80",
      firstName: "Maria",
      lastName: "Chen",
      positions: ["Service Manager", "Customer Care"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/",
        },
      ],
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80",
      firstName: "Lena",
      lastName: "Morales",
      positions: ["Lead Diagnostic Technician"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/",
        },
      ],
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1507537509458-b8312d35a233?auto=format&fit=crop&w=700&q=80",
      firstName: "Andre",
      lastName: "Nguyen",
      positions: ["Alignment & Suspension Specialist"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/",
        },
      ],
    },
  ];
  const socialIcon = (socialName: string) => {
    switch (socialName) {
      case "Phone":
        return <PhoneCall className="size-5" />;
      case "Mail":
        return <Mail className="size-5" />;
      case "LinkedIn":
        return <LinkedInIcon />;
      case "Github":
        return <GithubIcon />;
      case "X":
        return <XIcon />;
    }
  };

  return (
    <section id="team" className="container lg:w-[75%] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Meet our crew
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          The people who keep Sunnyvale rolling
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamList.map(
          (
            { imageUrl, firstName, lastName, positions, socialNetworks },
            index
          ) => (
            <Card
              key={index}
              className="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg"
            >
              <CardHeader className="p-0 gap-0">
                <div className="h-full overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt=""
                    width={300}
                    height={300}
                    className="w-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]"
                  />
                </div>
                <CardTitle className="py-6 pb-4 px-6">
                  {firstName}
                  <span className="text-primary ml-2">{lastName}</span>
                </CardTitle>
              </CardHeader>
              {positions.map((position, index) => (
                <CardContent
                  key={index}
                  className={`pb-0 text-muted-foreground ${
                    index === positions.length - 1 && "pb-6"
                  }`}
                >
                  {position}
                  {index < positions.length - 1 && <span>,</span>}
                </CardContent>
              ))}

              <CardFooter className="space-x-4 mt-auto">
                {socialNetworks.map(({ name, url }, index) => (
                  <Link
                    key={index}
                    href={url}
                    target="_blank"
                    className="hover:opacity-80 transition-all"
                  >
                    {socialIcon(name)}
                  </Link>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
