if (!danger.github.pr.body.length) {
    warn('Please add a description to your PR.')
}

if (danger.github.pr.commits > 1) {
    warn('Consider squashing commits that do the same (if any).')
}

for (var i = 0; i < danger.git.commits.length; i++) {
    var commit = danger.git.commits[i]

    if (!commit.message.split('\n')[0].endsWith('.')) {
        fail(commit.sha + ' - Commit titles must end with a period (`.`).')
    }

    tag_regex = /[\w ]+:/

    if(!tag_regex.test(commit.message.split('\n')[0])) {
        fail(commit.sha + ' - Commit titles must start with a part tag, ' +
             'followed by a colon (e.g. `docs:`).')   
    }
}
