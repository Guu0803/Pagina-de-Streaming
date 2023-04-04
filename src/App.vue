<template>
  <div>
    <div class="cabecalho">
    <div>
      <RouterLink to="/" class="escritaCabecalho">
        Home
      </RouterLink>
    </div>
    <div class="escritaCabecalho">
      Filmes
    </div>
    <div class="escritaCabecalho">
      Minha conta
    </div>
  </div>
  </div>
  

  <router-view />
</template>
  
<style>
.cabecalho {
  width: 100%;
  background-color: #121212;
  display: flex;
  gap: 3vw;
  align-items: center;
  justify-content: center;
  
}

.escritaCabecalho {
  text-decoration: none;
  color: #B2B2B2;
  padding: 1vh;
  font-size: 3vh;
}

.escritaCabecalho:hover {
  cursor: pointer;
  color: #f64348
}
</style>
  

