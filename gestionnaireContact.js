
// Class for New Contact constructor
class Contact {
	constructor(surname, name) {
	this.surname = surname; 
	this.name = name; 
	}
}

// Table to nest contacts
let tabContact = [{surname: "Lévisse", name: "Carole"},{surname: "Nelsonne", name: "Mélodie"}];

// Function to add contact to the table
function addContact() {
	let newSurname = prompt("Entrez le nom:");
	let newName = prompt("Entrez le prénom");

	const newPerson = new Contact(newSurname, newName);
	tabContact.push(newPerson);
	console.log("Le nouveau contact a été ajouté");
}

// Start of the Program
console.log("Bonjour, bienvenue dans le gestionnaire de contact")
console.log("Merci de selectionner une option ci-dessous")
console.log("1- Afficher les contacts")
console.log("2- Ajouter un contact")
console.log("3- Quitter")


let selection = "";

//Valide que la saisie est bien : soit 1 soit 2 soit 3
do { selection = parseInt(prompt("Saisissez votre choix:"));}
	while (selection !== 1 && selection !== 2 && selection !== 3);

//Boucle de choix : 1 Affiche le Tableau // 2 Déclenche fonction ajout() // 3 Quitte
while (selection === 1 || selection === 2) {
	// 1 Affiche le Tableau
	if (selection === 1) {
		for(let i=0; i<tabContact.length; i++) {
			console.log(tabContact[i]);
		}
	}
	// 2 Déclenche fonction ajout()
	else if (selection === 2) {
			addContact();
			tabContact;
		}
		
	selection = parseInt(prompt("Saisissez votre choix:"));
}
// 3 Quitte		
alert("Merci d'avoir utilisé le gestionnaire de contacts !");