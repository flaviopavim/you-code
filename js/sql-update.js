function phpize(sql) {
    var htmlUpdateStart='';
    var htmlUpdateEnd='';
    
    // Atualização - Versão PHP
    htmlUpdateStart += `//Em PHP\n`;
    htmlUpdateStart += `$sql="\n`;
    htmlUpdateEnd += `";`;
    
    
    
//    htmlUpdateEnd += `";\n\n`;
//    htmlUpdateEnd += `foreach($rows as $row) {\n`;
//    for (var i=0;i<columns.length;i++) {
//        htmlUpdateEnd += "  echo $row['"+columns[i].name+"']\n";
//    }
//    htmlUpdateEnd += `}`;
    
    sql=htmlUpdateStart+sql+htmlUpdateEnd;
    
    for (var i=0;i<columns.length;i++) {
        var old="'"+columns[i].name+"'";
        var new_="'\".$_POST['"+columns[i].name+"'].\"'";
        sql = sql.replace(new RegExp(old, 'g'), new_);
    }
    return sql;
}

function getSQLUpdate() {
     // Atualização - Versão JavaScript
    htmlUpdate += `UPDATE \`${tableName}\`\nSET\n`;
    for (let i = 0; i < columns.length; i++) {
        htmlUpdate += `  \`${columns[i].name}\` = '${columns[i].name}'`;
        htmlUpdate += `${i < columns.length - 1 ? ',' : ''}\n`;
    }
    if (boolWhere) {
        htmlUpdate += `WHERE \`id\` = 1\n`;
    }

    htmlUpdate=phpize(htmlUpdate);
    
}