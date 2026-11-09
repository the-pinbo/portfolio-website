# Issue tracker

Repository: `the-pinbo/portfolio-website`. Use GitHub Issues for requested issue tracking and the `gh` CLI when authenticated as an account with access.

```sh
gh auth status
gh issue list --repo the-pinbo/portfolio-website --state open
gh issue view NUMBER --repo the-pinbo/portfolio-website --comments
```

Check authentication before writes. SSH push access and `gh` API authentication are separate. Do not change global credentials to resolve a repository-specific problem.

Create, comment on, close or label issues only within the user's requested scope. For multiline issue or PR text, write the body to a file and use `--body-file`. Read the relevant issue and comments before implementing it, and include validation evidence when reporting completion.

Use [the triage label mapping](triage-labels.md) when triaging. Check which labels exist before applying them; the mapping is a convention, not evidence that labels have been provisioned. Ordinary documentation and code edits do not require a new issue unless requested.
