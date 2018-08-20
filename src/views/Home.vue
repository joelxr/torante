<template>
  <div class="container">
    <div class="tile is-ancestor">
      <div class="tile is-4 is-vertical is-parent">
        <div class="tile is-child box">
          <div class="title">
            <div class="level">
              <div class="level-left">Produtos</div>
              <div class="level-right"><i class="fa fa-shopping-bag"></i></div>
            </div>
          </div>
          <div>
            <router-link to="/produto">Ver produtos </router-link>
          </div>
        </div>
        <div class="tile is-child box">
          <div class="title">
            <div class="level">
              <div class="level-left">Receitas</div>
              <div class="level-right"><i class="fa fa-file"></i></div>
            </div>
          </div>
          <div>
            <router-link to="/receita">Ver receitas</router-link>
          </div>
        </div>
      </div>
      <div class="tile is-parent">
        <div class="tile is-child box">
          <div class="title">
            <div class="level">
              <div class="level-left">Fornecedores</div>
              <div class="level-right"><i class="fa fa-building"></i></div>
            </div>
          </div>
          <div>
            <router-link to="/fornecedor">Ver fornecedores</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>
