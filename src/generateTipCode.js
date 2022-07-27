import css from "!!style-loader!css-loader!sass-loader!./generateTipCode.scss";

addEventListener('input', e => {
    let link = 'https://idriss.xyz/tip';
    let params = {};
    if (document.querySelector('input[name="identifier"]').value) {
        params.identifier = document.querySelector('input[name="identifier"]').value;
    }
    if (document.querySelector('input[name="recipient"]').value) {
        params.recipient = document.querySelector('input[name="recipient"]').value;
    }
    if (params.recipient && !params.identifier) {
        params.identifier = params.recipient.substring(0, 10) + '...';
    }
    if (Object.values(params).length) {
        link += '?' + Object.entries(params).map(([k, v]) => encodeURIComponent(k) + '=' + encodeURIComponent(v)).join('&');
    }
    let html = `<script src="https://idriss.xyz/static/js/idrissTippingSDK.js"></script><a href="${link}" onclick='idrissShowTippingPopup(${JSON.stringify(params)},event)'>Send me crypto</a>`;
    document.querySelector('.result.link>div').textContent = link
    document.querySelector('.result.html>div').textContent = html
})