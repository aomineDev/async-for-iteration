const lista = ['ditto', 'pikachu']

async function asyncForEach (arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    await callback(arr[i])
  }
}

async function pseudoCallback (e, pokemons) {
  await AsycnEvent(e, pokemons)
  console.log(e)
}

async function AsycnEvent (e, arr) {
  const xd = await fetch('https://pokeapi.co/api/v2/pokemon/' + e)
  const data = await xd.json()

  arr.push(data)
}

async function asyncWithPromises () {
  const pokemons = []

  console.log('1')

  const promises = lista.map(e => pseudoCallback(e, pokemons))

  await Promise.all(promises)
      
  console.log(pokemons)

  console.log('2')
}

async function asyncWithFor () {
  const pokemons = []

  console.log('1')

  await asyncForEach(lista, async e => {
    await AsycnEvent(e, pokemons)
    console.log(e)
  })
      
  console.log(pokemons)

  console.log('2')
}

async function functions () {
  await asyncWithPromises()
  console.log('----------------')
  asyncWithFor()
}

functions()
