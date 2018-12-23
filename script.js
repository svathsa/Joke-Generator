async function getJokesFromServer(){
  const resp = await fetch('http://api.icndb.com/jokes/random');
  return resp.json();
}

const btn = document.querySelector('#btn');
console.log(btn);
btn.addEventListener('click', async function(e){
  const jokesFromServer = await getJokesFromServer();
  const text = jokesFromServer.value.joke;
  document.getElementById("joke").innerHTML = '<h3>'+text+'</h3>';
});
