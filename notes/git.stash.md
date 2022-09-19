git stash save "MY-1135: Starter boilerplate"
git stash list
git stash apply stash@{0} // pulls changes from stash and keeps the stash in stack for later use.
git stash drop stash{0}
