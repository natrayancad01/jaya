<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Demo</title>
</head>
<body>
    <h1>Welcome to  Javascript  Demo</h1>
    <input type="text" id="v1" name="v1" value=""><br>
    <input type="text" id="v2" name="v2" value=""><br>
    <input type="submit" value="Additon" onclick="operatorFun('+')">
    <input type="submit" value="subtraction" onclick="operatorFun('-')">
    <input type="submit" value="multiplication" onclick="operatorFun('*')">
    <input type="submit" value="division" onclick="operatorFun('/')">

    <p id="result"> for output</p>



    <script>
        function operatorFun(a){
            var value1=document.getElementById("v1").value;
            var value2=document.getElementById("v2").value;
            value1=Number(value1);
            value2=Number(value2);

            //var a="-";
            switch(a){
                case '+':
                document.getElementById("result").innerHTML=  value1 + value2;
                break;
                case '-':
                document.getElementById("result").innerHTML=  value1 - value2;
                break;
                case '*':
                document.getElementById("result").innerHTML=  value1 * value2;
                break;
                case '/':
                document.getElementById("result").innerHTML=  value1 / value2;
                break;

            }

        }
    </script>    


</body>
</html>