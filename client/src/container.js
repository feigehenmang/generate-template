export function getRootContainer() {
    const div = document.createElement('div');
    document.body.appendChild(div);
    return div
}