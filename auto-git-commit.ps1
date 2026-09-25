$repoPath = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $repoPath

$status = git status --porcelain
if ([string]::IsNullOrWhiteSpace($status)) {
    Write-Host "No changes detected. Nothing to commit."
    exit 0
}

$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm"
git add .
git commit -m "Auto commit at $timestamp"

if ($LASTEXITCODE -ne 0) {
    Write-Error "Git commit failed."
    exit $LASTEXITCODE
}

Write-Host "Auto commit successful at $timestamp"
