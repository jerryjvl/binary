# binary

Binary Risk Assessment - Angular version, based on https://github.com/protect-io/binary.

This application is a re-imagined version of the BRA tool using local storage for a persistent local risk list that can be reviewed, edited, and exported.

Individual risk assessment URLs can be shared with others. If they open the link the risk and its assessment will automatically add/update their own local storage.

In essence the risk URLs can be used as a distributed risk assessment tool.

My use-case is to put the assessment URLs inside JIRA tickets to capture the assessment that led to a specific risk level on the ticket.

# Making your own risk types

This tool has a number of common built-in risk types with slight tweaks and adjustments to the language of the questions to better fit the context of the risk type.

It is very easy to create your own additional risk types or adjust the questions by editing `/src/app/data-model/forms.data.ts` to your own requirements.

# Using this in your own company

I recommend you fork this repository and create your own published version of this tool so that you are in full control of the links it produces.

Steps:
1. Fork this repository
2. Clone the repository, and `npm install` the dependencies
3. Install angular-cli-ghpages with `npm i -g angular-cli-ghpages`
4. `ng build --prod --base-href "https://<your-username>.github.io/binary/"`
5. `npm run build:appcache`
6. `ngh --dir app`

If all goes well, this should leave you with your own personal risk assessment tool at `https://<your-username>.github.io/binary/`.