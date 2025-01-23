function getSQLDelete() {
    // Exclusão
    htmlDelete += `DELETE FROM \`${tableName}\`\n`;
    if (boolWhere) {
        htmlDelete += `WHERE \`id\` = 1`;
    }
}