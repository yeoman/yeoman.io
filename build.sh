#!/usr/bin/env bash

# uses https://github.com/millermedeiros/gh-markdown-cli
rm -f "docs.html"
rm -f "gettingstarted.html"
rm -f "faq.html"
rm -f "packagemanager.html"
rm -f "commandline.html"

#packagemanager
cat sources/header.html >> packagemanager.html
cat sources/sidebar.html >> packagemanager.html
cat sources/yeoman/docs/cli/package_manager.md | mdown > pm_content.html
cat pm_content.html >> packagemanager.html
cat sources/pmfooter.md >> packagemanager.html
cat sources/footer.html >> packagemanager.html
rm -f "pm_content.html"

#gettingstarted
cat sources/header.html >> gettingstarted.html
cat sources/sidebar.html >> gettingstarted.html
cat sources/yeoman/docs/installation.md >> gstemp.md
cat sources/quickstart.md >> gstemp.md
cat gstemp.md | mdown > gs_content.html
cat gs_content.html >> gettingstarted.html
cat sources/footer.html >> gettingstarted.html
rm -f "gs_content.html"
rm -f "gstemp.md"

#faq
cat sources/header.html >> faq.html
cat sources/sidebar.html >> faq.html
cat sources/yeoman/docs/faq.md | mdown > faq_content.html
cat faq_content.html >> faq.html
cat sources/faqfooter.md >> faq.html
cat sources/footer.html >> faq.html
rm -f "faq_content.html"

#build docs
cat sources/header.html >> commandline.html
cat sources/sidebar.html >> commandline.html

cat sources/cliheader.md >> docstemp.md
cat sources/yeoman/docs/cli/commands/help.md >> docstemp.md
cat sources/yeoman/docs/cli/commands/init.md >> docstemp.md
cat sources/yeoman/docs/cli/commands/build.md >> docstemp.md
cat sources/yeoman/docs/cli/commands/server.md >> docstemp.md
cat sources/yeoman/docs/cli/commands/test.md >> docstemp.md
cat sources/yeoman/docs/cli/commands/install.md >> docstemp.md
cat sources/yeoman/docs/cli/commands/list.md >> docstemp.md
cat sources/yeoman/docs/cli/commands/lookup.md >> docstemp.md
cat sources/yeoman/docs/cli/commands/search.md >> docstemp.md
cat sources/yeoman/docs/cli/commands/update.md >> docstemp.md
cat sources/yeoman/docs/cli/commands/uninstall.md >> docstemp.md

cat sources/yeoman/docs/cli/generators.md >> docstemp.md
cat sources/yeoman/docs/cli/modules.md >> docstemp.md

cat docstemp.md | mdown > docs_content.html


cat docs_content.html >> commandline.html
cat sources/clifooter.md >> commandline.html
cat sources/footer.html >> commandline.html
rm -f "docs_content.html"
rm -f "docstemp.md"


#cat header.html sidebar.html index.md footer.html | mdown > index.html
