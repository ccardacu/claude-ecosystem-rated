# Run once after clone to enforce author-only commits (no Cursor co-author).
git config core.hooksPath .githooks
git config user.email "123902028+ccardacu@users.noreply.github.com"
git config user.name "Cristian Cardenas"

Write-Host "Git hooks enabled. Co-authored-by Cursor lines will be stripped from commits."
