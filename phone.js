const searchPhone = () =>{
    const searchInput = document.getElementById('search-text')
    const searchText = searchInput.value;
    // console.log(searchText)

    searchInput.value = '';
    fetch(` https://openapi.programming-hero.com/api/phones?search=${searchText}`) 
    .then(res => res.json())
    .then(data => console.log(data.data))
}