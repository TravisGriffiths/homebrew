# create-svelte

Svelte Homebrew, a pre-styled Sveltekit project for Campaign and RPG content creation

## Creating a project

This is a Sveltekit project for making campaign, or worldbuilding sites styled along the lines of 
the [NaturalCrit Homebrew markdown site](https://homebrewery.naturalcrit.com/). This project would not be possible without the work they have done and builds on much of the time and effort they put in. If your needs are only for a well presented informational site for a homebrew rule or setting for your players I cannot recommend the [Homebrewery](https://homebrewery.naturalcrit.com/) enough. That is a tool for creating and hosting well presented data in a 5e style. This is an extension of that idea out to creating something larger and more interactive for more technical content creators. 

---

For many campaigns and brew rules, if all that is needed is just a styled campaign page, it is likely all you need is there. This project is for the technically inclined Worldbuilder and game designer that wants the design, but wants to push it farther. It is build on [Sveltekit](https://kit.svelte.dev/), allowing any website to be created at any level of complexity. The styling engine is [Skeleton UI](https://www.skeleton.dev/), which is in turn built off of [Tailwind](https://tailwindui.com/) 

## Starting

Git clone this repo (MIT Licence) and change into its directory. Then install the dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.


## Hosting 
For sites and content that do not require any data to be stored or hosted, I recommend using the Clouflare Pages adapter [Cloudflare Pages](https://developers.cloudflare.com/pages), it gets a site up and in public with a few commands and costs nothing or practically nothing. It is also fully possible to use The static site adapter along with AWS S3 to host a compiled site by putting the `/build` folder contents into a bucket set to host a static site. This is also only fractions of a penny, but requires a bit of comfort with AWS. Vercel and Netlify also have pre-built adapters that are probably similarly simple, but I have no personal experience with them. If a database and server is required, a node or cloudflare workers adapter might be needed, but at that point, your appitite for technical complexity has exceeded this simple project. The adapter settings are fully stock SvelteKit, and this just gets you a quick leg up in styling. The rest is pure [Svelte](https://learn.svelte.dev/tutorial/welcome-to-svelte), which is super easy (relative to any similar web development), [and is well documented elsewhere](https://kit.svelte.dev/docs/introduction). Svelte is just a simple way to do web client front ends, and SvelteKit is the addition of backend server support for similar simplicity in the serving, and fetching of data going to the front end. In React terms, Svelte is React, and SvelteKit is Next.js 

# 5e integration
While I trend strongly towards very rules light systems like [EZd6 by DM Scotty](https://www.ezd6.com/) and [Index Card RPG by Runehammer](https://hankerinferinale.wixsite.com/icrpg), the amount of resources, playerbase and support for 5e cannot be beat. For that reason, the data for 5e is bundled as JSON for your use in the `/lib/data` folder, and the 5e API is ready to go for hooks in order to allow 5e creators to quickly create and publish content for this system. 

## Thanks and Shout-Outs
Great thanks to:

[Natural Crit](https://www.naturalcrit.com/)

[Fergus Bently](https://github.com/fergcb) and his projects:

* Github:  [https://github.com/5e-bits](https://github.com/5e-bits)
* [The 5e API](https://www.dnd5eapi.co/docs/#overview)
* [The 5e Database](https://github.com/5e-bits/5e-database)

The fonts are from [Jonathon F's Solbera DnD fonts repository](https://github.com/jonathonf/solbera-dnd-fonts)

## Wish List

* World Anvil API integration