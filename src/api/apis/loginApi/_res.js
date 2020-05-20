const context = require.context('./modules', true, /\.js$/);

let api = { };
context.keys().map(file => {
    const apiObj = context(file).default;
    let apiName = file.substr(file.lastIndexOf('/')+1).replace('.js','');
    api[apiName] = Object.assign({},apiObj);
})

export default api;