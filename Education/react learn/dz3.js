const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

const employersNames = [];
for (let i = 0; i < employers.length; i++) {
	if (employers[i].length > 0 && employers[i].length != '') {
		employersNames.push(employers[i]);
	}
}

for (let i = 0; i < employersNames.length; i++) {
	i = employersNames.map((item)=>item.toLocaleLowerCase());
}

let sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};
// const newSponsors = {sponsors[cash, eu, rus]};
// console.log(cash);


function calcCash(own = 0) {
    let everyCash = Array.prototype.slice.call(arguments);
    let total = own;
    for (let i = 0; i < everyCash[1].length; i++) {
        total += +everyCash[1][i];
    }
    return total;
}

let money = calcCash(null, sponsors.cash);

function makeBusiness(owner, director='Victor', cash, emp) {
    
    let sumSponsors = sponsors.eu.concat(sponsors.rus, 'unexpected sponsor');
    console.log(`We have a business. Owner:   ${owner}  , director:   ${director}  . Our budget:  + ${cash} + . And our employers:  
    ${emp}`);
    console.log('And we have a sponsors: ');
    console.log.apply(null, sumSponsors);
    console.log(`Note. Be careful with   ${sponsors.eu[0]} .It's a huge risk.`);
}
makeBusiness.apply(null, ['Sam', null, money, employersNames]);