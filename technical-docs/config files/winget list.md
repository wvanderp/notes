
you can create a list of installed things with

```powershell
winget export file.json
```

and then you can re install it with 

```powershell
winget import file.json
```

and it just so happens that this repo contains my list of installed apps at [[file.json]]