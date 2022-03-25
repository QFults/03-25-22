const addHotdog = async (data) => {
  try {
    const response = await fetch('/api/hotdogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    return response.json()
  } catch (err) {
    return err
  }
}

document.getElementById('addHotdog').addEventListener('click', event => {
  event.preventDefault()
  addHotdog({
    name: document.getElementById('name').value,
    description: document.getElementById('description').value
  })
    .then(hotdog => {
      console.log(hotdog)
      const hotdogElem = document.createElement('div')
      hotdogElem.innerHTML = `
        <hr>
        <h3>Name: ${hotdog.name}</h3>
        <p>Description: ${hotdog.description}</p>
        <hr>
      `
      document.getElementById('hotdogs').append(hotdogElem)
      document.getElementById('name').value = ''
      document.getElementById('description').value = ''
    })
    .catch(err => console.error(err))
})
