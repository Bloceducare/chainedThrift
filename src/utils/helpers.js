export const shortenAddress = (address) => {
    if (!address) return null;
    return `${address.substr(0, 6)}...${address.substr(
        address.length - 4,
        address.length
    )}`;
};

export const fallbackCopyToClipBoard = (text) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        const successful = document.execCommand("copy");
        return successful;
    } catch (err) {
        return false;
    } finally {
        document.body.removeChild(textArea);
    }
};

export const copyToClipBoard = (text) => {
    if (!navigator.clipboard) return fallbackCopyToClipBoard(text);
    return navigator.clipboard
        .writeText(text)
        .then(() => {
            return true;
        })
        .catch((err) => {
            console.error(err);
            return false;
        });
};

export const isValidAmountValue = (value) =>
    /^\d{1,5}$|(?=^.{1,5}$)^\d+\.\d{0,2}$/.test(value);

export const isPositiveInt = (value) => /^\+?([1-9]\d*)$/.test(value);

export const formatDate = (epochTime) => {
    const date = new Date(epochTime * 1000);
    const dateArray = date.toString().split(" ");

    return `${dateArray[1]} ${dateArray[2]}, ${dateArray[3]}`
}

export const validEmail = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
 );

 export const validUsername = new RegExp('^[A-Za-z][A-Za-z0-9_]{7,29}$');
