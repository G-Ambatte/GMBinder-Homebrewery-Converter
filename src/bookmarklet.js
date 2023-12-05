javascript:(function(){
if(location.href=='https://homebrewery.naturalcrit.com/new'){
	const inputText = prompt('Enter source text:');
	  const replacementList = [
		  {term: "\\\\pagebreaknum", text: "{{pageNumber,auto}}\n\\page"},
		  {term: "@=====", text:"{{pageNumber,auto}}\n\\page"},
		  {term: "\\\\pagebreak", text: "\\page"},
		  {term: "======", text: "\\page"},
		  {term: "\\\\columnbreak", text: "\\column"},
		  {term: "(\\n>[\\s\\S]*?)(?:\\n[^>])", text: "\n{{monster,frame\n$1\n}}\n", flags: "gi"},
		  {term: "^>\\s*?-\\s*", text: ""},
		  {term: "^(>\\s*)", text: ""},
		  {term: "^(\\*\\*.+\\*\\*)(.*)", text: "$1 :: $2"},
		  {term: ".phb", text: ".page"}
	  ];
	  var outputText = '\n' + inputText + '\n';
	  for (const replacement of replacementList){
		  outputText = outputText.replace(new RegExp(replacement.term, replacement.flags || 'gim'), replacement.text);
		  console.log(replacement.term);
		  console.log(replacement.flags || 'gim');
		  console.log(outputText);
	  }
	  localStorage.setItem('homebrewery-new', outputText);
	  localStorage.setItem('homebrewery-new-style', '.page { font-size: 0.317cm; }');
	  localStorage.setItem('homebrewery-new-meta','{"renderer":"V3"}');
	  location.reload(); 	  
	  };
})();