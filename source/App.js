enyo.kind({
	name: "App",
	fit: true,
	components:[
		{name: "hello", content: "Hello Werld", allowHtml: true, ontap: "helloWorldTap"}
	],
	helloWorldTap: function(inSender, inEvent) {
		this.$.hello.addContent("<br/><b>hello</b> control was tapped");
	}
});
