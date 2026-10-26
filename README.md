# Sebei Community Hospital Project website

A responsive, static website for the proposed Sebei Community Hospital Project in rural Sebei, Uganda.

## Included
- `index.html` — website content and page structure
- `styles.css` — responsive styling
- `script.js` — mobile navigation, current year, and safe demo form behaviour
- `assets/logo.svg` and `assets/favicon.svg` — simple project identity graphics

## Important before publishing
1. Review the project contact details included in `index.html`: Chepkwurui Adinan Sabila, sabilaadinan@gmail.com, 0777083888 and 0700941384.
2. The contact form is currently a demo and does **not** send or store submissions. Connect a form service (for example, Formspree or Netlify Forms) and test it before advertising the site.
3. The site does not accept donations or payments. Do not add bank or mobile money details until you have a verified, secure process and appropriate organisational arrangements.
4. Review all project details, especially land status, legal registration, services, and capacity, before publishing.
5. This is a project website, not a patient record system. Do not collect patient or other sensitive health information through it.

## Preview locally
Open `index.html` in a browser. For a closer local-server preview, use Python from this folder:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000`.

## Publish free using GitHub Pages
1. Create or sign in to a GitHub account.
2. Create a new **public** repository, for example `sebei-community-hospital`.
3. Upload all files and folders in this package, keeping `index.html` in the repository root.
4. In the repository, open **Settings → Pages**.
5. Under build and deployment, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
6. Wait for GitHub Pages to publish the site. The Pages settings will show the live URL.
7. Open the URL on a phone and computer, check every link, and test the contact process.

GitHub Pages gives you a URL under `github.io`. A custom `.org` or `.ug` domain can be connected later; domain registration usually costs money.

## Alternative: Netlify
1. Sign up at Netlify.
2. Choose the option to add/deploy a site by uploading a folder (the exact interface wording may change).
3. Upload the unzipped website folder.
4. Netlify will provide a site URL. Configure a form provider before expecting the contact form to send messages.

## Suggested launch checklist
- [ ] Confirm project name and wording
- [ ] Add a project email and a responsible contact person
- [ ] Configure and test form delivery, or replace the form with a mailto link
- [ ] Check accessibility and spelling
- [ ] Add genuine project photos only with permission
- [ ] Add verified organisation details only after registration is complete
- [ ] Publish a clear, accountable donation process only when ready
