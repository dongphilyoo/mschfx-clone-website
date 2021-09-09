# MSCHF X Clone Website
### Dongphil Yoo

> [Netlify Deployed](https://tender-visvesvaraya-bcfda7.netlify.app/)

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).


## MSCHF Pre/Post-dev configuration

0. If you use VSCode install these two extensions please:
```
Vetur: https://marketplace.visualstudio.com/items?itemName=octref.vetur
ESLint: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
```
1. Edit the top in `nuxt.config.js`.
```
const PROJECT_TITLE = "[PROJECT_NAME]";
const PROJECT_DESCRIPTION = "[PROJECT_DESCRIPTION]";
const PROJECT_KEYWORDS = "MSCHF, "; // add more
const PROJECT_DOMAIN = "https://[PROJECT_DOMAIN]";
const FB_PIXEL_ID = "FB_PIXEL_ID";
```
2. Add keywords.
3. Pass in the `favicon.png` image that you get from the designer in `1536x1536` pixel to https://www.favicon-generator.org/. Download and extract the zip file in `this-project-folder/static`. Make sure that you move the favicons from the extracted folder into `this-project-folder/static`. Delete the zip and new empty folder.
4. Add Google Analytics code: i.e. `UA-03234494-1` in `this-project-folder/plugins/vue-analytics.js`.
5. Add Facebook Pixel: i.e. `895576750900066` in `nuxt.config.js`.
6. Copy `sharecard-facebook.png` and `sharecard-twitter.png` with that exact naming into ``this-project-folder/static/social`.
7. If needed: add any project relevant information (i.e. important notes on deployment etc.) to this README
8. Remove this section from this README
9. Create a git tag with Version 1.0 from `master` branch after the site was approved for distro.
```
$ git tag -a 1.0 -m "Version 1.0"
```

### MSCHFPreloader
As long there is no `npm` package:

1. Copy `MSCHFPreloader.vue` into `/components`
2. Copy `AndalleMono.ttf` into `/assets/fonts/AndalleMono.ttf`
3. Copy `icon-apple@3x.png`, `icon-next.svg`, `icon-play-store.svg` into `/assets/img`
4. `yarn add @nuxtjs/device cookie-universal-nuxt`
5. Add modules in `nuxt.config.js`
```
modules: [
    ...,
    "@nuxtjs/device",
    "cookie-universal-nuxt"
]
```
6. Import `MSCHFPreloader` in the nuxt layout file i.e. `layouts/default.vue`
```
<script>
import MSCHFPreloader from "~/components/MSCHFPreloader.vue";

export default {
  components: {
    MSCHFPreloader
  }
};
</script>
```
7. Add it before `<nuxt />`
```
<template>
  <div>
    <MSCHFPreloader
      :drop-number="19"
      :drop-name="`Project Title`"
      :drop-id="`mschfmag`"
      :is-parent-drop="false"
      :is-secret="true"
      :password-data="{
        password: 'password',
        deeplink: 'https://mschf.com/restricted',
        pwCookieMaxAge: 60 * 60 * 24 * 30 // 30 days
      }"
    />
    <nuxt />
  </div>
</template>
```

#### Required props:
- `dropNumber`: Int
- `dropName`: String
- `dropId`: String

#### Optional props:
- `isParentDrop`: Boolean (default: `false`)
  - This will hide the drop number.
- `isSecret`: Boolean (default: `false`)
  - Explicit check if drop is a secret drop or not.
- `passwordData`: Object

##### Required props in passwordData when password is enabled
- `password`: String
- `deeplink`: String
- `pwCookieMaxAge`: Int (in seconds)


### MSCHFDropBar
As long there is no `npm` package:

1. Copy `MSCHFDropBar.vue` into `/components`
2. Copy `AndalleMono.ttf` into `/assets/fonts/AndalleMono.ttf`
3. Copy , `icon-collapse.svg` into `/assets/img`
4. `yarn add vue-awesome-countdown vue-moment-lib`
5. Add plugins in `nuxt.config.js`
```
plugins: [
  ...,
  { src: "~plugins/vue-moment-lib", ssr: true },
  { src: "~plugins/vue-awesome-countdown", ssr: false }
],
```
6. Import `MSCHFDropBar` in the nuxt layout file i.e. `layouts/default.vue`
7. i.e. add it after `<nuxt />`
```
<template>
  <div>
    <nuxt />
    <MSCHFDropBar
      :deep-link="deeplink"
      :drop-id="dropId"
      :drop-title="dropName"
      :is-secret="true"
      :drop-number="dropNumber"
      :drop-date="dropDate"
      :next-drop="nextDrop"
    />
  </div>
</template>
```
*Important note*:
`:next-drop="nextDrop"` is a temporary change to let the counter continue for the next drop after the current drop is live. This will be removed when the DropsAPI is ready to be integrated.
8. Prepare data
```
<script>
import MSCHFPreloader from "~/components/MSCHFPreloader.vue";
import MSCHFDropBar from "~/components/MSCHFDropBar.vue";

export default {
  components: {
    MSCHFPreloader,
    MSCHFDropBar
  },
  data() {
    return {
      deeplink: "https://mschf.com/mag",
      dropNumber: 3,
      dropId: "mschfmagvol2",
      dropName: "MSCHF Mag Volume 2",
      dropDate: this.$moment("2020-08-05 15Z").toDate(),
      nextDrop: {
        // TODD: nextDrop: tmp. required data until Drop API is ready
        dropDate: this.$moment("2020-08-10 15Z").toDate()
      },
      isMSCHFPreloaderActive: true
    };
  }
};
</script>
```
*Important note*:
`nextDrop` is a temporary change to let the counter continue for the next drop after the current drop is live. This will be removed when the DropsAPI is ready to be integrated.

#### Required props:
- `dropTitle`: String
- `dropNumber`: Number
- `isSecret`: Boolean
- `dropId`: String
- `deepLink`: String

#### Optional props:
- N.A.

## TODOs
- create private `npm` package for `MSCHFPreloader`
- create private `npm` package for `MSCHFDropBar` or create a general `MSCHFComponents` package
- create custom MSCHF config file for top variables in `nuxt.config.js`
