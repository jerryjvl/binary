# binary - an Angular version of Binary Risk Assessment

Binary Risk Assessment - Angular version, based on https://github.com/protect-io/binary, thanks to Ben Sapiro for sharing!

This application is a re-imagined version of the BRA tool using local storage. This means it remembers risks you create, but only on the machine where you have accessed them.

When you open a specific risk into its assessment worksheet, the URL at the top of the window can be shared with others; it encodes all details of the risk, including the asset, threat, risk type, and answers you have given to the questions. These URLs can easily be included inside your preferred risk management tool to link back to the assessment details. It is also possible to keep multiple links for each of the assessments multiple employees might make for the same risk.

As soon as you follow a risk assessment worksheet URL, it will either create a new entry in your local storage for the given "asset" and "threat", or update the existing entry with the "risk type" and "answers" from the URL.

In essence the risk assessment sheet URLs can be used as a distributed risk assessment tool if you are so inclined.

# Making your own risk types

My version of this tool has built-in risk types for common categories. The language of the questions is subtly tweaked to fit better with the context of the risk types.

It is very easy to create your own additional risk types or adjust the questions by editing `/src/app/data-model/forms.data.ts` to your own requirements after forking the repository.

## Notes on the framing of the questions

All included questions have been framed as agnostically as possible to the nature of the asset or threat involved. The set of questions for `risktype: undefined` is the best starting point for customizing a set of questions to your own needs because it makes the least assumptions about context.

There are a few noteworthy patterns to the framing of question alternatives:
* Question 1 and 2 are framed from either: the perspective of the instigator of the threat ("materialize"), or from the perspective of the protector of the asset ("avert"). The former first better with risk types dealing with directed threats.
* Question 4 follows the same distinction: either "gaps in protection of the asset" (directed threat), or "gaps in mitigations against the threat" otherwise.
* Question 7 and 8 are framed in terms of being either: more likely to cause strong feelings ("fallout"), or other "consequences".
* Question 9 is framed either relating to: concrete assets ("value to the company"), or harder to pin down assets ("business value").
* Questions 1, 4, 9 and 10 also contain a set of "or"ed together clauses that may need to be culled depending on what fits the specific "risk type". The `undefined` risk type includes the full set of options for a good starting point.

Note that these are merely heuristics, and you may disagree with my reasoning. The chosen questions for a given risk type will still not fit every possible "asset" and "threat", but hopefully the framing reduces the odds a question will be difficult to apply easily.

Or, of course, make up your own variants from scratch as needed.

# Using this in your own company

I recommend you fork this repository and create your own published version of this tool so that you are in full control of the URLs it produces for the individual risk work-sheets.

Steps:
1. Fork this repository
2. Clone the repository, and `npm install` the dependencies
3. Install angular-cli-ghpages with `npm i -g angular-cli-ghpages`
4. `ng build --prod --base-href "https://<your-github-username>.github.io/binary/"`
5. `npm run build:appcache`
6. `ngh --dir app`

If all goes well, this should leave you with your own personal risk assessment tool at `https://<your-username>.github.io/binary/`.