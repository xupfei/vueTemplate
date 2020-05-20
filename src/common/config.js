const nowEnv = process.env.NODE_ENV;

const env = {
    development: { //开发
        // api: "http://200.200.3.25:8087",  

    },
    production: { //生产
        // api: "http://47.93.236.219:8081",
    },
    test: { //测试
        // api: 'http://39.106.87.222:8087' , //测试
        // api: 'http://39.105.118.36:8087',     //联调   
    }
}

export default env[nowEnv];