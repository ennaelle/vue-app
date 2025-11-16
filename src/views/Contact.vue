<template>
  <section>
    <h1>Contact</h1>
    <form @submit.prevent>
      <label>Email : <input type="email" required /></label>
      <label>Message : <textarea required></textarea></label>
      <button type="submit">Envoyer</button>
    </form>
  </section>
</template>

<style>
form {
  display: grid;
  gap: 12px;
  max-width: 400px;
}
input, textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
}
button {
  padding: 8px 12px;
  background: #6366f1;
  border: none;
  color: white;
  border-radius: 6px;
}
</style>
