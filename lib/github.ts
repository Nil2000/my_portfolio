export interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

export interface ContributionsData {
  total: {
    lastYear: number;
    [year: string]: number;
  };
  contributions: ContributionDay[];
}

const CONTRIBUTIONS_URL =
  "https://github-contributions-api.jogruber.de/v4/nil2000?y=last";

export async function getGithubContributions(): Promise<ContributionsData | null> {
  try {
    const response = await fetch(CONTRIBUTIONS_URL, {
      next: { revalidate: 86_400 },
    });
    if (!response.ok) return null;
    const result = (await response.json()) as ContributionsData;
    if (!result.contributions?.length) return null;
    return result;
  } catch {
    return null;
  }
}
