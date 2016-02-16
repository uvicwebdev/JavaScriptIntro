
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

    $.get('http://httpbin.org/ip', function (resp, err) {
        console.log(resp);
        $('#output').append("<br>Oh and also, I'm spying on you, your ip is: " + resp.origin);
    });

   $.post('http://httpbin.org/post', {name: secretname}, function(data){
    console.log(data);
    $("#output").append("<br>Also I sent your data to a server via HTTP/POST, they can confirm, your secret name is " + data.form.name);
   }, "json");
   return false;

});