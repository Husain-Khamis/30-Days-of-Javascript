const cards = document.querySelector("#user-list");
const errorMessage = document.querySelector('#error-message');

const userArr = [
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

filterBy();

function renderCards(userArr) {
    cards.innerHTML = "";
    if (userArr.length === 0){

        errorMessage.textContent = "Error, No user found"
        errorMessage.style.display = 'block';
        return;

    } else{
        errorMessage.style.display = 'none';
        for (let i = 0; i < userArr.length; i++) {

            const userCard = document.createElement("div");
            userCard.className = "card";

            const name = document.createElement("p");
            name.innerText = `${userArr[i].name}`;
            
            const age = document.createElement("p");
            age.innerText = `They are ${userArr[i].age} Years Old`;

            const role = document.createElement("p");
            role.innerText = `Role : ${userArr[i].role}`;

            const isActive = document.createElement("p");
            isActive.innerText = `Are They Active: ${userArr[i].isActive ? "✅" : "❌"}`;

            const country = document.createElement("p");
            country.innerText = `They live in: ${userArr[i].country}!`;

            userCard.appendChild(name);
            userCard.appendChild(age);
            userCard.appendChild(role);
            userCard.appendChild(isActive);
            userCard.appendChild(country);
            cards.appendChild(userCard);
        }
    }
}

function filterBy() {
    const selectedRole = document.getElementById("filter-list").value;
    const selectedSort = document.getElementById("sort-list").value;
    const  onlyActive = document.getElementById("isActive").checked;
    const countryText = document.getElementById("countryText").value.toLowerCase();

    let filtered = userArr;

    if (selectedRole !== "" && selectedRole !== "all") {
        filtered = filtered.filter(u => u.role === selectedRole);
    }

    if (onlyActive === true){
        filtered = filtered.filter(u => u.isActive === true)
    }

    filtered = filtered.filter(u => u.country.toLowerCase().includes(countryText));

    switch (selectedSort) {
        case "nameAZ":
            filtered.sort((a, b) => a.name.localeCompare(b.name))
            break;
        case "nameZA" :
            filtered.sort((a, b) => b.name.localeCompare(a.name))
            break;
        case "ageAsc":
            filtered.sort((a, b) => a.age - b.age)
            break;
        case "ageDesc":
            filtered.sort((a, b) => b.age - a.age)
            break;
    }

    const totalAge = filtered.reduce((acc, u) => {
        return acc + u.age;
    }, 0);

    const avgAge = totalAge / filtered.length;
    document.getElementById("total-users").textContent = `Total Users: ${filtered.length}`;
    document.getElementById("active-count").textContent = `Active Users: ${filtered.filter(u => u.isActive).length}`;
    document.getElementById("avg-age").textContent = `Average Age: ${Math.round(avgAge)}`;
    renderCards(filtered);
}


document.getElementById("filter-list").addEventListener("change", filterBy);
document.getElementById("sort-list").addEventListener("change", filterBy);
document.getElementById("isActive").addEventListener("change", filterBy);
document.getElementById("countryText").addEventListener("input", filterBy);