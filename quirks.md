## JavaScript quirks

Try these in a JS console
```
# some classics from wat
[] + []
[] + {}
{} + []
{} + {}
"1" + 1
1 + "1"
1 - "1"
"1" - 1

# some others I like
[1] + []
[1] + {}
[] + ![]


# Never everything you've been told is a lie
[] == false
"" == false
true + true
true - (true == false)
3 > 2 > 1

# Everything is an object
"this is a string" instance of String
typeof String("a") == "string"

# There is only one numeric type (its called number) (blame the ieee)
9999999999999999
0.1 + 0.2 === 0.3

# be safe..
parseInt("04")
parseInt("08")
typeof NaN
isNaN(null)
isNaN(null) == 0
typeof null
null instanceof Object

```