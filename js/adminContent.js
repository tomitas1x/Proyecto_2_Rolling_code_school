const validationUser = () => {
    const roleUser = localStorage.getItem('role');

    if(roleUser === 'admin'){
        alert('Bienvenido al panel de Adm');
    }else{
        window.location.href = '../pages/paguina_principal.html'
    }
}

validationUser();


const getSongs = async () => {
    const songs = await fetch('http://localhost:3000/songs');
    const results = await songs.json()

    const tableBody = document.getElementById('tableBody');

    const canciones = results.map(song => {
        return `<tr>
             <th scope="row">${song.id}</th>
             <td>${song.name}</td>
             <td>${song.Autor}</td>
             <td>${song.album}</td>
             <td>${song.category}</td>
             <td>${song.featured}</td>
             <td><button onclick=deleteSong(${song.id})>Eliminar</button></td>
             <td><button type="button" class="btn btn-primary" data-bs-toggle="modal" onclick=getId(${song.id}) data-bs-target="#exampleModal">Editar!</button></td>
         </tr>
         `
     });

     tableBody.innerHTML = canciones.join('');
};

getSongs();

// EDITAR CANCIONES 


const upgradeSong = () => {
   const songId = localStorage.getItem('songId')
    const editName = document.getElementById('editName').value;
    const editAutor = document.getElementById('editAutor').value;
    const editAlbum = document.getElementById('editAlbum').value;
    const editCategory = document.getElementById('editCategory').value;

    
     fetch(`http://localhost:3000/songs/${songId}`,{
         method: 'PATCH',
          body: JSON.stringify({       
            name : editName,
            Autor : editAutor,
            album : editAlbum,
            category : editCategory
          }),
          headers: {
             'Content-type': 'application/json; charset=UTF-8',
         }
     })
} 

const getId = (id) => {
     localStorage.setItem('songId', id)
 }


// BORAR CANCION DE LA BASE DE DATOS 

const deleteSong = (id) => {
    fetch(`http://localhost:3000/songs/${id}`,{
        method: 'DELETE'
    });
}