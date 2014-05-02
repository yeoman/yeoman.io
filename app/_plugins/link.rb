# encoding: utf-8
# Title: Simple link tag for Jekyll
# Authors: Brandon Mathis http://brandonmathis.com
#          Felix Schäfer, Frederic Hemberger
# Description: This is a Jekyll plugin that generates links with additional classes if link href attribute is a part of a path of the current page.
#
# Syntax {% link "link_href" "Link Name" %}
#
# Examples:
# {% link /contacts/ Contacts %}
#
# Output on any page except contacts:
# <a href="/contacts/">Contacts</a>
#
# Output onthe contacts page:
# <a href="/contacts/" class="current">Contacts</a>
#
# Parent links will be marked with current class too.
# For example we have to pages /about and subpage /about/author and template like this:
#
# <ul>
#   <li>
#     {% link /about/ About %}
#     <ul>
#       <li>{% link /about/author Author %}
#     </ul>
#   </li>
# </ul>
#
# On the /about/author all links will be generated as this:
#
# <ul>
#   <li>
#     <a href="/about/" class="current">About</a>
#     <ul>
#       <li><a href="/about/author" class="current">Author</a>
#     </ul>
#   </li>
# </ul>

module Jekyll

  class LinkTag < Liquid::Tag
    @link = nil

    def initialize(tag_name, markup, tokens)
      @link = {}
      link = markup.scan(/([^\s]*?)\s(.*)/i)

      @link[:path] = link[0][0]
      @link[:text] = link[0][1].strip

      super
    end

    def render(context)
      page_url = context.environments.first["page"]["url"]
      klass = ''
      if page_url.index(@link[:path]) == 0
        klass = 'class="active"'
      end
      '<a href="' + @link[:path] + '" ' + klass + '>' + @link[:text] + '</a>'
    end
  end
end

Liquid::Template.register_tag('link', Jekyll::LinkTag)
