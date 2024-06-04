var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('pmdinfo.json', 'utf8'));
let totalsObject = {};


obj.forEach(violation => {
    if(totalsObject[violation.code.value]) {
        totalsObject[violation.code.value].count += 1;
    } else {
        totalsObject[violation.code.value] = {
            count: 1,
            severity: violation.severity
        }
    }
})

let csvRows = 'Severity,Category,Count\n';

for (const [key, value] of Object.entries(totalsObject)) {
    csvRows += `${value.severity},${key},${value.count}\n`
}

fs.writeFileSync('violationTotalsByCategory.csv',csvRows);