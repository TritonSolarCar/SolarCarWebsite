# SolarCarWebsite

Website is at www.ucsdsolarcar.com

Reccomended prerequisites: Node.js/npm/yarn

The application is a React Static application; react-static is a static site generator built for the React ecosystem.
More information can be found here: https://github.com/react-static/react-static

After you clone the project, run npm install in the my-react-static folder to install the project's packages and dependencies

```
npm install
```

To run the app in development mode, run (Note: if it doesn't work try it with yarn)

```
npm run start
```

You might see this warning here:

```
  Replace Autoprefixer browsers option to Browserslist config.
  Use browserslist key in package.json or .browserslistrc file.

  Using browsers option can cause errors. Browserslist config
  can be used for Babel, Autoprefixer, postcss-normalize and other tools.

  If you really need to use option, rename it to overrideBrowserslist.

  Learn more at:
  https://github.com/browserslist/browserslist#readme
  https://twitter.com/browserslist
```

It's alright to ignore this for now since it doesn't interfere with deployment and testing.

## Contact page

We're using https://formspree.io/ to send contact form entries directly to the ucsdsolarcar email.
If setting up for the first time, follow the steps outlined on their website.

## Website deployment / updating

The webhost service we're using is firebase. If starting from scratch, the full setep guide is at: https://medium.com/swlh/how-to-deploy-a-react-app-with-firebase-hosting-98063c5bf425 .

However, if you're just redeploying an updated version of the website, you can skip some of those steps.
If that's the case, continue with the steps below:

First, build the React application. This bundles the files together into a directory so that they can be deployed.
In React Static's case, the files will appear in the dist folder

```
npm run build
```

Make sure that you have firebase tools installed if you haven't done so already

```
npm install firebase-tools -g
```

Log in to Firebase from the terminal to ucsdsolarcar@gmail.com 's account (It will be the same login info as the email). The commands 'firebase login' and 'fireabse logout'
are helpful here.

Now that the files are ready and you've logged in, use this command to deploy the updated website:

```
firebase deploy
```

And you're done!!!

**Note: the build will hang indefinitely if we use a version of React Static above 7.1.0 so we're using version 7.1.0 until 8.0.0 comes out. More info on that can be found here: https://github.com/react-static/react-static/issues/1298**

## Connecting our google domain with our firebase website

This step only needs to be performed once; the instructions here are just for reference:
https://sjkelleyjrblog.wordpress.com/2017/07/12/firebase-hosting-and-google-domains/
