
```ini
[filter "lfs"]
        clean = git-lfs clean -- %f
        smudge = git-lfs smudge -- %f
        process = git-lfs filter-process
        required = true
[user]
        name = Wouter van der Plas
        email = 2423856+wvanderp@users.noreply.github.com
[diff]
        guitool = meld
        algorithm = minimal
[difftool "meld"]
        path = C:/Program Files/Meld/Meld.exe
        cmd = \"C:/Program Files/Meld/Meld.exe\" \"$LOCAL\" \"$REMOTE\"
[merge]
        guitool = meld
        conflictstyle = zdiff
[mergetool "meld"]
        path = C:/Program Files/Meld/meld.exe
        cmd = \"C:/Program Files/Meld/meld.exe\" \"$LOCAL\" \"$BASE\" \"$REMOTE\" --output \"$MERGED\"
[pull]
        rebase = false
[fetch]
        prune = false
[rebase]
        autostash = true
        autosquash = false
        updateRefs = true
[core]
        editor = \"C:/Program Files/Microsoft VS Code/code.exe\" --new-window --wait
        autocrlf = true
[rerere]
        enabled = true
        autoUpdate = true
[init]
        defaultBranch = main
```

## Fixup alias

The fixup alias was found on [30 seconds of code: Create a fixup commit in Git](https://www.30secondsofcode.org/git/s/create-fixup-commit/)
and then ChatGPT was used to rewrite it to PowerShell

```powershell
function git-fixup{git log -n 50 --pretty=format:"%h %s" --no-merges | fzf | ForEach-Object { $_.Substring(0, 7) } | ForEach-Object { git commit --fixup $_ }}
```

this can not be added to git alias because you can not run bash in PowerShell and no PowerShell in bash.

to enable this alias:

install the dependency: `winget install fzf`

`powershell_ise.exe $PROFILE` to open the PowerShell editor.
past the code above, save the code and restart PowerShell.

now you can use `git-fixup` in any PowerShell.

sources:
https://www.30secondsofcode.org/git/s/create-fixup-commit/
https://stackoverflow.com/a/72970402/1251780