# Fernando Arias Portfolio (React + Vite)

Professional portfolio website generated from resume content, designed for recruiter and employer visibility in embedded systems and full-stack development roles.

## Run locally

1. Open a terminal in `frontEnd`
2. Install dependencies:
   - `npm install`
3. Start dev server:
   - `npm run dev`
4. Build production bundle:
   - `npm run build`
5. Preview production build:
   - `npm run preview`

## Notes

- Core content is centralized in `src/data/portfolioData.ts` for easy editing.
- Replace placeholder links for GitHub and LinkedIn in `src/data/portfolioData.ts`.
- `Download Resume` currently targets the local file URL extracted from the provided PDF path.
  - For deployment, place your resume in `public` and update `resumeUrl` to `/your-resume.pdf`.
