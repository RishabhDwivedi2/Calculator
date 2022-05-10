let calcy= () =>{
    let wb = document.getElementById('wb').value;
    let maths = document.getElementById('maths').value;
    let com = document.getElementById('com').value;
    let phy = document.getElementById('phy').value;
    let total=parseFloat(wb)+parseFloat(maths)+parseFloat(com)+parseFloat(phy);
    // alert(total);

    let perc=(total/400) * 100;
    let grades="";
    
    if(perc <= 100 && perc >= 80){
        grades='A';
    }else if(perc<=79 && perc >= 60){
            grades='B';
        } else{  grades='C';
            }
        
        document.getElementById('showData').innerHTML=`Out of 400 your marks is ${total} and percentage is ${perc}%. <br> Your grade is ${grades}. `
    }