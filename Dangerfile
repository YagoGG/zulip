pr_title_dc = github.pr_title.downcase
warn "PR flagged as *Work in progress*." if pr_title_dc.start_with?("wip") ||
    pr_title_dc.start_with?("[wip]")

fail "Please provide a brief summary of the changes in the PR's " \
     "description." if github.pr_body.length == 0

for commit in git.commits
    fail "#{commit.sha} - Commit titles must start with a section tag, followed" \
         "by a colon (e.g. `docs:`)." unless /[\w ]+:/ =~ commit.message
    fail "#{commit.sha} - Commit titles must end with a period (.)." \
         unless commit.message.end_with?(".")
end

message "Please keep in mind our " \
    "[guidelines](http://zulip.readthedocs.io/en/latest/version-control.html) " \
    "on version control."
message "Remember that you can join us on the Zulip " \
    "[developer chat](https://chat.zulip.org)."

# Run flake8 linter
pep8.lint

# Find a couple of potential reviewers
# mention.run(2, [], ["timabbott"])

# Report todos in the modified files
# todoist.warn_for_todos
