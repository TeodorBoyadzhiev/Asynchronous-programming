async function getInfo() {

    const input = document.getElementById('stopId');
    const id = input.value;
    const url = 'http://localhost:3030/jsonstore/bus/businfo/' + id;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        const buses = document.getElementById('buses');
        buses.innerHTML = '';
        document.getElementById('stopName').textContent = data.name;
        
        for (let [key, value] of Object.entries(data.buses)) {
            const list = document.createElement('li');
            list.textContent = `Bus ${key} arrives in ${value}`;
            buses.appendChild(list);
        }

        input.value = '';
    } catch (error) {
        document.getElementById('stopName').textContent = 'Error';
    }
}




