---
permalink: /social-feed/
---

{% raw %}
<div class="block-grid-item">
    <div class="social-feed-element {{? !it.moderation_passed}} hidden{{?}}" dt-create="{{=it.dt_create}}" social-feed-id="{{=it.id}}">
        <div class="content">
            <a class="pull-left" href="{{=it.author_link}}" target="_blank" hidden>
                <img class="media-object" src="{{=it.author_picture}}">
            </a>
            <div class="media-body">
                <div class="header">
                    <a href="{{=it.author_link}}" target="_blank"><i class="fa fa-{{=it.social_network}}"></i>
                    <span class="author-title">{{=it.author_name}}</span></a>
                    <span class="muted pull-right"> {{=it.time_ago}}</span>
                </div>
                <div class="text-wrapper">
                    <p class="social-feed-text">{{=it.text}} <a href="{{=it.link}}" target="_blank" class="read-button">read more</a></p>
                </div>
            </div>
        </div>
        <a href="{{=it.link}}" target="_blank">
        {{=it.attachment}}
            </a>
    </div>
</div>
{% endraw %}