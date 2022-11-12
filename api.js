// https://northwind.vercel.app/api/customers/

const tBodyElement = document.querySelector('tbody');

fetch("https://northwind.vercel.app/api/customers/")
 .then(function(response){
    return response.json();
 })
  .then(function(data){
    console.log(data);
    for(let i=0;i<data.length;i++){
        const trElement = document.createElement('tr');
        const tdIDElement = document.createElement('td');
        const tdComNElement = document.createElement('td');
        const tdConNElement = document.createElement('td');
        const tdCTElement = document.createElement('td');
        const tdAdress1Element = document.createElement('td');
        const tdAdress2Element = document.createElement('td');
        tdIDElement.textContent=data[i].id;
        tdComNElement.textContent=data[i].companyName;
        tdConNElement.textContent=data[i].contactName;
        tdCTElement.textContent=data[i].contactTitle;
        tdAdress1Element.textContent=data[i].address.city;
        tdAdress2Element.textContent=data[i].address.country;
        trElement.append(tdIDElement,tdComNElement,tdConNElement,tdCTElement,tdAdress1Element,tdAdress2Element);
        tBodyElement.appendChild(trElement);
    }
  });
