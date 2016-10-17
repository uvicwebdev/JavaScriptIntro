
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

$('#btn').click(function() {
    var name = $('#name').val();
    var n = 0;
    for (var i in name)
        n += name.charCodeAt(i);
    var secretname = names[n % names.length];
    $('#output').empty().append(
        "Wow, your secret name is <span id='nameText'>" + secretname + "</span>"
    );

    var ipURL = 'http://httpbin.org/ip';

    /*
        TODO: Do a get request with ipURL and do something cool with the result
    */
    var postURL = 'http://httpbin.org/post';
    /*
        TODO: POST the user's name to the postURL
    */

});