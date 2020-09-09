var sulphuricAcid = (function(){
	var corrosive = true;
	var pH = 2;
	return { 
		property: function(){
			console.log(`Corrosive : ${corrosive}`);
			console.log(`pH acidic : ${pH < 7}`);
		}
	};
})();

console.log(sulphuricAcid.pH);  // Practicing IIFE (HackerRank)
sulphuricAcid.property();