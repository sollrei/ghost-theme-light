

core/server/helpers/tpl/tag_cloud.hbs:

```
<ul class="tag-cloud">
	{{#foreach tags}}
    <li><a href="{{url}}" class="tag-item">{{name}}<span class="post-count">{{post_count}}</span></a></li>
	{{/foreach}}
</ul>
```

<img src="./preview.png">
