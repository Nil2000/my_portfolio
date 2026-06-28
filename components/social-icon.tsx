import GithubIcon from "@/components/ui/github-icon";
import GlobeIcon from "@/components/ui/globe-icon";
import LinkedinIcon from "@/components/ui/linkedin-icon";
import MailFilledIcon from "@/components/ui/mail-filled-icon";
import TwitterXIcon from "@/components/ui/twitter-x-icon";

interface SocialIconProps {
  name: string;
  size?: number;
  className?: string;
}

const iconMap = {
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  X: TwitterXIcon,
  Mail: MailFilledIcon,
  Globe: GlobeIcon,
} as const;

export default function SocialIcon({
  name,
  size = 24,
  className,
}: SocialIconProps) {
  const Icon = iconMap[name as keyof typeof iconMap];
  if (!Icon) return null;

  return <Icon size={size} className={className} />;
}
