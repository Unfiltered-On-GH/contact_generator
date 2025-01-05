// Import required libraries
const fs = require("fs");

// Function to generate contact numbers based on prefixes and length
// This function helps you create a list of phone numbers based on given prefixes and desired length.
function generateContacts(prefixes, numberLength) {
  const contacts = [];

  prefixes.forEach((prefix) => {
    const range = Math.pow(10, numberLength); // Total possible numbers for given length
    for (let i = 0; i < range; i++) {
      const number = prefix + i.toString().padStart(numberLength, "0"); // Pad numbers with 0s for maitaing length
      contacts.push(number);
    }
  });

  return contacts;
}

// Function to create vCard
// This function formats each phone number into a vCard format
function createVCard(number, index) {
  return `BEGIN:VCARD\nVERSION:3.0\nFN:Person ${index}\nTEL;TYPE=CELL:${number}\nEND:VCARD`;
}

// Function to save vCards
// This function saves all the vCards based on the specified options
function saveVCards(
  contacts,
  outputDir,
  saveAsSeparateFiles = true,
  chunkSize = 100
) {
  // Check if directory exists; if not, create it
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  if (saveAsSeparateFiles) {
    // Save each vCard as a separate file
    contacts.forEach((contact, index) => {
      const vCard = createVCard(contact, index + 1);
      const filePath = `${outputDir}/${contact}.vcf`;
      fs.writeFileSync(filePath, vCard);
    });
    console.log(
      `${contacts.length} vCards created as separate files in ${outputDir}`
    );
  } else {
    // Save vCards in chunks or a single file based on chunkSize
    if (chunkSize === 0) {
      const vCards = contacts
        .map((contact, index) => createVCard(contact, index + 1))
        .join("\n");
      const filePath = `${outputDir}/all_contacts.vcf`;
      fs.writeFileSync(filePath, vCards);
      console.log(
        `All ${contacts.length} contacts saved in a single file at ${filePath}`
      );
    } else {
      let chunkIndex = 1;
      for (let i = 0; i < contacts.length; i += chunkSize) {
        const chunk = contacts.slice(i, i + chunkSize);
        const vCards = chunk
          .map((contact, index) => createVCard(contact, i + index + 1))
          .join("\n");
        const filePath = `${outputDir}/contacts_chunk_${chunkIndex}.vcf`;
        fs.writeFileSync(filePath, vCards);
        console.log(`Saved chunk ${chunkIndex} with ${chunk.length} contacts.`);
        chunkIndex++;
      }
      console.log(
        `${contacts.length} vCards saved in chunks of ${chunkSize} in ${outputDir}`
      );
    }
  }
}

// Feel free to customize this section for your specific needs!
const prefixes = ["+26371", "+26377", "+26378", "+26373"]; // Example for Zimbabwe, edit to for target country
const numberLength = 7; // Number length after the prefix
const outputDir = "./vCards-Zimbabwe"; // Edit country to organize you vCards
const saveAsSeparateFiles = false; // Set to true to save each contact in a separate file
const chunkSize = 100; // Number of contacts per vCard file, or 0 for a single large file (valid only if saveAsSeparateFiles = false)

// Generate contacts based on the given prefixes and number length
const contacts = generateContacts(prefixes, numberLength);
console.log(`Total Contacts Generated: ${contacts.length}`);

// Save vCards based on the chosen options
// Note: This can generate a LOT of files, or very LARGE file(s) so uncomment with caution!
// saveVCards(contacts, outputDir, saveAsSeparateFiles, chunkSize);
