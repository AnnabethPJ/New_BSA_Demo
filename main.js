const options=document.getElementById("bank-selection");
const search=document.getElementById("bank-search");




//console.log(jsonObjt);


/*var jsonObjt=[{
    name:'Sush',
    age:21,
    city:'Mumbai'
},
{
    name:'bharg',
    age:30,
    city:'Mumbai'
},
{
    name:'bharg',
    age:30,
    city:'Mumbai'
},
{
    name:'bharg',
    age:30,
    city:'Banglore'
},
{
    name:'barg',
    age:30,
    city:'Banglore'
}];

/*options.addEventListener('change',(e)=>{

    var data=jsonObjt.filter((obj)=>obj.city.toUpperCase()==e.target.value.toUpperCase());
    console.log(data);

});*/

/*search.addEventListener('keydown', (e,jsonObjt)=>{
    let searchValue=e.target.value;
    //let cityValue=options.value.toUpperCase();

    jsonObjt.forEach((item)=>{
        if(item.name.toUpperCase().indexOf(searchValue.toUpperCase())||item.age.indexOf(searchValue)){
            const tb=document.getElementById("table-body")
            const row=document.createElement("tr");

            row.innerHTML=`
            <td>${item.name}</td>
            <td>${item.age}</td>
            <td>${item.city}</td>`;

            tb.appendChild(row);
            }
        });
});*/

search.addEventListener('keyup', function(e){
    let searchValue=e.target.value.toUpperCase();
    console.log(searchValue);
    document.getElementById("table-body").innerHTML="";

    //let cityValue=options.value.toUpperCase();
    //console.log(jsonObjt);
    if(searchValue!=''&&options.value.toUpperCase()=='MUMBAI')
    {
        /*let count=0;
        //let i,j,row,col;
        var table=document.getElementById("bank-table");
        
        for(let i=1,row;row=table.rows[i];i++){
            console.log(row);
            for(let j=0,col;col=row.cells[j];j++){
                console.log(col);
                if(col.textContent!==''&&col.textContent.toUpperCase().indexOf(searchValue)!==-1){
                    console.log(col.textContent);
                    count++;
                    console.log(count);
                    
                }
            }
        }
        console.log(count);
        if(count==0){*/
            var jsonObjt;
            fetch('https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI')
            .then(response => response.json())
            .then(data => jsonObjt=data)
            .then(()=>console.log((jsonObjt)))
            
            .then(function(){
                jsonObjt.forEach(function(item){
                
                //console.log(item);
                    if(item.ifsc.toUpperCase().indexOf(searchValue)!==-1||item.bank_id.toString().indexOf(searchValue)!==-1
                    ||item.branch.toUpperCase().indexOf(searchValue)!==-1||item.address.toUpperCase().indexOf(searchValue)!==-1
                    ||item.city.toUpperCase().indexOf(searchValue)!==-1||item.district.toUpperCase().indexOf(searchValue)!==-1
                    ||item.state.toUpperCase().indexOf(searchValue)!==-1||item.bank_name.toUpperCase().indexOf(searchValue)!==-1)
                    {
                        //console.log(item);
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
                    }
            });
        });
        //}
        /*else{
            document.getElementById("table-body").innerHTML="";

        }*/
    }
        
    
    else{
        //add code to delete all rows from dom
        document.getElementById("table-body").innerHTML="";
    }
   
});




