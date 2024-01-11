import axios from 'axios'

const request = function(url: string, method: string, data: any) {
    if(method === 'post') {
        return axios({url, method, data})
    }

    return axios({url, method, data})
}

test('deve criar um name', async () => {
    const input = {
        name: 'kido'
    }

    const raw = await request('http://localhost:3000/name', 'post', input)

    expect(raw.data.name).toBe('kido')
})