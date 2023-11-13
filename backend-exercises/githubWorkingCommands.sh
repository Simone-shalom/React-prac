# Switch to the master branch
git checkout master
# Create a new feature branch (some_feature in this case)
git checkout -b some_feature

# Add all changes in the working directory to the staging area
git add ./

# Commit the changes with a descriptive message
git commit -m "Did some stuff"

# Push the changes to the remote repository (origin) and the current branch (some_feature)
git push

#Once it's ready to merge, I create a PR on GitHub to merge with master.

# Switch to the master branch
git checkout master


# Pull the latest changes from the remote master branch
git pull

# Delete the feature branch (some_feature) as it's no longer needed
git branch -d some_feature