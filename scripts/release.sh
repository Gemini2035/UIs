#!/usr/bin/env sh
set -eu

version_arg="${1:-patch}"
commit_template="${2:-chore(release): v%s}"
tag_arg="${3:-}"
tag_message_template="${4:-$commit_template}"

pnpm login:npm
pnpm version "$version_arg" --no-git-tag-version

version="$(node -p "require('./package.json').version")"
commit_message="$(printf '%s' "$commit_template" | sed "s/%s/$version/g")"
tag="${tag_arg:-v$version}"
tag_message="$(printf '%s' "$tag_message_template" | sed "s/%s/$version/g")"

git add package.json pnpm-lock.yaml
git commit -m "$commit_message"
git tag -a "$tag" -m "$tag_message"

pnpm publish:npm
git push origin "$tag"
