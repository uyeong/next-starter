 Next.js Starter

This is a really simple project that show the usage of Next.js with TypeScript.

## How to use it?

Download the example [or clone the repo](https://github.com/UYEONG/next-starter.git):

```bash
wget https://github.com/UYEONG/next-starter/archive/master.zip -O next-starter.zip && unzip next-starter.zip && rm next-starter.zip
cd next-starter-master
```

Install it and run:

```bash
yarn
yarn dev
```

## NPM Scripts

### List

```bash
$ yarn lint:pt # Run prettier
$ yarn lint:ts # Run tslint
$ yarn lint    # Run prettier and tslint
$ yarn test    # Run jest
$ yarn analyze # Run bundle analyze
$ yarn dev     # Run next server for development
$ yarn build   # Run next build(.next)
$ yarn export  # Run static HTML export(out)
$ yarn start   # Run http-server on the out directory
```

### Build

```
$ NODE_ENV=production yarn build && yarn export
```
