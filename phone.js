const searchPhone = () =>{
    const searchInput = document.getElementById('search-text')
    const searchText = searchInput.value;
    // console.log(searchText)
    searchInput.value = '';
    fetch(` https://openapi.programming-hero.com/api/phones?search=${searchText}`) 
    .then(res => res.json())
    .then(data => displayLoadPhone(data.data))
}

const displayLoadPhone = phones =>{
    // console.log(phones.data)
    const sectionContainer = document.getElementById('section-container')
    phones.forEach(phone =>{
        console.log(phone)
        const div = document.createElement('div')
        div.classList.add('col')
        div.style.margin = '15px'
        div.style.padding = '8px'
        div.style.width = '325px'
        div.style.border = '1px solid orange';
        div.style.borderRadius = '5px';
        // div.style.backgroundColor = 'blue'
        div.innerHTML = `
          <img src="${phone.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title text-success">${phone.brand}</h5>
            <h4 class="card-text text-primary">${phone.phone_name}</h4>
            <button type="button" class="btn btn-success">See details</button>

          </div>
        `;
        sectionContainer.appendChild(div)
    })

}

searchPhone('phone');



