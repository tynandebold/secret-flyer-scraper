# secret-flyer-scraper
Get the first few deals on the Secret Flyer website via the command line so we don't have to look at that awful page.

## Installation
```sh
$ npm install -g secret-flyer-scraper
```

## Usage
```sh
# Get some Secret Flyer flight deals for the default location (Copenhagen, where I live)
$ secretflyer

# Get some Secret Flyer flight deals for a specific place
$ secretflyer --location=zurich

# You'll need quotes if the name contains a space
$ secretflyer --location='new york'

# Get some Secret Flyer flight deals for a region
$ secretflyer --location=asia
```

That's it. Enjoy!