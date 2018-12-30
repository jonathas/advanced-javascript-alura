class HttpService {

    _handleErrors(res) {
        if (res.ok) {
            return res;
        }
        throw new Error(res.statusText);
    }

    get(url) {
        return fetch(url)
            .then(res => this._handleErrors(res))
            .then(res => res.json());
    }

    post(url, dado) {
        return fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(dado)
            })
            .then(res => this._handleErrors(res));
    }
}