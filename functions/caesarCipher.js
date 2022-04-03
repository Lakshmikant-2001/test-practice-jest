export function caesarCipher(str, shift) {
    let encryptedMsg = "";
    for (let i = 0; i < str.length; i++)
        str[i].match(/[a-z]/ig) ?
            encryptedMsg += String.fromCharCode(97 + (str.charCodeAt(i) + shift - 97) % 26) :
            encryptedMsg += str[i];
    return encryptedMsg;
}
