<template>
  <div id="app">
    <nav
      id="nav"
      class="navbar is-primary"
      role="navigation"
      aria-label="main-navigation"> 
      <div class="navbar-brand">
        <a
          class="navbar-item"
          href="/">
          <i class="fa fa-2x fa-home"/>
        </a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
        <router-link
          class="navbar-item"
          to="/receita">
          Receitas
        </router-link>
        <router-link
          class="navbar-item"
          to="/produto">
          Produtos
        </router-link>
        <router-link
          class="navbar-item"
          to="/fornecedor">
          Fornecedor
        </router-link>
      </div>
      </div>
    </nav>
    <section class="section">
      <div class="container">
        <router-view/>
      </div>
    </section>
  </div>
</template>

<style lang="sass">
  @import "../node_modules/bulma/bulma";
  @import "../node_modules/font-awesome/css/font-awesome.min.css";
</style>
