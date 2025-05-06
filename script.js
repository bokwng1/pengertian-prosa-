document.getElementById('joinForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman formulir

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    alert(`Terima kasih, ${name}! Anda telah terdaftar dengan email: ${email}`);
    
    // Kosongkan formulir setelah pengiriman
    document.getElementById('joinForm').reset();
});
