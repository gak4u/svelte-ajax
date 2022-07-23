const call = (url, options, node) => {
    fetch(url, options).then(res => {
        res.json().then(data => {
            const event = new CustomEvent('response', {detail: data});
            node.dispatchEvent(event);
            if(options.next){
                options.next(data);
            }
        });
    });
}

export default (node, params) => {
    let url = 'https://qrcode-monkey.p.rapidapi.com/qr/uploadImage';
    let options = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': 'f6e693be28mshfb7ac1031d894cep1e1ccbjsnabe739279fbc',
            'X-RapidAPI-Host': 'qrcode-monkey.p.rapidapi.com'
          },
        ...params
    };
    switch(node.tagName) {
        case 'FORM':
            options.method = node.getAttribute('method') || 'POST';
            //url = node.getAttribute('action');
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