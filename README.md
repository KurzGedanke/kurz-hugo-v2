# Kurz Hugo v2

[![license MIT License](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/KurzGedanke/kurz-hugo-v2/blob/master/LICENSE)
[![Donate](https://img.shields.io/badge/Donate-💵-purple.svg)](https://kurzgedanke.me/donate/)
[![Say Thanks!](https://img.shields.io/badge/Say%20Thanks-🐿️-lightgrey.svg)](https://saythanks.io/to/KurzGedanke)
[![Contact](https://img.shields.io/badge/Contact-Mastodon-blue.svg)](https://chaos.social/@KurzGedanke)


A clean and simple [goHugo](https://gohugo.io) Theme I wrote for myself. It is licensed under an MIT License and should provide a simple, clean and fast reading expiernce.

![A screenshot of the kurz-hugo-v2 theme](https://kurzgedanke.me/img/redesign_von_kurzgedanke/kurzgedanke_dot_me.jpg)

## Installation

Copy the theme in your theme folder.

```bash
cd themes
```

when you are in your theme folder, `git clone` the reposetory.

```bash 
git clone https://github.com/KurzGedanke/kurz-hugo-v2
```

If you don't want to mess around with git submodules, you can delete the `.git` folder

## Configuration

To use the theme you have to open up your `config` file in your text editor. In my case it is a `config.toml`

```toml
baseurl = "https://kurzgedanke.me/"
LanguageCode = "de"
title = "KurzGedanke"
theme = "kurz-hugo-v2"

# Paginate

paginate = 5

[Params]
  author = "KurzGedanke"
  description = "Der private Blog von KurzGedanke"
  keywords = "Popkultur, Programmierung, Medien, tutorials"
  dateFormat = "January 2, 2006"
  # Social
  mastodon = "https://chaos.social/@KurzGedanke"
  youtube = "https://youtube.com/KurzGedanke"
  twitch = "https://twitch.tv/KurzGedanke"
  github = "https://github.com/KurzGedanke"
  email= "mailto:kurzgedanke@protonmail.com"
  pgp = "https://pgp.mit.edu"
  donate = "https://kurzgedanke.me/donate"
  rss = "https://kurzgedanke.de/index.xml"

# Footer
# please use hard coded urls
  tags = "https://kurzgedanke.me/tags"
  tutorials = "https://kurzgedanke.me/tags/tutorial"
  blog = "https://kurzgedanke.me/tags/blogs"
  aboutme = "https://kurzgedanke.me/wer-bin-ich"
  impressum = "https://kurzgedanke.me/impressum"
  datenschutz = "https://kurzgedanke.me/datenschutz"
```

and fill out the config for your needs. The `baseurl`, `LanguageCode`, `title`, `theme` as well as `paginate` are mandetory. 

The `paginate` discripte how many post are shown per site.

If you do not need any of the `social` or `footer` links, use a `#` to comment them out.

Here is my content folder structure:

```bash
➜  content git:(master) tree
.
├── about.md
├── contact.md
├── datenschutz.md
├── donate.md
├── impressum.md
├── non-amazon-whislist.md
├── post
│   ├── Bear-of-the-Day-Pseudo-Tabellen-mit-Markdown-und-Code-Blocks.md
│   ├── LaCie-1TB-USB-C-Kurz-Review.md
│   ├── Mac-Tipp-control-command-space-der-Emoji-Picker.md
│   ├── Welcome.md
│   ├── decentraland-hot-to-mine-on-a-mac.md
│   ├── headless-ssh-and-wifi-on-raspberrypi.md
│   ├── how-to-encrypt-files-with-aes.md
│   ├── problems-with-flask-and-pycharm.md
│   ├── redesign_von_kurzgedankeme.md
│   ├── things-notes-in-bear-advanced.md
│   └── web-scraping-in-mostly-pure-python.md
└── wer-bin-ich.md
```

My posts have the following heading:

```md
---
title: "Bear of the Day - Pseudo Tabellen Mit Markdown Und Code Blocks"
date: 2018-04-15T15:57:24+02:00
draft: false
tags: ["Bear-of-the-Day", "Tutorial", "Markdown", "Tabellen", "Bear", "BOTD"]
---
```

This is the default goHugo heading, but with the extension of the `tags` which are used for the `/tag` site and different footer sites.

That should be it. If you have any question please contact me via Mail or at Mastodon [chaos.social/@KurzGedanke](https://chaos.social/@KurzGedanke)

## Contributen / Feature Request

If you need a special footer link or social link you are free to open a pull request and insert it there. I might consider big feature request but this theme should be clean, simple and fast. But you are free to fork it! 

Otherwise leave me a messages! 

## Technologies and Open Source

- [gohugo.io](https://gohugo.io)
- [Milligram](https://milligram.io)
- [Open Dyslexic font by OpenDyslexic.org](https://www.opendyslexic.org)
- [jQuery](https://jquery.com)
- [Normalize.css](https://necolas.github.io/normalize.css/)
- HTML
- [SCSS](https://sass-lang.com)
- JavaScript

## License Kurz Hugo v2

Copyright 2018 KurzGedanke (Thore Jahn)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.