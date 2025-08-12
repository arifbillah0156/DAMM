export default function ShareNotice({ url, title }) {
    if (navigator.share) {
        navigator.share({
            title: title,
            url: url
        })
            .then(() => console.log('✅ Shared successfully!'))
            .catch((error) => console.error('❌ Error sharing:', error));
    } else {
        // পুরনো ব্রাউজার হলে fallback
        alert("Your browser doesn't support direct sharing. Copy the link instead:\n" + url);
    }
}
