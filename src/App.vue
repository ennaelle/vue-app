<template>
  <div>
    <header>
      <nav>
        <RouterLink to="/">Accueil</RouterLink>
        <RouterLink to="/apropos">À propos</RouterLink>
        <RouterLink to="/contact">Contacts</RouterLink>
      </nav>
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup>
</script>

<style>
nav {
  display: flex;
  gap: 12px;
  padding: 16px;
  background: #0f172a;
}
nav a {
  color: #e5e7eb;
  text-decoration: none;
}
nav a.router-link-active {
  font-weight: bold;
  border-bottom: 2px solid #6366f1;
}
</style>
