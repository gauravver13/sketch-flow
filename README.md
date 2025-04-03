


# Turborepo starter

This Turborepo starter is maintained by the Turborepo core team.

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

> [!TIP]
> Vercel Remote Cache is free for all plans. Get started today at [vercel.com](https://vercel.com/signup?/signup?utm_source=remote-cache-sdk&utm_campaign=free_remote_cache).

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup?utm_source=turborepo-examples), then enter the following commands:

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









## DO'S::
0. init mono-repo.(turbo-repo).
1. deleted docs app, added http and ws backend and init tsc
2. added package.json in both backend &
added ts-config.json in both the places and import it from @repo/typescript-config/base.json as dependency in ws and http backend
3. TODO: Change the @repo/ts-config to @{project-name}/ts-config

TODO:
4. added a build, dev and start script to both the projects. done
5. Update the turbo-config in both the projects.(figure out!!) TODO:(Optional)
<!-- because using mono-repo thats why above steps:  -->
6. Initialize a http server, Initialize a web socket server. done. 

TODO: Untill this point, add a react native application also and make this a cli and deploy this into npm package house.

<!-- It should take not more than 20 mins: -->
7. Write the signup, signin, create-room endpoint. done
8. Write the middlewares that decode the token and gate the create-room eP.
9. Decode the token in the webSocket server as well, Send the token to the webSocket server in a query param for now

<!-- This should take 20 mins only -->
10. Initialize a new `db` package where you write the schema of the project,
11. Import the db package in http layer and start putting things in the DB.
12. Add a Common Package where we add the Zod Schema and the JWT_SECRET! done

13. Defining the schema in schema.prisma: 8 mins. done!
14. Complete the http backend. 20 mins

15. ws-layer, room-management, broadcast messages! 20-30 mins
16. HTTP route for GET /chats?room=123! 10 mins
17. Frontend. 30mins