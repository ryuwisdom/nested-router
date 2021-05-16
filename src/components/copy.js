export function copyToClipboard() {

    const urlInput = document.getElementById("urlInput"); //현재 URL 가져오기
    urlInput.value = window.document.location.href; //clipboard 복사
    urlInput.select();
    document.execCommand("copy");
}