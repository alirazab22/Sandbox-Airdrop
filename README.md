<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sand Token Airdrop</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        header {
            background-color: #333;
            color: #fff;
            padding: 10px 0;
            text-align: center;
        }
        nav {
            background-color: #444;
            color: #fff;
            text-align: center;
            padding: 10px 0;
        }
        nav ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
        }
        nav ul li {
            display: inline;
            margin: 0 10px;
        }
        nav ul li a {
            text-decoration: none;
            color: #fff;
        }
        section {
            padding: 20px;
            margin: 20px;
            background-color: #fff;
            border-radius: 5px;
        }
        footer {
            background-color: #333;
            color: #fff;
            padding: 10px 0;
            text-align: center;
            position: fixed;
            bottom: 0;
            width: 100%;
        }
        .contact-form {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .contact-form input, .contact-form button {
            margin: 10px;
            padding: 8px;
            width: 300px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <header>
        <h1>Sand Token Airdrop</h1>
    </header>
    <nav>
        <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    <section id="about">
        <h2>About Sand Token Airdrop</h2>
        <p>Welcome to Sand Token Airdrop! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        <p>Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.</p>
    </section>
    <section id="contact">
        <h2>Contact Us</h2>
        <form class="contact-form">
            <input type="text" placeholder="Name">
            <input type="email" placeholder="UserEmail">
            <button id="connectWallet">Connect Wallet</button>
            <button type="submit">Submit</button>
        </form>
    </section>
    <footer>
        &copy; 2024 Sand Token Airdrop
    </footer>

    <script>
        // Function to handle connecting wallet
        function connectWallet() {
            // Implement your MetaMask wallet connection logic here
            alert("Connecting to MetaMask wallet...");
        }

        // Event listener for Connect Wallet button
        document.getElementById("connectWallet").addEventListener("click", connectWallet);
    </script>
</body>
</html>
