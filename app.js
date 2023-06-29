async function fetcher(url) {
    try {
    const resp = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    const data = await resp.json();
    return data;
    } catch (error) {
        console.log('Error:', error);
        throw error; // Optionally throw the error
    }
}

async function main() {
    try {
    const result = await fetcher("https://api.ipify.org?format=json");
    // console.log(result);
    return result;
    } catch (error) {
        console.log('Error:', error);
    }
}

const setHtml = (IP) => {
    const elem = document.createElement('div');
    elem.style.fontSize = '25px';
    elem.style.fontWeight = 'bold';
    elem.style.textAlign = 'center';
    elem.innerText = IP;
    console.log(elem);
    document.body.append(elem);
}

const ip = main().then(re => setHtml(re.ip));

