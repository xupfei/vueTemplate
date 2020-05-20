import http, { api } from '@/common/http'
let Aapi = api;
import store from '@/store';

const exportFile = ( api, params, method) => {
    let iframe = document.createElement('iframe'),form = document.createElement('form');
    iframe.setAttribute('id', 'id_export');
    form.target = 'id_export';
    form.method = method || 'POST';

    params.tid = 1;
    params.at = store.getters.token;

    Object.keys(params).map(key => {
        form.innerHTML += `<input type="hidden" name="${key}" value="${params[key]}" />`;
    })

    form.setAttribute('action', api );
    iframe.appendChild(form)
    document.getElementsByTagName('body')[0].appendChild(iframe);
    form.submit();
    iframe.remove();
}

const downLoad = ( id ) => {
    let iframe = document.createElement('iframe'),form = document.createElement('form');
    iframe.setAttribute('id', 'id_export');
    form.target = 'id_export';
    form.method = 'GET';
    let params = {
        tid: 1,
        at: localStorage.getItem('tk')
    }
    let api = Aapi + `/file/getDownLoadFile/${id}`;

    Object.keys(params).map(key => {
        if(params[key]) {
            form.innerHTML += `<input type="hidden" name="${key}" value="${params[key]}" />`;
        }
    })

    form.setAttribute('action', api );
    iframe.appendChild(form)
    document.getElementsByTagName('body')[0].appendChild(iframe);

    form.submit();
    iframe.remove();
}

const uploadFile = (api, files, cb ,fileKey = 'excel') => {
    let a = new FormData();
    let config =  {fileKey: {'Content-Type': 'multipart/form-data',timeout:3000000}, onUploadProgress: (event)=> {
        if(cb)cb(event)
    } };
    if(Array.isArray(files)) {
        if(files.length > 0) {
            for (let j = 0; j < files.length; j++) {
                const f = files[j];
                a.append( fileKey, f);
            }
        }
    }else {
        a.append( fileKey, files);
    }
    // console.log(config);
    // console.log(a);
    //有响应时间 导致稍微大一点的文件上传不上去
    return http.post( api, a, config).then(res => {
        return res;
    })

    return 

}

/**
 * type: 文件后缀名
 * return 
 *  
 * */ 
const fileType = (type) => {
    let result = '';
    if(/(jpg|png|gif|ps|jpeg)$/g.test(type)) {
        result = 'jpg';
    }
    if(/(pdf)$/g.test(type)) {
        result = 'pdf';
    }
    if(/(txt)$/g.test(type)) {
        result = 'txt';
    }
    if(/(xlsx|doc)$/g.test(type)) {
        result = 'word';
    }
    if(/(docx|doc)$/g.test(type)) {
        result = 'xlsx';
    }
    if(/(zip)$/g.test(type)) {
        result = 'zip';
    }
    return result;
}

export default {
    exportFile,
    uploadFile,
    downLoad,
    fileType
}