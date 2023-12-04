javascript:(function(){
if(location.href=='https://homebrewery.naturalcrit.com/new'){
	const inputText = prompt('Enter source text:');
	  const replacementList = [
		  {term: "\\\\pagebreaknum", text: "{{pageNumber,auto}}\n\\page"},
		  {term: "@=====", text:"{{pageNumber,auto}}\n\\page"},
		  {term: "\\\\pagebreak", text: "\\page"},
		  {term: "======", text: "\\page"},
		  {term: "\\\\columnbreak", text: "\\column"},
		  {term: "(?:^[^>]?)(\n)(?=^>)", text: "{{monster,frame\n"},
		  {term: "(?:^>.*?$)(\\n)(?!^>)", text: "$&}}\n"},
		  {term: "^(>-(\\s*))", text: ""},
		  {term: "^(>(\\s*))", text: ""},
		  {term: "^(\\*\\*Armor Class\\*\\*)", text: "**Armor Class** ::"},
		  {term: "^(\\*\\*Hit Points\\*\\*)", text: "**Hit Points** ::"},
		  {term: "^(\\*\\*Speed\\*\\*)", text: "**Speed** ::"},
		  {term: "^(\\*\\*Skills\\*\\*)", text: "**Skills** ::"},
		  {term: "^(\\*\\*Saving Throws\\*\\*)", text: "**Saving Throws** ::"},
		  {term: "^(\\*\\*Damage Vulnerabilities\\*\\*)", text: "**Damage Vulnerabilities** ::"},
		  {term: "^(\\*\\*Damage Resistances\\*\\*)", text: "**Damage Resistances** ::"},
		  {term: "^(\\*\\*Damage Immunities\\*\\*)", text: "**Damage Immunities** ::"},
		  {term: "^(\\*\\*Condition Immunities\\*\\*)", text: "**Condition Immunities** ::"},
		  {term: "^(\\*\\*Senses\\*\\*)", text: "**Senses** ::"},
		  {term: "^(\\*\\*Languages\\*\\*)", text: "**Languages** ::"},
		  {term: "^(\\*\\*Challenge\\*\\*)", text: "**Challenge** ::"},
		  {term: "^(\\*\\*Proficiency Bonus\\*\\*)", text: "**Proficiency Bonus** ::"},
		  {term: ".phb", text: ".page"}
	  ];
	  var outputText = '\n' + inputText + '\n';
	  console.log(outputText);
	  for (const replacement of replacementList){
		  outputText = outputText.replace(new RegExp(replacement.term, 'gim'), replacement.text);
	  }
	  localStorage.setItem('homebrewery-new', outputText);
	  localStorage.removeItem('homebrewery-new-style');
	  localStorage.setItem('homebrewery-new-meta','{"renderer":"V3"}');
	  location.reload(); 
	  };
})();