interface AchievementsI {
    position: string,
    date: string,
    place: string,
    description: string,
    icon: string
}

interface AsideItemI {
    icon: string;
    title?: string;
    link?: string;
}

interface CertificatesI {
    description: string,
    dates: string,
    icon: string
}

interface EducationI {
    major: string,
    icon: string,
    years: string
}

interface ProjectsI {
    description: string,
    link: string,
    icon: string
}

interface ToolsI {
    description: string,
    icon: string
}

export type {AchievementsI, AsideItemI, CertificatesI, EducationI, ProjectsI, ToolsI};