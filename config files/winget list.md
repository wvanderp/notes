
You can create a list of installed things with

```powershell
winget export file.json
```

And then you can re-install it with

```powershell
winget import --verbose file.json --ignore-unavailable
```

And it just so happens that this repo contains my list of installed apps at [[file.json]]
