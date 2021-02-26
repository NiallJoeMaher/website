---
title: "NextJS V10 | 📝 Highlighting the good, great and awesome updates"
excerpt: "Over 20 updates were packed into the new NextJS version 10 update, and in this article, I will go over what are, in my opinion, the big ones."
coverImage: "/images/cover_images/next10.jpeg"
date: "2020-03-16T05:35:07.322Z"
author:
  name: Niall Maher
  picture: "/images/logo.png"
ogImage:
  url: "/images/cover_images/next10.jpeg"
---

Over 20 updates were packed into the new NextJS version 10 update, and in this article, I will go over what are, in my opinion, the big ones. If you are looking for the official word, head over to [NextJS's official blog post](https://nextjs.org/blog/next-10).

> We introduced over **20 new features** that improve performance and developer experience. At the same time, the JavaScript size of the Next.js core has been **reduced by 16%**. - [Nextjs.org blog](https://nextjs.org/blog/next-10)

---

I chat about all of these features a little more in this video:

My Next.js video version of this article 📹
{% youtube yItB3icYHIY %}

---

#### React 17

We can now safely update to _React 17_ with the newest update. When you upgrade to NextJS 10 or start a new project, you will get the fantastic new JSX transform by default.

If you don't know what that is you should check out Jesse's (_codeSTACKr_) video giving a detailed breakdown:

{% youtube 8D-rWP3c088 %}

#### **New Image Component**

I think most people will think this is the MVP of this release.

This is the number one reason I would have picked Gatsby over Next.js because of the awesome [gatsby-image](https://www.gatsbyjs.com/plugins/gatsby-image/) component, which made it still optimal for generating static sites with lots of images.

The NextJS team worked with the Google Chrome team to offer super image optimisations by default. It's basically a drop-in replacement for a normal `img` tag.

```jsx
// Before

export default function() {

  return <img src="/avatar.jpg" width="400" height="400" alt="Avatar">

}
```

```jsx
// After

import Image from 'next/image'

export default function() {

  return <Image src="/avatar.jpg" width="400" height="400" alt="Avatar">

}
```

I won't go into too much detail here, but basically, we get lazy loading by default when we use this new `Img`tag and then we can mark images that are in the initial viewport to preload them.

I am excited to replace all my images with this tag now.

#### Fast Refresh for MDX

A small detail that didn't frustrate me too much but a nice improvement. `@next/mdx` will now leverage _Fast Refresh_, making sure the browser does not have to reload the page while you are editing and developing.

The [@next/mdx documentation](https://github.com/vercel/next.js/tree/canary/packages/next-mdx) guides you through how to set up MDX with Next.js.

#### CSS from node_modules

More optimisations! Instead of having to load all your libraries CSS straight into `_app.js`, now we can import them in the required components. This might seem like a small thing but now we can lazy load CSS as required which depending on the library you are using (and where you are using it), this could be some big improvements to your initial load speed.

#### Easy Internationalization

With domain routing, subpath routing and language detection, setting up internationalization has never been easier.

If you have the locales set up, you will automatically be routed based on your `Accept-Language` header (which is easily disabled in case you didn't want this).

You can then grab the locals from `next/router` and you will now see your locales in the `router` object:

![Sample router object](https://cdn-images-1.medium.com/max/720/1*ygYEwS--WVXj_QNHwq8o7A.png)

Example of router object when we navigate to our Spanish domain

#### Automatic Resolving of `href`

One thing that I always felt was frustrating when I was using `Link` tags was remembering what to put in `as` versus `href`.

Now you can stop using `as` and it will automatically resolve under the hood for you:

```jsx
// before v10

<Link href="/blog/[slug]" as="/blog/posts">
```

```jsx
// after v10

<Link href="/blog/[slug]">
```

#### Next.js Analytics

NextJS Analytics isn't your usual benchmark tester. With NextJS Analytics, it analyses your actual user's performance so that you can really see how your users perceive your site rather than the one size fits all approach.

![Screenshot of the analytics](https://cdn-images-1.medium.com/max/720/1*tSaLcDrqmy47rCdzP8Uz2Q.png)

NextJS Analytics

> Next.js Analytics is about focusing on the entire picture, deeply understanding your audience, and how your application performs for your users.

I'm rebuilding my business site with NextJS, so I am excited to give this a test run the moment I push it to production.

#### NextJS Commerce

Ever needed to build an eCommerce solution and not know where to start?

![Sampel of e-commerce site](https://cdn-images-1.medium.com/max/720/1*iebOUD0U--A_5twXP97C_Q.png)

Screenshot of NextJS Commerce site

As someone who has launched a handful of shops on Shopify because it was the easiest solution, I am super happy to see this. NextJS Commerce offers a boilerplate optimised eCommerce store. Get super speeds to boost your SEO and customer experience. Currently, it has an out of the box integration with BigCommerce, but they said they are working on solutions for other vendors like Shopify too (which is when I will probably dive headfirst in then and move one of my stores over).

Check it out here: <https://nextjs.org/commerce>

---

I'm currently rebuilding my business site with NextJS since this update dropped and I am excited to see how my website performs when it's all done.

What's your favourite feature that dropped?

---

[Follow me on Twitter](https://twitter.com/nialljoemaher)

Subscribe on [Codú Community](https://www.youtube.com/c/Cod%C3%BACommunity)
