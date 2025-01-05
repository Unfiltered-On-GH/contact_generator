# vCard Generator for Zimbabwean and Custom Contact Numbers

This script generates vCards for phone numbers using customizable prefixes and numeric lengths, offering flexibility for various use cases. It is designed to be flexible, allowing you to:

- Define custom prefixes (e.g., Zimbabwean prefixes like `+26371`, `+26377`).
- Specify the length of the numeric portion of the phone number.
- Save vCards as separate files or combine them into a single file or chunks.

## Features

1. **Custom Prefixes and Lengths**:

   - Easily modify the `prefixes` array and `numberLength` variable to match your requirements.

2. **Flexible Saving Options**:

   - Save each contact as a separate `.vcf` file.
   - Save contacts in a single `.vcf` file or split them into chunks of a specified size.

3. **User-Friendly vCard Format**:
   - Each contact is named `Person X` for easy identification.

## How to Use

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.

### Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/Unfiltered-On-GH/contact_generator.git
   cd contact_generator
   ```
2. Install necessary dependencies (if any):

### Customize Parameters

Edit the following variables in the script as needed:

- `prefixes`: Add the prefixes for your target country or carrier (e.g., `+26371`).
- `numberLength`: Specify the length of the numeric portion of the phone number.
- `outputDir`: Set the directory where the vCards will be saved.
- `saveAsSeparateFiles`: Choose whether to save each vCard as a separate file.
- `chunkSize`: Define the number of contacts per `.vcf` file when combining. Set to `0` to save all contacts in a single file.

### Run the Script

1. Uncomment the `saveVCards` function call in the script.
2. Execute the script:
   ```bash
   node vCardGenerator.js
   ```

### Output

The script will generate vCards based on the specified settings and save them in the `outputDir` directory.

## Example Usage

```javascript
const prefixes = ["+26371", "+26377"]; // Example prefixes for phone numbers
const numberLength = 7; // Numeric part length
const outputDir = "./vCards-Zimbabwe"; // Output folder
const saveAsSeparateFiles = false; // Save combined in a single file
const chunkSize = 100; // Number of contacts per file, or 0 for a single large file
```

## Notes

- Be cautious when generating large datasets, as this may produce a significant number of files or very large files.
- Ensure your system has enough storage and resources to handle the output.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
