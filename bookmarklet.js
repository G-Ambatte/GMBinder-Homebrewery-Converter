javascript:(function(){
if(location.href=='https://homebrewery.naturalcrit.com/new'){
	const inputText = prompt('Enter source text:');
	  const replacementList = [
		  {term: "\\\\pagebreaknum", text: "{{pageNumber,auto}}\n\\page"},
		  {term: "@=====", text:"{{pageNumber,auto}}\n\\page"},
		  {term: "\\\\pagebreak", text: "\\page"},
		  {term: "======", text: "\\page"},
		  {term: "\\\\columnbreak", text: "\\column"},
		  {term: ".phb", text: ".page"}
	  ];
	  var outputText = inputText;
	  for (const replacement of replacementList){
		  outputText = outputText.replace(new RegExp(replacement.term, 'ig'), replacement.text);
	  }
	  localStorage.setItem('homebrewery-new', outputText);
	  localStorage.removeItem('homebrewery-new-style');
	  localStorage.setItem('homebrewery-new-meta','{"renderer":"V3"}');
	  location.reload();
	  };
})();