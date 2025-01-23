function getSQLCreate() {
    htmlCreate += `CREATE TABLE IF NOT EXISTS \`${tableName}\` (\n`;
    htmlCreate += `  \`id\` int(11) NOT NULL AUTO_INCREMENT,\n`; // Assuming 'id' is auto-increment primary key
    for (let i = 0; i < columns.length; i++) {
        const column = columns[i];

        htmlCreate += `  \`${column.name}\` ${column.type}`;
        if (column.size) {
            if (column.type != 'TEXT') {
                htmlCreate += `(${column.size})`;
            }
        }
        if (column.type === 'datetime') {
            htmlCreate += ' NULL DEFAULT NULL'; // Adjust as per your database requirements
        }
        //htmlCreate += `${i < columns.length - 1 ? ',' : ''}\n`;
        htmlCreate += `,\n`;
    }
    htmlCreate += `  PRIMARY KEY (\`id\`)\n`;
    htmlCreate += `);\n\n`;
}