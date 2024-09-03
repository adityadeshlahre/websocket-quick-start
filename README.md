## quick ts starter

This is my personal prefered stack for for starting simple full stack projects in one go. Initalized with turborepo in furhter i have added all the stacks along the way.

> [!IMPORTANT]  
> This is using `pnpm` as package manager.

### Tech Stack

- [x] React JS (Vite as initializer)
- [x] Node/Express Js
- [x] TailwindCSS
- [x] Recoil
- [x] Axios
- [x] Prisma
- [x] Zod

### Insider

```
"apps/web" this web(react app) folder is initializes using VITE [backedn]
```

```
"apps/server" this server(node app) folder is initializes using VITE [frontend]
```

```
packages{folder}
    | ui{reusable frontend componenets}
    | types{types to use in both frontend and backend}
    | db{prisma schema is here and singaltion connection client is init}
```

### To-Do Lits

- [x] ESLinting
- [x] Lint Stage
- [x] husky
- [x] Docker
- [ ] CI (to build and push image)
- [ ] CommitLint
- [ ] centeralized ENV
- [ ] nodeSever{node dist/index.js} need to fix

#### Thank You

<details>

<summary>Turborepo starter</summary>

````markdown
This is an official starter Turborepo.

## Using this example

Run the following command:

```sh
npx create-turbo@latest
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
````

</details>
