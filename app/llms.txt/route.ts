import {
  contactData,
  experiences,
  heroData,
  projects,
  siteConfig,
  skills,
  socialLinks,
} from "@/data/portfolio";

export const dynamic = "force-static";

function link(label: string, url: string, note?: string) {
  return note ? `- [${label}](${url}): ${note}` : `- [${label}](${url})`;
}

function llmsTxt() {
  const skillsSummary = skills
    .map((group) => `${group.category}: ${group.items.join(", ")}`)
    .join(". ");

  const experience = experiences
    .map((item) =>
      link(
        `${item.role} at ${item.company}`,
        item.companyUrl,
        `${item.period}. ${item.description} Technologies: ${item.technologies.join(", ")}.`,
      ),
    )
    .join("\n");

  const projectLinks = projects
    .map((project) => {
      const url = project.liveUrl ?? project.repoUrl;
      if (!url) return null;
      const source =
        project.liveUrl && project.repoUrl
          ? ` Source: ${project.repoUrl}.`
          : "";
      return link(
        project.title,
        url,
        `${project.description}${source} Technologies: ${project.technologies.join(", ")}.`,
      );
    })
    .filter((line) => line !== null)
    .join("\n");

  const contact = [
    link("Email", `mailto:${contactData.email}`, contactData.description),
    ...socialLinks.map((social) => link(social.platform, social.url)),
  ].join("\n");

  return `# ${siteConfig.name}

> ${heroData.description}

${heroData.role}. ${heroData.status.label}. ${skillsSummary}.

## Portfolio

${link(siteConfig.name, siteConfig.url, `${siteConfig.description} Single page with activity, experience, projects, skills, and contact.`)}

## Experience

${experience}

## Projects

${projectLinks}

## Contact

${contact}
`;
}

export function GET() {
  return new Response(llmsTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
