Deployed to gh-pages branch which is then served statically on gh pages

to deploy run npm run build to build the out folder
then run npm run deploy to deploy to the gh-pages branch

if you want to run locally, remove basePath and assetPrefix from next.config.ts and the npx serve out which withh deploy it to localhost
re add what was removed before deploying

