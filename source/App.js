enyo.kind({
	name: "App",
	fit: true,
	components:[
		{name: "hello", content: "Hello Werld", allowHtml: true, ontap: "helloWorldTap"}
	],
	helloWorldTap: function(inSender, inEvent) {
		this.$.hello.setContent(new Date().toLocaleTimeString());
	}
});
