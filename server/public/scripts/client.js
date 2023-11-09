console.log( 'js' );

function getKoalas(){
  console.log( 'in getKoalas' );
  // axios call to server to get koalas
  axios({
    method: 'GET',
    url: '/koalas'
  }).then((response) => {
    console.log('refreshKoalas() response', response.data);
    renderKoalas(response.data);
  }).catch((error) => {
    console.log('Error in GET', error);
  })
} // end getKoalas

function renderKoalas(data){
  const koalaTable = document.getElementById('viewKoalas')
  koalaTable.innerHTML = '';

  for(let koala of data){
    koalaTable.innerHTML += /*html*/`
      <tr data-koalaid="${koala.id}">
        <td>${koala.name}</td>
        <td>${koala.age}</td>
        <td>${koala.gender}</td>
        <td>${koala.ready_to_transfer}</td>
        <td>${koala.notes}</td>
        <td>${!koala.ready_to_transfer ? '<button onclick="markReady(event)">Ready to Transfer</button>' : ''}</td>
        <td><button onclick="deleteKoala(event); alertMessage()">Delete</button></td>

  </tr>
    `
  }
}



function deleteKoala(event){
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      let clickedButton = event.target;
      let theTableRow = clickedButton.closest('tr');
      let koalaID = theTableRow.getAttribute('data-koalaid');
      console.log('Koala ID', koalaID)
  
      axios({
        method: 'DELETE',
        url: `/koalas/${koalaID}`
      }).then((response) => {
        getKoalas();
      }).catch((error) => {
        console.log('DELETE /koalas/:id fail', error)
      })

      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
    }
  })

}

function markReady(event){
  let clickedButton = event.target;
  let theTableRow = clickedButton.closest('tr');
  let koalaID = theTableRow.getAttribute('data-koalaid');
  axios({
    method: 'PUT',
    url: `/koalas/${koalaID}`
  }).then((response) => {
    getKoalas();
  }).catch((error) => {
    console.log('PUT /koalas/:id fail', error)
  })
}

function saveKoala(event){
  event.preventDefault();
  console.log( 'in saveKoala' );
  let koala = {};
  koala.name = document.getElementById('nameIn').value;
  koala.age = document.getElementById('ageIn').value;
  koala.gender = document.getElementById('genderIn').value;
  koala.ready_to_transfer = document.getElementById('readyForTransferIn').checked;
  koala.notes = document.getElementById('notesIn').value;
  console.log('New Koala: ', koala)

  // axios call to server to get koalas
 axios({
  method: 'POST',
  url: '/koalas',
  data: koala,
 }).then(response => {
  getKoalas();
 }).catch(error => {
  console.log('Error in POST', error)
  alert('Unable to add koala.');
 })
}

getKoalas();
