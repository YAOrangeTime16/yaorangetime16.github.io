To update the page "yaorange...", use this folder "profile"

Do not need to use gh-pages, but push directory local master branch to origin master. On the master branch, it does not push `src` directory. To push `src` directory to show the code, push the branch name `code`.

To update / Change in the code at `code`:

`$ npm checkout code`
`$ npm push origin code`

`$ npm checkout master`

`$ git fetch origin code && git merge origin/code`

`$ npm push origin master`
