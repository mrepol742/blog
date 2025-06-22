---
title: How to Contribute to mrepol742 @ blog
date: 2024-01-02
author: mrepol742
tags:
  - mrepol742
  - blog
  - contribution
meta:
  - name: twitter:creator
    content: '@mrepol742'
  - name: twitter:title
    content: How to Contribute to mrepol742 @ blog
  - property: og:title
    content: How to Contribute to mrepol742 @ blog
  - name: author
    content: mrepol742
  - name: keywords
    content: mrepol742 blog contribution
  - property: og:url
    content: https://mrepol742-blog.vercel.app/contribute-to-mrepol742-blog/
  - rel: canonical
    href: https://mrepol742-blog.vercel.app/contribute-to-mrepol742-blog/
---

![mrepol742 @ blog](/blog/images/posts/blog.gif)

Welcome to the world of blogging and open-source collaboration! If you're eager to share your insights, tips, or experiences with a broader audience, contributing to my mrepol742 @ blog Repository is a fantastic opportunity. In this blog post, we'll walk you through the steps to make your mark on this open-source project.

## **Fork the Repository**

To start contributing, fork the [mrepol742 @ blog](https://github.com/mrepol742/blog/fork) Repository to your GitHub account. This creates a personal copy of the repository where you can freely make changes without affecting the original project.

---

## **Clone the Repository**

Clone the fork repository to your local machine:
```
git clone https://github.com/your-username/blog.git
```
Replace `your-username`  with your actual Github username.

---

## **Install Dependecies**

This project required nodejs v18 or above

```
npm i
```

## **Create your Post**

In the `blog/_posts/` directory create a folder named by the title of your post. Then inside it create a new file named `index.md`.

Add the following content to your `index.md`, updating the details accordingly:

```
---
title: Title of your blog post
date: YYYY-MM-DD
author: Username
location: City  
tags:
  # add more tag as you like
  - hello world
  - programming
  - contribution
meta:
  - name: twitter:creator
    content: 'Username with @'
  - name: twitter:title
    content: Title of your blog post
  - property: og:title
    content: Title of your blog post
  - name: author
    content: Username
  - name: keywords
    # tags is beig seperated by spaces & spaces in replace by hypen -.
    content: hello-world programming contribution
---

Your post content goes here

Introduction lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.


## **Heading 1**

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

--

## **Heading 2**

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

--

## **Heading 3**

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

--

## **Heading 4**

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.


```

> Please refer for other blog post inside the `blog/_posts` folder for refereces

## **Include Images and Assets**

If your blog post includes images or other assets, make sure to include them in the appropriate directory. Update any relevant paths in your Markdown file to ensure everything displays correctly.

## **Preview Your Changes**

Run the project to preview your changes.

```
npm run dev
```

## **Pull Request**

- Create a new branch for your changes.

  ```
  git checkout -b added_post
  ```

- Commit your changes and push them to your forked repository

  ```
  git add . && git commit -m "Added Post"
  git push origin master
  ```

- Create a pull request from your forked repository (remote) to the main repository
- Change the PR title to `Added Post`

- In the description, add the `Title of your blog post`.

## **Review**

Your blog post will be reviewed for additional changes or to be deployed.

Thank you for contributing to mrepol742 @ blog.