tagpro.ready(function() {
	if (window.ractive) {
		return;
	}

	window.ractive = new Ractive({
		append: true,
		el: document.body,
		template: {'v':1,'t':[{'t':4,'r':'partialsList','f':[{'t':8,'r':'.'}]}]}, // {{#partialsList}}{{>.}}{{/partialsList}},
		magic: true,
		data: {
			partialsList: [],
			tagpro: tagpro
		},
		addComponent: function(component, name) {
			name = name || 'partial-' + this.componentCount++;
			this.components[name] = component;
			this.partials[name] = {'v':1,'t':[{'t':7,'e':name}]}; // '<${name} />';
			this.push('partialsList', name);
		}
	});

	console.log('TagPro Ractive initialized.');
});
