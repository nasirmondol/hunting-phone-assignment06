const searchPhone = () =>{
    const searchInput = document.getElementById('search-text')
    const searchText = searchInput.value;
    searchInput.value = '';
    fetch(` https://openapi.programming-hero.com/api/phones?search=${searchText}`) 
    .then(res => res.json())
    .then(data => displayLoadPhone(data.data))
}
searchPhone('phone');

// display load phone
const displayLoadPhone = phones =>{
    const sectionContainer = document.getElementById('section-container')
    sectionContainer.textContent = '';
    phones?.forEach(phone =>{
        // console.log(phone)
        const div = document.createElement('div')
        div.classList.add('col')
        div.style.margin = '15px'
        div.style.padding = '8px'
        div.style.width = '325px'
        div.style.border = '1px solid orange';
        div.style.borderRadius = '5px';
        div.innerHTML = `
          <img src="${phone.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title text-success">${phone.brand}</h5>
            <h4 class="card-text text-primary">${phone.phone_name}</h4>
            <button onclick="loadPhoneDetails('${phone?.slug}')" type="button" class="btn btn-success">See details</button>

          </div>
        `;
        sectionContainer.appendChild(div)
    })
}

// Phone details
const loadPhoneDetails = phoneName =>{
  const url = `https://openapi.programming-hero.com/api/phone/${phoneName}`;
  fetch(url)
  .then(res => res.json())
  .then(data => displayDetails(data.data))
}

const displayDetails = phone =>{
  console.log(phone)
  const details = document.getElementById('phone-details');
  const div = document.createElement('div');
  div.innerHTML = `
  <img src="${phone.image}" class="card-img-top" width='100px' alt="...">
  <ul >
    <h4 class="card-title">${phone.name}</h4>
    <h6>${phone.releaseDate ? phone.releaseDate :'Release date not found'}</h6>
    <h6 ">${phone.others.Bluetooth }</h6>
    <h6 class="list-group-item">${phone.others.GPS}</h6>
    <h6 class="list-group-item">${phone.others.GPS}</h6>
    <h6 class="list-group-item">${phone.others.USB}</h6>
    <h6 class="list-group-item">Sensors Info: ${phone.mainFeatures.sensors[0]}</h6>
    <h6 class="list-group-item">Sensors Info: ${phone.mainFeatures.sensors[1]}</h6>
    <h6 class="list-group-item">Sensors info: ${phone.mainFeatures.sensors[2]}</h6>
  </ul>
  `;
  details.appendChild(div)
}


// class="list-group list-group-flush"


