(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['userPost'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<div class=\"post-body\">\r\n			<p class=\"post-body-contents\">"
    + alias4(((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"body","hash":{},"data":data,"loc":{"start":{"line":11,"column":33},"end":{"line":11,"column":41}}}) : helper)))
    + "</p>\r\n			<a class=\"post-resource\" href=\""
    + alias4(((helper = (helper = helpers.resource || (depth0 != null ? depth0.resource : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"resource","hash":{},"data":data,"loc":{"start":{"line":12,"column":34},"end":{"line":12,"column":46}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.resource || (depth0 != null ? depth0.resource : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"resource","hash":{},"data":data,"loc":{"start":{"line":12,"column":48},"end":{"line":12,"column":60}}}) : helper)))
    + "</a>\r\n		</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"user-post\" data-class=\""
    + alias4(((helper = (helper = helpers["class"] || (depth0 != null ? depth0["class"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"class","hash":{},"data":data,"loc":{"start":{"line":1,"column":35},"end":{"line":1,"column":44}}}) : helper)))
    + "\" data-upload-date=\""
    + alias4(((helper = (helper = helpers.uploadDate || (depth0 != null ? depth0.uploadDate : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"uploadDate","hash":{},"data":data,"loc":{"start":{"line":1,"column":64},"end":{"line":1,"column":78}}}) : helper)))
    + "\" data-term=\""
    + alias4(((helper = (helper = helpers.term || (depth0 != null ? depth0.term : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"term","hash":{},"data":data,"loc":{"start":{"line":1,"column":91},"end":{"line":1,"column":99}}}) : helper)))
    + "\" data-year=\""
    + alias4(((helper = (helper = helpers.year || (depth0 != null ? depth0.year : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"year","hash":{},"data":data,"loc":{"start":{"line":1,"column":112},"end":{"line":1,"column":120}}}) : helper)))
    + "\" data-professor=\""
    + alias4(((helper = (helper = helpers.professor || (depth0 != null ? depth0.professor : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"professor","hash":{},"data":data,"loc":{"start":{"line":1,"column":138},"end":{"line":1,"column":151}}}) : helper)))
    + "\" data-post-number=\""
    + alias4(((helper = (helper = helpers.postNum || (depth0 != null ? depth0.postNum : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"postNum","hash":{},"data":data,"loc":{"start":{"line":1,"column":171},"end":{"line":1,"column":182}}}) : helper)))
    + "\" data-body=\""
    + alias4(((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"body","hash":{},"data":data,"loc":{"start":{"line":1,"column":195},"end":{"line":1,"column":203}}}) : helper)))
    + "\" data-resource=\""
    + alias4(((helper = (helper = helpers.resource || (depth0 != null ? depth0.resource : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"resource","hash":{},"data":data,"loc":{"start":{"line":1,"column":220},"end":{"line":1,"column":232}}}) : helper)))
    + "\">\r\n	<div class=\"post-contents\">\r\n		<h3 class=\"post-title\"><a href=\"/posts/"
    + alias4(((helper = (helper = helpers.postNum || (depth0 != null ? depth0.postNum : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"postNum","hash":{},"data":data,"loc":{"start":{"line":3,"column":41},"end":{"line":3,"column":52}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":3,"column":54},"end":{"line":3,"column":63}}}) : helper)))
    + "</a></h3>\r\n		<div class = \"post-contents-info\">\r\n			<h5 class=\"post-info\">Class: "
    + alias4(((helper = (helper = helpers["class"] || (depth0 != null ? depth0["class"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"class","hash":{},"data":data,"loc":{"start":{"line":5,"column":32},"end":{"line":5,"column":41}}}) : helper)))
    + "</h5>\r\n			<h5 class=\"post-info\">Professor: "
    + alias4(((helper = (helper = helpers.professor || (depth0 != null ? depth0.professor : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"professor","hash":{},"data":data,"loc":{"start":{"line":6,"column":36},"end":{"line":6,"column":49}}}) : helper)))
    + "</h5>\r\n			<h5 class=\"post-info\">Upload date: "
    + alias4(((helper = (helper = helpers.uploadDate || (depth0 != null ? depth0.uploadDate : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"uploadDate","hash":{},"data":data,"loc":{"start":{"line":7,"column":38},"end":{"line":7,"column":52}}}) : helper)))
    + "</h5>\r\n		</div>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.showbody : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":2},"end":{"line":14,"column":9}}})) != null ? stack1 : "")
    + "	</div>\r\n</div>\r\n";
},"useData":true});
})();