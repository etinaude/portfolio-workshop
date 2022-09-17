# Portfolio Workshop

Portfolio workshop run by Google Student Developer Club at the University of Auckland.

## 🚗 Install

Install Node.js and npm.

Install the dependencies:

```bash
npm install
```

## 👟 Run

rename one of the `templateX.svelte` files in `src/routes/` to `index.svelte`

eg `template1.svelte` >> `index.svelte`

Then run:

```bash
npm run dev
```

## 🛩️ Templates

### Testing templates

You can test your content in different templates by adding the template number to the end of the url.

eg [localhost:3000/template1](localhost:3000/template1)

### Content

All the content for your portfolio is in `src/content`

The `.json` files allow you to edit the text eg, your name, your projects, your skills, etc.
The `theme.scss` file lets you to edit the colours and styles of your portfolio.
The `images` folder is where you add images to your portfolio. (linked in the `.json` files)

All the code is provided so you can also edit the templates to make them your own.🙂

### Template 1

![Template 3](./resources/template1.gif)

### Template 2

![Template 3](./resources/template2.gif)

### Template 3

![Template 3](./resources/template3.gif)

## 🚀 Hosting with GitHub Pages

1. Go to `https://github.com/<YOUR USERNAME>/portfolio-workshop/settings/pages`.
1. Under `Build and deployment`, select `Deploy from a branch` and the branch should be `gh-pages`.
1. Check that your website is deployed at `https://<YOUR USERNAME>.github.io/portfolio-workshop`!

### How it works

Using [GitHub Actions](https://github.com/features/actions), we create an action that automatically runs every time a change is pushed to the `main` branch. The config file for the action is at [`.github/workflows/github-pages.yml`](.github/workflows/github-pages.yml), and you can see that it has four main steps:

1. Checkout the git repo.
1. Install Node & project dependencies.
1. Build the project.
1. Deploy to GitHub Pages.

## 🛥️ Socials

### Developers

|           | Etienne Naude                           | Matt Moran                                          | Eugene Chua                           | Flynn Fromont                             |
| --------- | --------------------------------------- | --------------------------------------------------- | ------------------------------------- | ----------------------------------------- |
| Portfolio | [etinaude.dev](https://etinaude.dev)    | [mattm.nz](https://mattm.nz/)                       | [echua.top](https://echua.top)        |                                           |
| GitHub    | [etinaude](https://github.com/etinaude) | [DarkMatterMatt](https://github.com/DarkMatterMatt) | [luorixo](https://github.com/luorixo) | [f-fromont](https://github.com/f-fromont) |

### GSDC

| Link      | <img width="100px" src="./resources/gdsc%20logo.webp">         |
| --------- | -------------------------------------------------------------- |
| Discord   | [W6QtB3Sm2U](https://discord.gg/W6QtB3Sm2U)                    |
| Instagram | [@gdsc.uoa](https://www.instagram.com/gdsc.uoa/)               |
| Website   | [GSDC](https://gdsc.community.dev/the-university-of-auckland/) |
