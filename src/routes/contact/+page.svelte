<svelte:head>
  <title>Contact me</title>
</svelte:head>

<h1>Contact</h1>
<form action="mailto:marissac@mit.edu" method="get">
    <label for="email">Email: </label><input type="email" name="email" placeholder="Your email">
    <label for="subject">Subject: </label><input name="subject" placeholder="Subject">
    <label for="message">Your message: </label><textarea name="message" placeholder="Your message"></textarea>
    <button type="submit">Send</button>
</form>