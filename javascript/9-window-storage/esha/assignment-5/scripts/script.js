function setCookie(name, value) {
    document.cookie = `${name}=${value}; expires=Fri, 31 Dec 2025 23:59:59 UTC; path=/`;
}

function getCookie(name) {
    const cookieString = document.cookie;
    const cookies = cookieString.split('; ');
    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=');
        if (cookieName === name) {
            return cookieValue;
        }
    }
    return ''; 
}

function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
}

document.getElementById('setCookieBtn').addEventListener('click', () => {
    const name = document.getElementById('cookieNameInput').value;
    const value = document.getElementById('cookieValueInput').value;
    if (name && value) {
        setCookie(name, value);
    }
});

document.getElementById('getCookieBtn').addEventListener('click', () => {
    const name = document.getElementById('getCookieInput').value;
    const result = getCookie(name);
    document.getElementById('cookieOutput').textContent = result ? `Value: ${result}` : 'Cookie not found.';
});

document.getElementById('deleteCookieBtn').addEventListener('click', () => {
    const name = document.getElementById('deleteCookieInput').value;
    deleteCookie(name);
});