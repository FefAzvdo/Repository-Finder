// Exercícios: Módulo 03

// Todos os exercícios abaixo necessitam que você esteja com o plugin do Async/Await do Babel e o
// babel-polyfill devidamente configurados. Em alguns exercícios é necessário instalar o Axios.

// Exercício

// Transforme os seguintes trechos de código utilizando async/await:

// Função delay aciona o .then após 1s










// const delay = () => new Promise(
//   resolve => setTimeout(resolve, 1000)
// );

// function umPorSegundo() {
//   delay()
//       .then(() => {
//       console.log('1s');
//       delay()
//            .then(() => {
//           console.log('2s');
//           delay()
//                .then(() => {
//              console.log('3s');
//       });
//     })
//   });
// }
// umPorSegundo()

// async function umPorSegundo() {
//   await delay()
//   console.log('1s');
//   await delay()
//   console.log('2s');
//   await delay()
//   console.log('3s');
// }

// umPorSegundo()



/////////////////////////////////////////////////////////////////////////


















import axios from 'axios';

// function getUserFromGithub(user) {
//   axios.get(`https://api.github.com/users/${user}`)
//     .then(response => {
//       console.log(response.data);
//     })
//     .catch(err => {
//       console.log('Usuário não existe');
//     })
// }


// getUserFromGithub('diego3g');
// getUserFromGithub('diego3g124123');

// class Api {
//   static async getUserFromGithub(user) {
//     try {
//       const response = await axios.get(`https://api.github.com/users/${user}`)
//       console.log(response.data);
//     } catch (err) {
//       console.warn('Erro na API')
//     }
//   }
// }



// Api.getUserFromGithub('diego3g');
// Api.getUserFromGithub('diego3g124123');




/////////////////////////////////////////////////////////////////////////







// class Github {
//   static getRepositories(repo) {
//     axios.get(`https://api.github.com/repos/${repo}`)
//       .then(response => {
//         console.log(response.data);
//       })
//       .catch(err => {
//         console.log('Repositório não existe');
//       })
//   }
// }




// class GitHub {
//   static async getRepositories(repo) {
//     try {
//       const response = await axios.get(`https://api.github.com/repos/${repo}`)
//       console.log(response.data)
//     }
//     catch{
//       console.warn('ERRO NA API')
//     }
//   }
// }

// GitHub.getRepositories('rocketseat/rocketseat.com.br');
// GitHub.getRepositories('rocketseat/dslkvmskv');




















const buscaUsuario = async usuario => {
  const response = await axios.get(`https://api.github.com/users/${usuario}`)
  try {
    console.log(response.data);
  }
  catch{
    console.log('Usuário não existe');
  }
}

buscaUsuario('diego3g');

