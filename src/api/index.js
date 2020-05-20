const context = require.context('./apis', true, /\_res.js$/);

let api = { };
context.keys().map(file => {
    const apiObj = context(file).default;
    let apiName = file.split('/')[1];
    api[apiName] = Object.assign({},apiObj);
})

export default api;