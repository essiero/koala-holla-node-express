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
      <tr>
        <td>${koala.name}</td>
        <td>${koala.age}</td>
        <td>${koala.gender}</td>
        <td>${koala.ready_to_transfer}</td>
        <td>${koala.notes}</td>
  </tr>
    `
  }
}

function saveKoala(){
  console.log( 'in saveKoala' );
  // axios call to server to get koalas
 
}

getKoalas();
