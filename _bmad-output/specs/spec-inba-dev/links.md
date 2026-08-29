# Artifact link contract

This companion fixes the public destinations and their presentation. Copy and narrative context remain in `../../../brain-dump/portfolio-content.md`.

## Public destinations

| Label | URL | Role |
|---|---|---|
| Email | `mailto:inba2002.p@gmail.com` | Primary contact action, first in order |
| LinkedIn | `https://www.linkedin.com/in/inbasperu/` | Career and education context |
| GitHub | `https://github.com/the-pinbo` | Public developer profile |
| Resume | `https://drive.google.com/file/d/1Yd9XmOQbQr_j_XIw3krVfHL3XIJ8zHTQ/view?usp=sharing` | Sole public resume destination |
| Code | `https://github.com/inbasperu/VisionGuard` | VisionGuard source |
| GSoC | `https://summerofcode.withgoogle.com/programs/2024/projects/QUbIeRAM` | VisionGuard program record |
| Write-up | `https://medium.com/openvino-toolkit/visionguard-ai-eye-care-for-computer-users-d055a574d8e9` | VisionGuard project write-up |
| Paper | `https://ieeexplore.ieee.org/document/10890318` | ICASSP 2025 publication |
| Poster | `./ICASSP-DUN-Poster.pdf` | Complete ICASSP poster PDF |
| Certificate | `https://drive.google.com/file/d/1-LrhKrFmR9FZvuXp9MBH59vLjfCgzr6o/view` | IISc internship verification |
| Spectrum Lab | `https://spectrum.ee.iisc.ac.in/` | Institutional research context |
| Code | `https://github.com/Posit-Foundation/soft-posit-cpp/commits/refactor-cpp-soft-posits?author=the-pinbo` | SoftPosit contribution history |
| Certificate | `https://www.credly.com/badges/0caf0ab0-83e9-4614-810a-0a54ef7eb5ab` | Linux Foundation mentorship badge |
| Paper | `https://books.google.co.in/books?id=Sx8Q0gEACAAJ&printsec=frontcover&dq=editions:ISBN3032292565` | CoNGA proceedings |
| Patent | `https://iprsearch.ipindia.gov.in/RQStatus/PatentCertificatePDF.aspx?AppNo=MjAyMzQxMDUxOTgw&FullPath=LVBhdGVudENlcnRpZmljYXRlMzAtMTItMjAyNS5wZGY=` | Official Indian Patent Office certificate |
| Determinant Studios | `https://determinantstudios.com/about.html` | Work context for the patent chapter |

## Presentation rules

- Use native external links with the literal labels above. No umbrella headings, badges, or credibility containers.
- If a destination opens in a new tab, add a consistent visually hidden suffix, `target="_blank"`, and `rel="noopener noreferrer"`.
- Each linked artifact has a contextual accessible name such as "VisionGuard source code" or "ICASSP paper". Adjacent icons are `aria-hidden="true"` and `focusable="false"`.
- Email, LinkedIn, GitHub, and Resume use equal visual weight. Email remains first through order, not unique decoration.
