var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('pmdinfo.json', 'utf8'));

let csvRows = 'Class,Violation Type,Severity,Message,Start Line,Start Column,End Line,End Column\n';


obj.forEach(violation => {
    let violationString = `${violation.resource.replaceAll('/Users/johngimbert/CC VS Code Projects/First Citizens Bank/FCB SIT/force-app/main/default/classes/','').replaceAll('/Users/johngimbert/CC VS Code Projects/First Citizens Bank/FCB SIT/force-app/main/default/triggers/','')},${violation.code.value},${violation.severity},${violation.message.replaceAll(',',' ')},${violation.startLineNumber},${violation.startColumn},${violation.endLineNumber},${violation.endColumn}\n`
    csvRows += violationString;
})

fs.writeFileSync('violationTotalsByCategory.csv',csvRows);