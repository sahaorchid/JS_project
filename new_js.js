
function calculator(value){
    if(value==false){
        return;
    }
    var option=prompt("Console calculator\n----------------------------------\n 1.Addition\n 2.Subtraction\n 3.Multipication\n 4.Division\n\nChoose your option");
    switch (option){
        case "1":
            var num1=prompt("Enter the first number");
            var num2=prompt("Enter the second number");
            var ans=parseInt(num1)+parseInt(num2);
            alert(`Result:${num1}+${num2}=${ans}`);
            calculator(true);
            break;
        case "2":
            num1=prompt("Enter the first number");
            num2=prompt("Enter the second number");
            ans=parseInt(num1)-parseInt(num2);
            alert(`Result:${num1}-${num2}=${ans}`);
            calculator(true);
            break;
        case "3":
            num1=prompt("Enter the first number");
            num2=prompt("Enter the second number");
            ans=parseInt(num1)*parseInt(num2);
            alert(`Result:${num1}*${num2}=${ans}`);
            calculator(true);
            break; 
        case "4":
            num1=prompt("Enter the first number");
            num2=prompt("Enter the second number");
            if(num2==="0"){
                alert("Division by zero 🧮");
                calculator(true);
                break;
            }
            else{
                ans=parseInt(num1)/parseInt(num2);
                alert(`Result:${num1}/${num2}=${ans}`);
                calculator(true);
                break; 
            }      

        default:
            if(confirm("Do you want to quit?")){
                calculator(false);
                break;
            }
            else{
                calculator(true);
                break;
            }  
    }
}
calculator(true);