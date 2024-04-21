export async function getSpreadsheetData(sheetIndex) {
  const url = `https://docs.google.com/spreadsheets/d/e/2PACX-1vT-_y2kb6QITCzq60QqbwwS8ZZ0D347APs6zQV87Sb9ZObWAzKO-VKDowVQICPEGGeVPEFt2Cesn_2k/pub?output=csv&gid=${sheetIndex}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.text();

  const rows = data.split("\n");
  const columnData = {};

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

export async function fetchData(setSpreadsheetData, sheetIndex) {
  try {
    const data = await getSpreadsheetData(sheetIndex);
    console.log(data);

    const dataArray = Object.values(data);

    if (Array.isArray(dataArray) && dataArray.length > 0) {
      setSpreadsheetData(dataArray);
    } else {
      setSpreadsheetData("Não foi possível buscar os dados.");
    }
  } catch (error) {
    console.error("Error fetching data", error);
    setSpreadsheetData("Failed to fetch data");
  }
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

export function formatCurrency(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
