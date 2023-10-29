export async function getSpreadsheetData() {
  const url =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRAFj2uUB3H44sGqjtYR5jB2-ZOzAdK4byLGPH-MIAb1SFluJOqaDULgVcEPJzxc9Hl0JV2Vfoh3Xka/pub?gid=0&single=true&output=csv"; // Replace with your published spreadsheet link
  const response = await fetch(url);
  const data = await response.text();

  // Now 'data' contains the contents of your Google Spreadsheet as a CSV.

  const rows = data.split("\n");
  const columnData = {}; // To store data by column

  rows.forEach((row, rowIndex) => {
    const values = parseCSV(row);

    values.forEach((value, columnIndex) => {
      if (!columnData[columnIndex]) {
        columnData[columnIndex] = [];
      }

      columnData[columnIndex].push(value);
    });
  });
  console.log(columnData);
  return columnData;
}

function parseCSV(input) {
  const output = [];
  let current = "";
  let withinQuotes = false;

  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    if (char === '"') {
      if (withinQuotes) {
        if (i < input.length - 1 && input[i + 1] === '"') {
          current += '"';
          i++; // Skip the next quote
        } else {
          withinQuotes = false;
        }
      } else {
        withinQuotes = true;
      }
    } else if (char === "," && !withinQuotes) {
      output.push(current);
      current = "";
    } else {
      current += char;
    }
  }

  output.push(current);

  return output;
}
