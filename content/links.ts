export const siteOrigin = "https://inba.dev";

export function projectPath(slug: string) {
  return `/work/${slug}/` as const;
}

export const links = {
  email: "mailto:inba2002.p@gmail.com",
  linkedin: "https://www.linkedin.com/in/inbasperu/",
  github: "https://github.com/the-pinbo",
  resume: "/Inbasekaran_Perumal_Resume.pdf",

  visionguardCode: "https://github.com/inbasperu/VisionGuard",
  visionguardGsoc: "https://summerofcode.withgoogle.com/archive/2024/projects/QUbIeRAM",
  visionguardWriteUp:
    "https://medium.com/openvino-toolkit/visionguard-ai-eye-care-for-computer-users-d055a574d8e9",

  openSpec: "https://github.com/Fission-AI/OpenSpec",
  mattPocockSkills: "https://github.com/mattpocock/skills",
  pstack: "https://github.com/cursor/plugins/tree/main/pstack",
  bmadMethod: "https://github.com/bmad-code-org/BMAD-METHOD",
  bmadBuilder: "https://github.com/bmad-code-org/bmad-builder",

  icasspPaper: "https://elib.dlr.de/223869/",
  icasspPoster: "/ICASSP-DUN-Poster.pdf",
  spectrumLab: "https://spectrum.ee.iisc.ac.in/",

  softpositCode:
    "https://github.com/Posit-Foundation/soft-posit-cpp/commits/refactor-cpp-soft-posits?author=the-pinbo",
  congaPaper:
    "https://link.springer.com/book/9783032292568",

  patentCertificate:
    "https://iprsearch.ipindia.gov.in/RQStatus/PatentCertificatePDF.aspx?AppNo=MjAyMzQxMDUxOTgw&FullPath=LVBhdGVudENlcnRpZmljYXRlMzAtMTItMjAyNS5wZGY=",
  determinantStudios: "https://determinantstudios.com/about",
} as const;
