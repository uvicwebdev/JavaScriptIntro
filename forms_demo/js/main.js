
// Some examples of how JS is asynchronous,
// what do you think the print order is?
setTimeout(function() {console.log(names)}, 1);

var names = [
    "Carman Wardlow",
    "France Sirois",
    "Drew Presti",
    "Sharri Strobel",
    "Margherita Dagenhart",
    "Cristin Haddock",
    "Laticia Barreras",
    "Lecia Saylor",
    "Vernice Turman",
    "Darius Jepson",
    "Sam Dodson",
    "Ralph Beaufort",
    "Bertie Fulmer",
    "Nickie Strayer",
    "Delinda Vitti",
    "Karrie Kerby",
    "Zita Sweeten",
    "Mabel Plunkett",
    "Micaela Vautour",
    "Elroy Kentner",
    "Thersa Wilkerson",
    "Jeanie Lustig",
    "Kyung Applewhite",
    "Brittni Bornstein",
    "Despina Biehl",
    "Minh Slater",
    "Shelia Lagace",
    "Sherilyn Gerow",
    "Gladys Weissman",
    "Corie Goodner",
    "Bula Rotella",
    "Antoine Oren",
    "Lourie Kissell",
    "Marina Ned",
    "Edra Mawson",
    "Lai Roeser",
    "Wally Winegar",
    "Lory Haddox",
    "Birgit Saltz",
    "Bruno Zaragosa",
    "Cherryl Camarena"
]

console.log("oh hey there");

var btn = document.getElementById('btn')

btn.onclick = function() {
    var name = document.getElementById('name').value;
    var n = 0;
    for (var i in name) {
        n += name.charCodeAt(i);
    }
    console.log(n);
    var secretname = names[n % names.length];
    console.log(secretname);

    var output = document.getElementById('output');
    output.innerHTML = "Wow, you secret name is <span id='name'>" + secretname + "</span>";

    return false;

}
