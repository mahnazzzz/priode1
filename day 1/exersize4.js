var names = ["Lars", "Peter", "Jan", "Bo"];

var list = names.map(function(name) {
    return '<li>' + name + '</li>'
})

var ul = '<ul>\n  ' + list.join('\n  ') + '\n</ul>'

//b
var persons = [
    { name: "Lars", phone: "1234567" }, 
    { name: "Peter", phone: "675843" }, 
    { name: "Jan", phone: "98547" }, 
    { name: "Bo", phone: "79345" }
]

var keyNames = Object.keys(persons[0])

var header = '  <tr>\n' +
             '    <th>' + keyNames[0] + '</th>\n' +
             '    <th>' + keyNames[1] + '</th>\n' + 
             '  </tr>'

var rows = persons.map(function(person) {
    return '  <tr>\n' + 
           '    <td>' + person.name + '</td>\n' +
           '    <td>' + person.phone + '</td>\n' +
           '  </tr>'
})

var table = '<table>\n' + header + '\n' + rows.join('\n') + '\n</table>'
document.getElementById("names").innerHTML = table