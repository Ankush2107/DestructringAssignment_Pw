const person = {
    name: "Ankush",
    address: {
      street: "123 Main St",
      city: "Bhilai",
      zipCode: "490023"
    }
};

function extractNameAndStreet(person) {
    
   const {name, address:{street}} = person;
   const extractNameAndAddress = {name, address}
   return extractNameAndAddress
}
    
const result = extractNameAndStreet(person);
console.log(result); 
  