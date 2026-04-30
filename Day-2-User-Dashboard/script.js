const users = [
    { id :1, name: "Bob", age: 18, role: "user", isActive: true, country: "Bahrain"},
    { id :2, name: "Timmy", age: 21, role: "guest", isActive: true, country: "Bulgaria"},
    { id :3, name: "Mark", age: 37, role: "admin", isActive: false, country: "Saudia Arabia"},
    { id :4, name: "Nolan", age: 50, role: "user", isActive: true, country: "Viltrum"},
    { id :5, name: "Paul", age: 44, role: "guest", isActive: true, country: "United States"},
    { id :6, name: "Walter", age: 51, role: "admin", isActive: false, country: "United States"},
    { id :7, name: "John", age: 22, role: "admin", isActive: true, country: "United States"},
    { id :8, name: "Eli", age: 27, role: "user", isActive: false, country: "Russia"},
    { id :9, name: "Jack", age: 39, role: "guest", isActive: true, country: "United Kingdom"},
    { id :10, name: "Leon", age: 51, role: "user", isActive: true, country: "Romania"},
    { id :11, name: "Ling Long", age: 23, role: "admin", isActive: true, country: "China"},
    { id :12, name: "Ada", age: 59, role: "user", isActive: true, country: "Korea"},
]

document.getElementById("user-list").innerHTML = users.map(u => u.name + " - " + u.country).join("<br>");
