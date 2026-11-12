# eaafrica.org

The website of Effective Altruism at African Leadership Academy.

## Changing something

Almost everything you'd want to change is in one file: `src/data/site.js`.

- Meeting dates and titles: `EVENTS`
- The six sessions and their readings: `SESSIONS`
- Opportunities: `OPPORTUNITIES`
- People: `PEOPLE` (photos go in `public/media/people/`)
- The sign-up form link: `FORM_URL`

Page text lives in `src/pages/` (one file per tab). Colours and fonts are in `src/styles/global.css`.

## Seeing it on your computer

```
npm install
npm run dev
```

Then open http://localhost:4321.

## Putting it live

Commit and push to `main`. GitHub builds the site and publishes it to eaafrica.org within about a minute (see the Actions tab).

Footage on the home page is from Pexels, under the Pexels licence.
