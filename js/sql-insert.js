function getSQLInsert() {
    htmlInsert += `INSERT INTO \`${tableName}\` (\n`;
    for (let i = 0; i < columns.length; i++) {
        htmlInsert += `  \`${columns[i].name}\`${i < columns.length - 1 ? ',' : ''}\n`;
    }
    htmlInsert += `) VALUES (\n`;
    for (let i = 0; i < columns.length; i++) {
        htmlInsert += `  'value${i + 1}'${i < columns.length - 1 ? ',' : ''}\n`;
    }
    htmlInsert += `)`;
}