# survey-loadbalance
For when you want to split your survey traffic into different groups, but SurveyMonkey wants you to pay for premium.

## Deploy
Change `index.js` to customize how many groups you want.

`npm i` to install dependancies.

Edit the `.example.env` file to change the listening port and change your links.

`cp .example.env .env`

`node .` to launch.