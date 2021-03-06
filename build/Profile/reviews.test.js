var axios = require('axios')

it('"Passing" Test for returning the Reviews', async () => {
    const token = 'sidubcsudbciasunciwunciwsuec'
    await axios.get('http://localhost:9091/zelia/login')
            .then(info => {
                const users = info.data
                const user = users.find(c => c.zelia_token === token)
                expect(user.reviews).toBeDefined()
            })
});


it('"Failing" Test for returning the Reviews', async () => {
    const token = 'sidubcsudbciasunciwunciwsue'
    await axios.get('http://localhost:9091/zelia/login')
            .then(info => {
                const users = info.data
                const user = users.find(c => c.zelia_token === token)
                expect(user).not.toBeDefined()
            })
});