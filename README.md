# richieintech.com

[![Netlify Status](https://api.netlify.com/api/v1/badges/c86537f5-8d16-477e-bb36-fe8289657937/deploy-status)](https://app.netlify.com/sites/richieintech/deploys)

This is the source code of Richard's personal website, <https://richieintech.com>. It is written mainly in [GatsbyJS](https://www.gatsbyjs.com/), [Typescript](https://www.typescriptlang.org/) and [Styled-components](https://styled-components.com/).

_Note: Richard publishes his website to inspire and help those who want to build a website for their own but don't know where to start. This source code can help people know how to setup, configure and organize a Gatsby application as well as other relevant stuff like styling and types. It's perfectly fine for you to fork this repo (give it a like would be awesome), but remember that it's heavily customized to match Richard's desire. It will be fantastic for you to customize for your own good. Not only does it improve your skills but also you show a respect for Richard's work!_

## 🚀 Quick start

> For the rest of this guideline, [Yarn](https://yarnpkg.com/) will be used, but [NPM](https://www.npmjs.com/) works the same.

1.  **Clone this repo**

    Clone this repo to your local machine

    ```shell
    # Clone with HTTPS
    git clone https://github.com/richardnguyen99/richieintech.com.git your_project_name/

    # Clone with SSH
    git clone git@github.com:richardnguyen99/richieintech.com.git your_project_name/
    ```

1.  **Play around.**

    Navigate into the directory you just created and run

    ```shell
    cd your-project-name/
    yarn && yarn run start
    ```

1.  **Watch inside and start changing**

    The site is now running at `http://localhost:8000` by default!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `your-project-name` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── __mocks__
    ├── content
    ├── src
    ├── .editorconfig
    ├── .eslintignore
    ├── .eslintrc.js
    ├── .gitignore
    ├── .huskyrc
    ├── .lintstagedrc
    ├── .prettierignore
    ├── .prettierrc
    ├── .stylelintrc
    ├── codegen.yml
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── graphql.schema.json
    ├── jest-prepocess.js
    ├── jest.config.js
    ├── LICENSE
    ├── loadershim.js
    ├── package.json
    ├── README.md
    ├── SECURITY.md
    ├── tsconfig.json
    └── yarn.lock

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/__mocks__`**: This directory contains all of the Jest mocks that stub out functionality with mock; instead of real data or real components, fake data or fake components will be used.

3.  **`/content`**: This directory contains all of the necessary files for building a blog, like markdown files and images.

4.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

5.  **`.editorconfig`**: This forces your editor (plugin required) to follow a general set of rules throughout the developing process.

6.  **`.eslintrc.js`**: This is a linter tool that forces you to write code (Javascript & Typescript) in a certain way and prevents bad code from existing in the codebase. You can write this file in other extensions like `.yml` or `.json`.

7.  **`.eslintignore`**: This tells ESLint which file it shoule ignore. Ideally, use this for configuration files or automatically-generated files.

8.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

9.  **`.huskyrc`**: This is a git hook to prevent bad `git commit` and `git push` from existing. It will be triggered before a `git commit` is called. It's used to run ESLint, Stylelint and other checking tools.

10. **`.lintstagedrc`**: This is like `.huskyrc` but only for linting tools.

11. **`.prettierignore`**: This tells Prettier which file should be ignored from formatting.

12. **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

13. **`.styelintrc`**: This is like ESLint, but for CSS (in this case, Styled-components).

14. **`codegen.yml`**: This file is a configuration used by `graphl-codegen` to automatically generate your Typescript types and interfaces for your Graphql queries.

15. **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

16. **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

17. **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

18. **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

19. **`graphql.schema.json`**: This file is generated automatically, which defines your Graphql schema.

20. **`jest-preprocess.js`**: This file loads processors for testing javascript & typescript codes.

21. **`jest.config.js`**: This configures sets of processors for Jest to test.

22. **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

23. **`loadershim.js`**: This lets you list files that will be included before all tests are run.

24. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

25. **`README.md`**: A text file containing useful reference information about your project (what you're reading right now).

26. **`SECURITY.md`**: This is automatically generated by Github to secure the app from out-dated dependencies and packages.

27. **`tsconfig.json`**: This tells Typescript how the app is written in Typescript and how to type-check it.

28. **`yarn.lock`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

## 😎 Author

- [Richard Nguyen](https://github.com/richardnguyen99)

## 💫 Contribution

If you found any problems or issues, please feel free to open a pull request to fix that. Richard would be happy if there were someone improving the website with him. If a pull request is unnecessary, you contact him with:

- Reddit: <https://www.reddit.com/user/HieuNguyen990616>
- Twitter: <https://twitter.com/richardnguyenmh>
