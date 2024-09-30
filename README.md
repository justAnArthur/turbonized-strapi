# turbonized-strapi

## Getting starting

### Environment

```shell
> node -v
v20.15.1
```

```shell
> npm -v
10.7.0
```

```json
{
  "packageManager": "^npm@10.7.0",
  "engines": {
    "node": ">=20.0.0"
  }
}
```

### Database

```shell
> psql
> create database "<name>"; // change in .env
```

## _Timeline_

1. ✔️ Monorepo with Strapi and Next.js
2. ✔️ Generate Strapi types and Import/Use in Next.js
3. Use shared package for tsconfig and biome, set up linting and formating with .editorconfig
4. ✔️ Setup localization
5. ✔️ Set up dynamic blocks for web
6. Set up caching, revalidating strategy with Strapi hooks
