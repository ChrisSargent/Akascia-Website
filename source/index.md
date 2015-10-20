---
layout: front-page
use_sitedesc: true
heading_pre: Sorry, Akascia
heading_post: Executive Search
sub_heading: has closed down.
buttons:
    -   url: "#about"
        text: Learn More &#x25BE;
    -   url: "#contact"
        text: Get in Touch
---
{% assign sections = site.home | sort:"order" | where: "type", "home" %}

<main>
    {% for page in sections %}
        {% include section.html %}
    {% endfor %}
</main>
