const options=document.getElementById("bank-selection");
const search=document.getElementById("bank-search");


var jsonObjt;
    fetch('https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI')
    .then(response => response.json())
    .then(data => jsonObjt=data)
    .then(function(){
        search.addEventListener('keyup', function(e){
            let searchValue=e.target.value.toUpperCase();
            
            console.log(searchValue);
            document.getElementById("table-body").innerHTML="";
            if(searchValue!=''&&options.value.toUpperCase()=='MUMBAI')
            {
                let count=0;
                jsonObjt.forEach(function(item){

                    if(item.ifsc.toUpperCase().indexOf(searchValue)!==-1||item.bank_id.toString().indexOf(searchValue)!==-1
                    ||item.branch.toUpperCase().indexOf(searchValue)!==-1||item.address.toUpperCase().indexOf(searchValue)!==-1
                    ||item.city.toUpperCase().indexOf(searchValue)!==-1||item.district.toUpperCase().indexOf(searchValue)!==-1
                    ||item.state.toUpperCase().indexOf(searchValue)!==-1||item.bank_name.toUpperCase().indexOf(searchValue)!==-1)
                    {
                        
                        const tb=document.getElementById("table-body")
                        const row=document.createElement("tr");
                        
                    
                        row.innerHTML=`
                        <td>${item.ifsc}</td>
                        <td>${item.bank_id}</td>
                        <td>${item.branch}</td>
                        <td>${item.address}</td>
                        <td>${item.city}</td>
                        <td>${item.district}</td>
                        <td>${item.state}</td>
                        <td>${item.bank_name}</td>`;
                        tb.appendChild(row);
                        count++;
                    }
                });
                console.log(count);
                
            }
            else{
                    //add code to delete all rows from dom
                    document.getElementById("table-body").innerHTML="";
                }
            document.getElementById("table-body").addEventListener("click",function(e){
            /*console.log(e.target);
            row=e.target.parentElement;
            console.log(row);
            ifsc=row.cells[0].innerHTML;
            console.log(ifsc);*/
            window.location.href = "bank.html"; 
            //document.getElementById("header").innerHTML="Welcome to our bank"'//-${ifsc}`;
        });
            
           
    });
    
        
});

