<template>
    <div class="card">
        <div>
            {{ plano }}
        </div>
        <div class="descricao">
            {{ descricao }}
        </div>
        <div class="preco">
            {{preco}}
        </div>
        <button>
            Assinar
        </button>
    </div>
</template>
<script>
export default {
    name:"cardPlanos",
    props: ["plano", "preco", "descricao"]
}
</script>
<style scoped>
.card {
    width: 15vw;
    height: 40vh;
    padding: 1vh;
    display: flex;
    flex-direction: column;
    gap: 5vh;
    font-size: 4vh;
    color: #e8e8e8;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(to bottom, #f64348, #181818 );
    border-radius: 10px;
}
.preco {
    color: #e8e8e8;
}
.descricao {
    font-size: 2.5vh;
    color: #e8e8e8;
    min-height: 5vh;
}
button {
    font-size: 2.5vh;
    background-color: #B2B2B2;
    border-radius: 10px;
    padding: 1vh;
    cursor: pointer;
    width: fit-content;
    font-weight: bold;
    color: #282828;
    transition: 200ms ease-in-out;
    border: none;
}
button:hover {
    color: #e8e8e8;
    background-color: #f64348;
    transition: 200ms ease-in-out;
}
</style>