Deploying a React App* to GitHub Pages
* created using create-react-app

Introduction
In this tutorial, I'll show you how you can create a React app and deploy it to GitHub Pages.

To create the React app, I'll be using create-react-app, which is a tool people can use to create a React app from scratch. To deploy the React app, I'll be using gh-pages, which is an npm package people can use to deploy things to GitHub Pages, a free web hosting service provided by GitHub.

If you follow along with this tutorial, you'll end up with a new React app—hosted on GitHub Pages—which you can then customize.

Tutorial
Prerequisites
Node and npm are installed. Here are the versions I'll be using while making this tutorial:

$ node --version
v16.13.2

$ npm --version
8.1.2
Installing npm adds two commands to the system—npm and npx—both of which I'll be using while making this tutorial.

Git is installed. Here's the version I'll be using while making this tutorial:

$ git --version
git version 2.29.1.windows.1
A GitHub account. :octocat:

Procedure
1. Create an empty repository on GitHub
Sign into your GitHub account.
Visit the Create a new repository form.
Fill in the form as follows:
Repository name: You can enter any name you want*.

* For a project site, you can enter any name you want. For a user site, GitHub requires that the repository's name have the following format: {username}.github.io (e.g. gitname.github.io)

The name you enter will show up in a few places: (a) in references to the repository throughout GitHub, (b) in the URL of the repository, and (c) in the URL of the deployed React app.

In this tutorial, I'll be deploying the React app as a project site.

I'll enter: react-gh-pages

Repository privacy: Select Public (or Private*).

* For GitHub Free users, the only type of repository that can be used with GitHub Pages is Public. For GitHub Pro users (and other paying users), both Public and Private repositories can be used with GitHub Pages.

I'll choose: Public

Initialize repository: Leave all checkboxes empty.

That will make it so GitHub creates an empty repository, instead of pre-populating the repository with a README.md, .gitignore, and/or LICENSE file.

Submit the form.
At this point, your GitHub account contains an empty repository, having the name and privacy type that you specified.

2. Install the gh-pages npm package
Install the gh-pages npm package and designate it as a development dependency:

$ npm install gh-pages --save-dev
At this point, the gh-pages npm package is installed on your computer and the React app's dependence upon it is documented in the React app's package.json file.

3. Add a homepage property to the package.json file
Open the package.json file in a text editor.

$ vi package.json
In this tutorial, the text editor I'll be using is vi. You can use any text editor you want; for example, Visual Studio Code.

Add a homepage property in this format*: https://{username}.github.io/{repo-name}

* For a project site, that's the format. For a user site, the format is: https://{username}.github.io. You can read more about the homepage property in the "GitHub Pages" section of the create-react-app documentation.

{
  "name": "v-work",
  "version": "0.1.0",
+ "homepage": "https://jyoshna-g.github.io/v-work",
  "private": true,
At this point, the React app's package.json file includes a property named homepage.

5. Add deployment scripts to the package.json file
Open the package.json file in a text editor (if it isn't already open in one).

$ vi package.json
Add a predeploy property and a deploy property to the scripts object:

"scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
At this point, the React app's package.json file includes deployment scripts.

6. Add a "remote" that points to the GitHub repository
Add a "remote" to the local Git repository.

You can do that by issuing a command in this format:

$ git remote add origin https://github.com/jyoshna-g/vwork.git
To customize that command for your situation, replace {username} with your GitHub username and replace {repo-name} with the name of the GitHub repository you created in Step 1.

In my case, I'll run:

$ git remote add origin https://github.com/jyoshna-g/vwork.git
That command tells Git where I want it to push things whenever I—or the gh-pages npm package acting on my behalf—issue the $ git push command from within this local Git repository.

At this point, the local repository has a "remote" whose URL points to the GitHub repository you created in Step 1.

7. Push the React app to the GitHub repository
Push the React app to the GitHub repository

$ npm run deploy
That will cause the predeploy and deploy scripts defined in package.json to run.

Under the hood, the predeploy script will build a distributable version of the React app and store it in a folder named build. Then, the deploy script will push the contents of that folder to a new commit on the gh-pages branch of the GitHub repository, creating that branch if it doesn't already exist.

By default, the new commit on the gh-pages branch will have a commit message of "Updates". You can specify a custom commit message via the -m option, like this:

$ npm run deploy -- -m "Deploy React app to GitHub Pages"
At this point, the GitHub repository contains a branch named gh-pages, which contains the files that make up the distributable version of the React app. However, we haven't configured GitHub Pages to serve those files yet.

8. Configure GitHub Pages
Navigate to the GitHub Pages settings page
In your web browser, navigate to the GitHub repository
Above the code browser, click on the tab labeled "Settings"
In the sidebar, in the "Code and automation" section, click on "Pages"
Configure the "Build and deployment" settings like this:
Source: Deploy from a branch
Branch:
Branch: gh-pages
Folder: / (root)
Click on the "Save" button
That's it! The React app has been deployed to GitHub Pages! 🚀

At this point, the React app is accessible to anyone who visits the homepage URL you specified in Step 4. For example, the React app I deployed is accessible at https://gitname.github.io/react-gh-pages.

9. (Optional) Store the React app's source code on GitHub
In a previous step, the gh-pages npm package pushed the distributable version of the React app to a branch named gh-pages in the GitHub repository. However, the source code of the React app is not yet stored on GitHub.

In this step, I'll show you how you can store the source code of the React app on GitHub.

Commit the changes you made while you were following this tutorial, to the master branch of the local Git repository; then, push that branch up to the master branch of the GitHub repository.

$ git add .
$ git commit -m "Configure React app for deployment to GitHub Pages"
$ git push origin master
I recommend exploring the GitHub repository at this point. It will have two branches: master and gh-pages. The master branch will contain the React app's source code, while the gh-pages branch will contain the distributable version of the React app.
