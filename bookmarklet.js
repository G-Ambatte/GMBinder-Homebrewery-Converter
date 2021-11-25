javascript:(function(){
const inputText = localStorage.getItem('homebrewery-new');
  if(location.href=='https://homebrewery.naturalcrit.com/new' && confirm('Process this text?\n' + inputText.substring(0,250))){
	  const replacementList = [
		  {term: "\\\\pagebreaknum", text: "{{pageNumber,auto}}\n\\page"},
		  {term: "@=====", text:"{{pageNumber,auto}}\n\\page"},
		  {term: "\\\\pagebreak", text: "\\page"},
		  {term: "======", text: "\\page"},
		  {term: "\\\\columnbreak", text: "\\column"},
	  ];
	  var outputText = inputText;
	  for (const replacement of replacementList){
		  console.log(replacement.term);
		  console.log(replacement.text);
		  outputText = outputText.replace(new RegExp(replacement.term, 'ig'), replacement.text);
	  }
	  localStorage.setItem('homebrewery-new', outputText);
	  localStorage.removeItem('homebrewery-new-style');
	  localStorage.setItem('homebrewery-new-meta','{"renderer":"V3"}');
	  location.reload();
	  };
})();