export function write_text(text) {
    window.navigator.clipboard.writeText(text);
}

export function read_text() {
    var text = "";
    window.navigator.clipboard.readText().then(
        clipText => text = clipText
    );

    return text;
}