
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
