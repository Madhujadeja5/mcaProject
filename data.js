 fetch('https://jsonplaceholder.typicode.com/users')
 .then((result)=>{return result.json()})
 .then((res)=>{
    let tbody = document.getElementById('body');
    res.forEach((item)=>{
      console.log(item);
      tbody.innerHTML = tbody.innerHTML+ "<tr><td>"+ item.id+"</td>"+ "<td>"+item.name+"</td>"+"<td>"+ item.email+ "</td>"+"<td>"+item.phno+"</td>"+"<td>"+item.website+"</td></tr>";
    });
    
 }).
 catch((error)=>console.log(error));


 //then(()=>{});
 