# secret-flyer-scraper
Get the first few deals on the Secret Flyer website via the command line so we don't have to look at that awful page.

## Installation
```sh
$ npm install -g secret-flyer-scraper
```

## Usage
```sh
# Fetch some Secret Flyer flight deals for the default location (which is set to Copenhagen, since that's where I live)
$ secretflyer

# ...or a specific place
$ secretflyer --location=zurich

# ...or a region
$ secretflyer --location=asia

# You'll need quotes if the name contains a space
$ secretflyer --location='new york'
```

That's it. Enjoy!
