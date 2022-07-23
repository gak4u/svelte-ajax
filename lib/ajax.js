const call = (url, options, node) => {
    fetch(ep+url, options).then(res => {
        res.json().then(data => {
            const event = new CustomEvent('response', {detail: data});
            node.dispatchEvent(event);
            if(options.next){
                options.next(data);
            }
        });
    });
}

let ep = '';
let options = {
    method: 'GET',
    headers: {
        'content-type': 'application/json'
    },
};

export default (node, params) => {
    console.log('calling action');
    let url = '';
    options = {...options, ...params};
    switch(node.tagName) {
        case 'FORM':
            options.method = node.getAttribute('method') || 'POST';
            url = node.getAttribute('action') ? node.getAttribute('action') : '';
            node.addEventListener('submit', e => {
                e.preventDefault();
                let formData = new FormData(e.currentTarget);
                if(!options.fromData){
                    let formDataObject = Object.fromEntries(formData.entries());
                    formData = JSON.stringify(formDataObject);
                }
                options.body = formData;
                call(url, options, node);
            });
            break;
    }
}

export const SetupAjax = opts => {
    console.log('calling setup ajax');
    let headers = {...options.headers, ...opts.headers};
    let {endpoint, ...all} = opts;
    ep = endpoint;
    options = {...options, ...all, headers};
}