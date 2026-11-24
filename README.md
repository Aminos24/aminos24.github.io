# Academic portfolio

English personal portfolio built with Next.js App Router, React and TypeScript. Requires Node.js 20+.

## Run locally

```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Verify and deploy

```bash
npm run typecheck
npm run build
npm start
```
Push this directory to a GitHub repository, import it into Vercel as a Next.js project and deploy using the default build settings.

## Personalise before publishing

- Edit `lib/content.ts` to verify project results, dates and skills and add your real email, GitHub and LinkedIn URLs. Empty links are intentionally hidden.
- Add a PDF CV to `public/cv.pdf` and set `profile.cv` to `/cv.pdf` in `lib/content.ts`. The CV button appears automatically.
- Edit `app/page.tsx` for your introduction, education and interests.
- Edit `app/globals.css` for colours and layout.
- Edit `app/layout.tsx` for metadata.
- Add projects to the `projects` array; detail routes are generated automatically.

No external accounts, API keys or database are required. No CV or contact links were supplied. Review all personal information before public deployment.
