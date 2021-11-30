source "https://rubygems.org"
# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#
# This will help ensure the proper Jekyll version is running.
# Happy Jekylling!
gem "jekyll", "~> 3.9" # changed because of monophase dependency

# removed a default gem theme because I'm using Monophase as a regular theme,
# as per instructions here: https://jekyllrb.com/docs/themes/#converting-gem-based-themes-to-regular-themes

# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
# gem "github-pages", group: :jekyll_plugins


# added monophase dependencies (found here: https://github.com/zivhub/monophase/blob/main/monophase.gemspec)
gem "jekyll-feed", "~> 0.15"
gem "jekyll-paginate", "~> 1.1"
gem "jekyll-seo-tag", "~> 2.7"
gem "kramdown-parser-gfm", "~> 1.1"

# also added jekyll sitemap, because why not?
gem "jekyll-sitemap"

gem "jemoji", "~> 0.12.0"


# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

