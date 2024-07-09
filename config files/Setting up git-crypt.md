
My notes is mostly a open book. but some notes are private like contact information of other people.

That is why I use git-crypt to encrypt the notes that are private.

## Setting up git-crypt

### Installation on Ubuntu

On Ubuntu you need to compile git-crypt from source.

```bash
git clone https://github.com/AGWA/git-crypt

cd git-crypt

sudo apt-get install libssl-dev

make
sudo make install
```

### Installation on windows

download the the exe from `https://github.com/AGWA/git-crypt/releases`

```powershell
Invoke-WebRequest -Uri "https://github.com/AGWA/git-crypt/releases/download/0.7.0/git-crypt-0.7.0-x86_64.exe" -OutFile "git-crypt.exe"
```

### Load the key

```bash
git-crypt unlock /path/to/keyfile
```
