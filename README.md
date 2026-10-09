# Automation practice lab

An independent Chapter 10 exercise. Do not initialize or publish the Pathbook
application, reference books, personal websites, or private env files.

## Local prerequisites and checks

Use Bun 1.4.2 and Node 24.15.0. Run beside this package.json:

```sh
bun install --frozen-lockfile
bun run check
bun --bun playwright install chromium
bun run test:browser
```

On Linux, install browser system dependencies with
`bun --bun playwright install --with-deps chromium`. The check script performs
non-mutating formatting, linting, four function tests, then one production build.
The two browser tests serve that EXISTING dist; they do not rebuild it. After
editing source, run check before test:browser. Reports/traces contain only this
public practice page. Never use real credentials or personal data in the tests.

Development uses port 4190; production preview uses 4191. Do not reuse a running
server as evidence for changed source. Vite builds with a relative asset base for
this single-page static project. This is not a routing solution for all apps.
The two committed VITE_ROOM_LABEL values are deliberately public, not secrets.

## Construct before copying

1. Copy examples/hello.yml to .github/workflows/hello.yml in YOUR new practice
   repository. Commit/push to main, then run it from Actions. Git's version and
   pwd prove a runner executed commands, not that it checked out your project.
2. Assemble a CI workflow with checkout, Node, Bun, frozen installation, check,
   browser installation and test:browser. Read the full delivery.yml only after
   this works. Full action commits are dependency pins, not your source commit.
3. Keep the assembled CI or delivery.yml, not two competing required-check
   producers with the same job name. Use the stable job name Quality gate.

## Publish this lab only

Create an empty public repository in your own account. Initialize this folder,
review git status and the staged diff, commit the allowlisted source/configuration
and bun.lock, and push main. Exclude node_modules, dist, reports and private env.
Set Settings > Pages > Source to GitHub Actions. The delivery workflow checks
pushes to main, pull requests targeting main, and manual runs. PR runs never
publish. Select main for a manual publication.

The verify job is read-only. The deploy job needs successful verification and
alone receives pages:write/id-token:write. Environment github-pages is a named
deployment target; its name alone does NOT require approval. In Settings >
Environments restrict it to main, and configure independent required reviewers
if available and appropriate. Environment features depend on plan/repository
visibility. Do not claim independent review when you approved your own run.

After a successful run, configure protection/rules for main to require a PR and
the Quality gate check from GitHub Actions. Require branches to be up to date
with main for this small exercise. Check bypass permissions; account owners may
otherwise be able to bypass a red check. Settings labels can change; inspect the
effective rule, not only whether a badge is green.

## Break, repair, and inspect

Create a branch. In src/counter.js remove the upper clamp without changing test
expectations. Format, commit, push, and open a PR. Inspect the first failed step:
the function tests should fail and the deploy job should be skipped. Record the
run URL, event, checked source SHA and unchanged assertion. Restore the clamp,
run local checks, commit the repair and push to the same PR. Wait for checks on
the latest source; stale green runs do not approve a new commit. Merge only after
review and a passing required gate. The main run checks the merge result again.

Compare published build-info.json with the successful main run's SHA and run ID.
The metadata is public bookkeeping, not a signed provenance guarantee. Open the
site at its real /repository/ prefix; check assets, keyboard behavior, small
screen layout, and the useful page without JavaScript. A failed main run should
leave the previously published site unchanged.

Portability practice is manually dispatched and calls quality.yml on Linux and
Windows. It tests formatting/lint/function tests/build, NOT browser behavior or
publication. It is optional additional evidence, not a replacement for Delivery.
Keep action/runtime pins up to date deliberately, with logs and regression tests.
The default workflow has no dependency download cache: correctness must not
depend on a cache hit. Artifacts have limited retention; they are not backups.
