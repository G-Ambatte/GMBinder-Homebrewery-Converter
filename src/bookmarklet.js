javascript:(function(){
if(location.href=='https://homebrewery.naturalcrit.com/new'){
	const inputText = prompt('Enter source text:');
	  const replacementList = [
		  {term: "\\\\pagebreaknum", text: "{{pageNumber,auto}}\n\\page"},
		  {term: "@=====", text:"{{pageNumber,auto}}\n\\page"},
		  {term: "\\\\pagebreak", text: "\\page"},
		  {term: "======", text: "\\page"},
		  {term: "\\\\columnbreak", text: "\\column"},
		  {term: "(?:\\n)(>[\\s\\S]*?)(?:[^ ][^ ]\\n[^>])", text: "{{note\n$1\n}}\n", flags: "gi"},
		  {term: "(?:\\n)(___\\n{{note\\n)", text: "{{monster,frame\n", flags: "gim"},
		  {term: "(?:\\n)(___\\n{{monster,frame\\n)", text: "{{monster,frame,wide\n", flags: "gi"},
		  {term: "^>\\s*?-\\s*", text: ""},
		  {term: "^(>\\s*)", text: ""},
		  {term: "^(\\*\\*.+\\*\\*)(.*)", text: "$1 :: $2"},
		  {term: ".phb", text: ".page"}
	  ];
	  var outputText = '\n' + inputText + '\n\n';
	  for (const replacement of replacementList){
		  outputText = outputText.replace(new RegExp(replacement.term, replacement.flags || 'gim'), replacement.text);
	  }
	  localStorage.setItem('homebrewery-new', outputText);
	  localStorage.setItem('homebrewery-new-style', '.page {\n  font-size: 0.317cm;\n  padding: 1cm 1.7cm 1.5cm;\n}');
	  localStorage.setItem('homebrewery-new-meta','{"renderer":"V3"}');
	  location.reload(); 	  
	  };
})();