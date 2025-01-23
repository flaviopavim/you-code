function getSQLSelect() {
    htmlSelect += `SELECT\n`;
    htmlSelect += `  t.\`id\`,\n`;
    for (let i = 0; i < columns.length; i++) {
        htmlSelect += `  t.\`${columns[i].name}\`${i < columns.length - 1 ? ',' : ''}\n`;
    }
    htmlSelect += `FROM\n  \`${tableName}\` t`;
    if (boolLeftJoin) {
        htmlSelect += `\n    LEFT JOIN \`${otherTableName}\` l\n      ON t.\`${otherTableName}_id\` = l.\`id\``;
    }
    if (boolWhere) {
        htmlSelect += `\nWHERE t.\`id\` = 1`;
    }
    if (boolLeftJoin || boolGroupBy) {
        htmlSelect += `\nGROUP BY t.\`id\``;
    }
    if (boolOrderBy) {
        htmlSelect += `\nORDER BY t.\`id\` DESC`;
    }
    if (boolLimit) {
        htmlSelect += `\nLIMIT 10`;
    }
}