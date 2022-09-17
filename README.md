# Portfolio Workshop

## This is code for a portfolio website workshop
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

#### How it works

Using [GitHub Actions](https://github.com/features/actions), we create an action that automatically runs every time a change is pushed to the `main` branch. The config file for the action is at [`.github/workflows/github-pages.yml`](.github/workflows/github-pages.yml), and  you can see that it has four main steps:

1. Checkout the git repo.
1. Install Node & project dependencies.
1. Build the project.
1. Deploy to GitHub Pages.
